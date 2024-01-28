import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#0A1D56] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">DocConnect</div>
        <div className="flex space-x-4 items-center">
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          {user && (
            <>
              <NavLink to="/bookings" className="text-white">
                Bookings
              </NavLink>
              <span className="text-white">{user.email}</span>
              <button onClick={logout} className="text-white cursor-pointer">
                Logout
              </button>
            </>
          )}
          {!user && (
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
