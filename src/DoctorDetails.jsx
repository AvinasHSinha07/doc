import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import Navbar from "./Navbar";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const database = getDatabase();
  const doctorsRef = ref(database, "/doctors");

  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(doctorsRef);
        const data = snapshot.val();

        if (data) {
          const selectedDoctor = findDoctorById(data, doctorId);

          setDoctorDetails(selectedDoctor);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [doctorsRef, doctorId]);

  const findDoctorById = (data, id) => {
    for (const doctor of Object.values(data)) {
      if (doctor.id === id) {
        return doctor;
      }
    }
    return null;
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        {loading ? (
          <p>Loading...</p>
        ) : doctorDetails ? (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src={doctorDetails.image}
              alt={doctorDetails.dname}
              className="mx-auto rounded-full mb-4"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mb-4">{doctorDetails.dname}</h2>
            <p className="text-gray-600 mb-4">{doctorDetails.specialization}</p>
            <p className="text-gray-500 mb-4">{doctorDetails.department}</p>
            <p className="text-gray-500 mb-4">{doctorDetails.availability}</p>
            <p className="text-gray-500 mb-4">{doctorDetails.time}</p>
            <p className="text-gray-500 mb-4">{doctorDetails.contact}</p>

            <Link
              to={`/booknow`}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full mt-4 inline-block"
            >
              Book Now
            </Link>
          </div>
        ) : (
          <p>No data found for the selected doctor.</p>
        )}
      </div>
    </>
  );
};

export default DoctorDetails;
