import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { getDatabase, ref, get } from "firebase/database";

const AllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const database = getDatabase();
  const doctorsRef = ref(database, "/doctors");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(doctorsRef);
        const data = snapshot.val();

        if (data) {
          const allDoctors = Object.values(data);

          setAllDoctors(allDoctors);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doctorsRef]);

  return (
    <>
      <Navbar />
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">All Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={doctor.image}
                  alt={doctor.dname}
                  className="mx-auto rounded-full mb-4"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <h3 className="text-lg font-semibold mb-2">{doctor.dname}</h3>
                <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                <p className="text-gray-500">{doctor.department}</p>
                <Link
                  to={`/doctor/${doctor.id}`}
                  className="text-blue-500 font-semibold mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllDoctors;
