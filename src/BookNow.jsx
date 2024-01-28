import { useState, useEffect } from "react";
import { getDatabase, ref, push, get } from "firebase/database";
import Navbar from "./Navbar";
import { useAuth } from "./AuthContext";

const BookNow = () => {
  const { user } = useAuth();
  const database = getDatabase();
  const appointmentsRef = ref(database, "/appointments");
  const doctorsRef = ref(database, "/doctors");

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [selectedDoctorData, setSelectedDoctorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsSnapshot = await get(doctorsRef);
        const doctorsData = doctorsSnapshot.val();

        setDoctorAvailability(doctorsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doctorsRef]);

  useEffect(() => {
    const selectedDocData = doctorAvailability.find(
      (doc) => doc.dname === selectedDoctor
    );
    setSelectedDoctorData(selectedDocData);
  }, [selectedDoctor, doctorAvailability]);

  const isDoctorAvailable = (doctor, dayOfWeek) => {
    const availabilityDays = doctor.availability.map((day) =>
      day.toLowerCase()
    );
    return availabilityDays.includes(dayOfWeek.toLowerCase());
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User not logged in.");
      return;
    }

    if (selectedDoctorData && appointmentDate) {
      const dayOfWeek = getDayOfWeek(appointmentDate);

      if (isDoctorAvailable(selectedDoctorData, dayOfWeek)) {
        const newAppointment = {
          userId: user.uid,
          userEmail: user.email,
          department: selectedDepartment,
          doctor: selectedDoctor,
          date: appointmentDate,
        };

        try {
          const newAppointmentRef = push(appointmentsRef, newAppointment);
          console.log("Appointment Details:", newAppointment);
          console.log(newAppointmentRef);

          setSelectedDepartment("");
          setSelectedDoctor("");
          setAppointmentDate("");
        } catch (error) {
          console.error("Error saving appointment to the database:", error);
        }
      } else {
        console.log("Selected doctor is not available on the chosen day.");
      }
    }

    setSelectedDepartment("");
    setSelectedDoctor("");
    setAppointmentDate("");
  };

  return (
    <>
      <Navbar />
      <div className="flex bg-[#ffffff] items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            Book Appointment
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="doctor"
                className="block text-sm font-semibold text-gray-600"
              >
                Doctor:
              </label>
              <select
                id="doctor"
                name="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                required
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                {doctorAvailability.map((doctor) => (
                  <option key={doctor.dname} value={doctor.dname}>
                    {doctor.dname}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <p>Department: {selectedDoctorData?.department || ""}</p>
            </div>
            <div className="mb-4">
              <p>Avilability: {selectedDoctorData?.availability || ""}</p>
            </div>
            <div className="mb-4">
              <p>Contact: {selectedDoctorData?.contact || ""}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="appointmentDate"
                className="block text-sm font-semibold text-gray-600"
              >
                Appointment Date:
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="btn btn-primary bg-sky-600 p-2 rounded-lg text-white w-full "
              >
                Book Now
              </button>
            </div>
            {selectedDoctor && appointmentDate && (
              <div className="text-center text-sm text-gray-600">
                {isDoctorAvailable(
                  selectedDoctorData,
                  getDayOfWeek(appointmentDate)
                )
                  ? <p className="text-red-800">The selected doctor is available on the chosen day.</p>
                  : <p className="text-green-600">The selected doctor is not available on the chosen day.</p>}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNow;
