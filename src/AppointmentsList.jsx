/* eslint-disable react/prop-types */
// const AppointmentsList = ({ appointments, onDeleteAppointment }) => {
//   // console.log(appointments)
//   // console.log(appointments)
//   return (
//     <>
//       <div className="">
//         <div className=" p-4">
//           {appointments?.map((appointment) => (
//             <p key={appointment.appointmentId} className="border-b py-2">
//               <strong>Doctor:</strong> {appointment.doctor}
//               <br />
//               <strong>Date:</strong> {appointment.date}
//               <br />
//               <strong>User Email:</strong> {appointment.userEmail}
//               <button
//                 className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
//                 onClick={() => onDeleteAppointment(appointment.appointmentId)}
//               >
//                 Approve Appointment
//               </button>
//               <button
//                 className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
//                 onClick={() => onDeleteAppointment(appointment.appointmentId)}
//               >
//                 Cancel Appointment
//               </button>
//             </p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppointmentsList;



// const AppointmentsList = ({ appointments, onDeleteAppointment, onApproveAppointment }) => {
//   return (
//     <>
//       <div className="">
//         <div className="p-4">
//           {appointments?.map((appointment) => (
//             <div key={appointment.appointmentId} className="border-b py-2">
//               <strong>Doctor:</strong> {appointment.doctor}
//               <br />
//               <strong>Date:</strong> {appointment.date}
//               <br />
//               <strong>User Email:</strong> {appointment.userEmail}
//               <p>
//                 <strong>Status:</strong> {appointment.approved ? "Approved" : "Pending"}
//               </p>
//               {appointment.approved ? (
//                 <p>Appointment has been approved.</p>
//               ) : (
//                 <>
//                   <button
//                     className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
//                     onClick={() => onApproveAppointment(appointment.appointmentId)}
//                   >
//                     Approve Appointment
//                   </button>
//                   <button
//                     className="btn btn-danger bg-red-600 p-1 mt-4 rounded-lg text-white w-full"
//                     onClick={() => onDeleteAppointment(appointment.appointmentId)}
//                   >
//                     Cancel Appointment
//                   </button>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppointmentsList;


const AppointmentsList = ({ appointments, onDeleteAppointment, onApproveAppointment, userRole }) => {
  return (
    <>
      <div className="">
        <div className="p-4">
          {appointments?.map((appointment) => (
            <div key={appointment.appointmentId} className="border-b py-2">
              <strong>Doctor:</strong> {appointment.doctor}
              <br />
              <strong>Date:</strong> {appointment.date}
              <br />
              <strong>User Email:</strong> {appointment.userEmail}
              <p>
                <strong>Status:</strong> {appointment.approved ? "Approved" : "Pending"}
              </p>
              {appointment.approved ? (
                <p>Appointment has been approved.</p>
              ) : (
                <>
                  {userRole === 'admin' && (
                    <button
                      className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
                      onClick={() => onApproveAppointment(appointment.appointmentId)}
                    >
                      Approve Appointment
                    </button>
                  )}
                  <button
                    className="btn btn-danger bg-red-600 p-1 mt-4 rounded-lg text-white w-full"
                    onClick={() => onDeleteAppointment(appointment.appointmentId)}
                  >
                    Cancel Appointment
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentsList;
