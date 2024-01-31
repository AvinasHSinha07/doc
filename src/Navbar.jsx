/* eslint-disable react/prop-types */
// Navbar.js
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
// import Admin from "./Admin";  // Import the Admin component

const Navbar = ({ error }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#0A1D56] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">DocConnect</div>
        <div className="flex space-x-4 items-center">
          <NavLink to="/" className="text-white">
            Home
          </NavLink>

          {user && !error ? (
            <>
              
              <NavLink to="/bookings" className="text-white">
                Bookings
              </NavLink>
              <span className="text-white">{user.email}</span>
              <button onClick={logout} className="text-white cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="text-white">
                Login
              </NavLink>
              <NavLink to="/register" className="text-white">
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





// // Navbar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import AdminProfile from './AdminProfile'; // Import the AdminProfile component

// const Navbar = ({ error }) => {
//   const { user, logout } = useAuth();
  

//   return (
//     <nav className="bg-[#0A1D56] p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">DocConnect</div>
//         <div className="flex space-x-4 items-center">
//           <NavLink to="/" className="text-white">
//             Home
//           </NavLink>

//           {user && !error ? (
//             <>
//               {/* Render AdminProfile for admin users */}
//               <NavLink to="/bookings" className="text-white">
//                 Bookings
//               </NavLink>
//               <span className="text-white">{user.email}</span>
//               <button onClick={logout} className="text-white cursor-pointer">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink to="/login" className="text-white">
//                 Login
//               </NavLink>
//               <NavLink to="/register" className="text-white">
//                 Signup
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


