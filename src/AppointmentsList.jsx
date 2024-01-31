/* eslint-disable react/prop-types */


// const AppointmentsList = ({ appointments }) => {
  

//   // console.log(appointments)
//   return (
//     <>
//       <ul className="list-none p-0">
//         {appointments?.map((appointment) => (
//           <li key={appointment.appointmentId} className="border-b py-2">
//             <strong>Doctor:</strong> {appointment.doctor}
//             <br />
//             <strong>Date:</strong> {appointment.date}
//             <br />
//             <strong>User Email:</strong> {appointment.userEmail}
//             <button>X</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default AppointmentsList;








// // import React from "react";

// // const AppointmentsList = ({ appointments, onDeleteAppointment }) => {
// //   const handleDeleteClick = async (appointmentId) => {
// //     try {
// //       // Call the onDeleteAppointment function passed from the parent component
// //       onDeleteAppointment(appointmentId);
// //     } catch (error) {
// //       console.error("Error deleting appointment:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <ul className="list-none p-0">
// //         {appointments?.map((appointment) => (
// //           <li key={appointment.id} className="border-b py-2">
// //             <strong>Doctor:</strong> {appointment.doctor}
// //             <br />
// //             <strong>Date:</strong> {appointment.date}
// //             <br />
// //             <strong>User Email:</strong> {appointment.userEmail}
// //             <button onClick={() => handleDeleteClick(appointment.id)}>X</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // };

// // export default AppointmentsList;






const AppointmentsList = ({ appointments, onDeleteAppointment }) => {
  // console.log(appointments)
  // console.log(appointments)
  return (
    <>
      <ul className="list-none p-0">
        {appointments?.map((appointment) => (
          <li key={appointment.appointmentId} className="border-b py-2">
            <strong>Doctor:</strong> {appointment.doctor}
            <br />
            <strong>Date:</strong> {appointment.date}
            <br />
            <strong>User Email:</strong> {appointment.userEmail}
            <button className="btn btn-primary bg-sky-600 p-2 rounded-lg text-white w-full" onClick={() => onDeleteAppointment(appointment.appointmentId)}>Cancel Appointment</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppointmentsList;

