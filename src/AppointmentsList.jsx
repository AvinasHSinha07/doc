const AppointmentsList = ({ appointments, onDeleteAppointment }) => {
  // console.log(appointments)
  // console.log(appointments)
  return (
    <>
      <div className="">
        <div className=" p-4">
          {appointments?.map((appointment) => (
            <p key={appointment.appointmentId} className="border-b py-2">
              <strong>Doctor:</strong> {appointment.doctor}
              <br />
              <strong>Date:</strong> {appointment.date}
              <br />
              <strong>User Email:</strong> {appointment.userEmail}
              <button
                className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
                onClick={() => onDeleteAppointment(appointment.appointmentId)}
              >
                Approve Appointment
              </button>
              <button
                className="btn btn-primary bg-sky-600 p-1 mt-4 rounded-lg text-white w-full"
                onClick={() => onDeleteAppointment(appointment.appointmentId)}
              >
                Cancel Appointment
              </button>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentsList;
