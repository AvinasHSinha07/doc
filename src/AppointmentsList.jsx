/* eslint-disable react/prop-types */
const AppointmentsList = ({ appointments }) => {
  return (
    <ul className="list-none p-0">
      {appointments?.map((appointment) => (
        <li key={appointment.date} className="border-b py-2">
          <strong>Doctor:</strong> {appointment.doctor}
          <br />
          <strong>Date:</strong> {appointment.date}
          <br />
          <strong>User Email:</strong> {appointment.userEmail}
        </li>
      ))}
    </ul>
  );
};

export default AppointmentsList;
