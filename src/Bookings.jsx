import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import Navbar from "./Navbar";
import AppointmentsList from "./AppointmentsList";
import { useAuth } from "./AuthContext";

const Bookings = () => {
  const database = getDatabase();
  const appointmentsRef = ref(database, "/appointments");
  const { user } = useAuth();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = () => {
      onValue(appointmentsRef, (snapshot) => {
        const appointmentsData = snapshot.val();
        if (appointmentsData) {
          const appointmentsArray = Object.values(appointmentsData);

          const userEmail = user ? user.email : null;

          const userAppointments = userEmail
            ? appointmentsArray.filter(
                (appointment) => appointment.userEmail === userEmail
              )
            : [];

          setAppointments(userAppointments);
        }
      });
    };

    fetchAppointments();

    return () => {
      off(appointmentsRef);
    };
  }, [appointmentsRef, user]);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
          <AppointmentsList appointments={appointments} />
        </div>
      </div>
    </>
  );
};

export default Bookings;
