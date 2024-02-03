/* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { getDatabase, ref, onValue, off } from "firebase/database";
// import Navbar from "./Navbar";
// import AppointmentsList from "./AppointmentsList";
// import { useAuth } from "./AuthContext";

// const Bookings = () => {
//   const database = getDatabase();
//   const appointmentsRef = ref(database, "/appointments");
//   const { user } = useAuth();

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = () => {
//       onValue(appointmentsRef, (snapshot) => {
//         const appointmentsData = snapshot.val();
//         if (appointmentsData) {
//           const appointmentsArray = Object.entries(appointmentsData).map(
//             ([appointmentId, appointmentData]) => ({
//               appointmentId,
//               ...appointmentData,
//             })
//           );

//           const userEmail = user ? user.email : null;

//           const userAppointments = userEmail
//             ? appointmentsArray.filter(
//                 (appointment) => appointment.userEmail === userEmail
//               )
//             : [];

//           setAppointments(userAppointments);
//         }
//       });
//     };

//     fetchAppointments();

//     return () => {
//       off(appointmentsRef);
//     };
//   }, [appointmentsRef, user]);

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center">
//         <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
//           <AppointmentsList appointments={appointments} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookings;

// import { useState, useEffect } from "react";
// import {
//   getDatabase,
//   ref,
//   onValue,
//   off,
//   remove,
//   get,
  
// } from "firebase/database";
// import Navbar from "./Navbar";
// import AppointmentsList from "./AppointmentsList";
// import { useAuth } from "./AuthContext";
// import { app } from "../firebaseConfig";
// // import getUserRole from "./getUserRole";

// const Bookings = () => {
//   const database = getDatabase(app);
//   const appointmentsRef = ref(database, "/appointments");
//   const usersRef = ref(database, "/users");
//   const { user } = useAuth();

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     console.log(user);
//     const fetchAppointments = async () => {
//       try {
//         // Fetch user role from the /users database
//         const userRoleSnapshot = await get(ref(database, `/users/${user.uid}`));
//         const userRole = userRoleSnapshot.exists()
//           ? userRoleSnapshot.val().role
//           : "user";
//         console.log(userRoleSnapshot?.val());
//         console.log(userRole);

//         onValue(appointmentsRef, (snapshot) => {
//           const appointmentsData = snapshot.val();

//           if (appointmentsData) {
//             const appointmentsArray = Object.entries(appointmentsData).map(
//               ([appointmentId, appointmentData]) => ({
//                 appointmentId,
//                 ...appointmentData,
//               })
//             );

//             if (userRole === "admin") {
              
//               console.log(appointmentsArray);
//               setAppointments(appointmentsArray);
//             } else if (userRole === "user") {
              
//               const userEmail = user ? user.email : null;
//               const userAppointments = userEmail
//                 ? appointmentsArray.filter(
//                     (appointment) => appointment.userEmail === userEmail
//                   )
//                 : [];

//               setAppointments(userAppointments);
//             }
//           }
//         });
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };

//     if (user) {
//       fetchAppointments();
//     }

//     return () => {
//       off(appointmentsRef);
//     };
//   }, [appointmentsRef, user, database]);

//   const deleteAppointment = (appointmentId) => {
//     console.log(appointmentId);

//     try {
//       remove(ref(database, `/appointments/${appointmentId}`));
//       // Fetch appointments again or update state to reflect the change in UI
//       console.log("Appointment deleted successfully");
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-5xl m-auto">
//         <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
//           <AppointmentsList
//             appointments={appointments}
//             onDeleteAppointment={deleteAppointment}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookings;



// import { useState, useEffect } from "react";
// import {
//   getDatabase,
//   ref,
//   onValue,
//   off,
//   remove,
//   set,
//   get,
// } from "firebase/database";
// import Navbar from "./Navbar";
// import AppointmentsList from "./AppointmentsList";
// import { useAuth } from "./AuthContext";
// import { app } from "../firebaseConfig";

// const Bookings = () => {
//   const database = getDatabase(app);
//   const appointmentsRef = ref(database, "/appointments");
//   const usersRef = ref(database, "/users");
//   const { user } = useAuth();

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const userRoleSnapshot = await get(ref(database, `/users/${user.uid}`));
//         const userRole = userRoleSnapshot.exists() ? userRoleSnapshot.val().role : "user";
//         console.log(userRoleSnapshot?.val());
//         console.log(userRole);

//         onValue(appointmentsRef, (snapshot) => {
//           const appointmentsData = snapshot.val();

//           if (appointmentsData) {
//             const appointmentsArray = Object.entries(appointmentsData).map(
//               ([appointmentId, appointmentData]) => ({
//                 appointmentId,
//                 ...appointmentData,
//                 approved: appointmentData.approved || false, // Add an 'approved' flag
//               })
//             );

//             if (userRole === "admin") {
//               setAppointments(appointmentsArray);
//             } else if (userRole === "user") {
//               const userEmail = user ? user.email : null;
//               const userAppointments = userEmail
//                 ? appointmentsArray.filter(
//                     (appointment) => appointment.userEmail === userEmail
//                   )
//                 : [];

//               setAppointments(userAppointments);
//             }
//           }
//         });
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };

//     if (user) {
//       fetchAppointments();
//     }

//     return () => {
//       off(appointmentsRef);
//     };
//   }, [appointmentsRef, user, database]);

//   const deleteAppointment = (appointmentId) => {
//     try {
//       remove(ref(database, `/appointments/${appointmentId}`));
//       console.log("Appointment deleted successfully");
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };

//   // New function to handle appointment approval
//   const approveAppointment = (appointmentId) => {
//     try {
//       set(ref(database, `/appointments/${appointmentId}/approved`), true);
//       console.log("Appointment approved successfully");
//     } catch (error) {
//       console.error("Error approving appointment:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-5xl m-auto">
//         <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
//           <AppointmentsList
//             appointments={appointments}
//             onDeleteAppointment={deleteAppointment}
//             onApproveAppointment={approveAppointment}
//               // Pass the new function to the AppointmentsList
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookings;





import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  off,
  remove,
  set,
  get,
} from "firebase/database";
import Navbar from "./Navbar";
import AppointmentsList from "./AppointmentsList";
import { useAuth } from "./AuthContext";
import { app } from "../firebaseConfig";

const Bookings = () => {
  const database = getDatabase(app);
  const appointmentsRef = ref(database, "/appointments");
  const usersRef = ref(database, "/users");
  const { user } = useAuth();

  const [appointments, setAppointments] = useState([]);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userRoleSnapshot = await get(ref(database, `/users/${user.uid}`));
        const role = userRoleSnapshot.exists() ? userRoleSnapshot.val().role : "user";
        setUserRole(role); // Set userRole state

        onValue(appointmentsRef, (snapshot) => {
          const appointmentsData = snapshot.val();

          if (appointmentsData) {
            const appointmentsArray = Object.entries(appointmentsData).map(
              ([appointmentId, appointmentData]) => ({
                appointmentId,
                ...appointmentData,
                approved: appointmentData.approved || false,
              })
            );

            if (role === "admin") {
              setAppointments(appointmentsArray);
            } else if (role === "user") {
              const userEmail = user ? user.email : null;
              const userAppointments = userEmail
                ? appointmentsArray.filter(
                    (appointment) => appointment.userEmail === userEmail
                  )
                : [];

              setAppointments(userAppointments);
            }
          }
        });
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    if (user) {
      fetchAppointments();
    }

    return () => {
      off(appointmentsRef);
    };
  }, [appointmentsRef, user, database]);

  const deleteAppointment = (appointmentId) => {
    try {
      remove(ref(database, `/appointments/${appointmentId}`));
      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const approveAppointment = (appointmentId) => {
    try {
      set(ref(database, `/appointments/${appointmentId}/approved`), true);
      console.log("Appointment approved successfully");
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-5xl m-auto">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Bookings</h1>
          <AppointmentsList
            appointments={appointments}
            onDeleteAppointment={deleteAppointment}
            onApproveAppointment={approveAppointment}
            userRole={userRole} // Pass the user role to AppointmentsList
          />
        </div>
      </div>
    </>
  );
};

export default Bookings;

