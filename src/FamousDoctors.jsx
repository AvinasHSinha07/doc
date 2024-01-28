import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FamousDoctors = () => {
  const [famousDoctors, setFamousDoctors] = useState([]);

  const database = getDatabase();
  const doctorsRef = ref(database, "/doctors");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(doctorsRef);
        const data = snapshot.val();

        if (data) {
          const allDoctors = Object.values(data);
          const selectedDpctors = allDoctors.slice(0, 12);

          setFamousDoctors(selectedDpctors);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [doctorsRef]);
  return (
    <section className="py-10 bg-[#EEEDEB]">
      <div className="container  mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Famous Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {famousDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="mx-auto rounded-full mb-4"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold mb-2">{doctor.dname}</h3>
              <p className="text-gray-600 mb-2">{doctor.department}</p>
              <p className="text-gray-500">{doctor.time}</p>
              <Link
                to={`/doctor/${doctor.id}`}
                className="text-blue-500 font-semibold mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/alldoctors"
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          View All Doctors
        </Link>
      </div>
    </section>
  );
};

export default FamousDoctors;
