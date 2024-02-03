// import { useState } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
// import Navbar from "./Navbar";

// const Login = () => {
//   const auth = getAuth();
//   const { user, logout } = useAuth();
//   const [loginError, setLoginError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginError("");

//     const form = new FormData(e.currentTarget);
//     const email = form.get("email");
//     const password = form.get("password");

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log(userCredential.user);
//       navigate(location?.state?.from || "/");
//     } catch (error) {
//       console.error(error);
//       setLoginError(error.message);
//     }
//   };

//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
//           {user ? (
//             <>
//               <p className="text-green-500 text-center mb-4">
//                 You are logged in as {user.email}
//               </p>
//               <button
//                 onClick={logout}
//                 className="w-full bg-red-500 text-white p-2 rounded"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <form onSubmit={handleLogin}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-600"
//                 >
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-semibold text-gray-600"
//                 >
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   className="w-full mt-1 p-2 border rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4 text-center">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white p-2 rounded"
//                 >
//                   Login
//                 </button>
//               </div>

//               {loginError && (
//                 <p className="text-red-500 text-center mt-2">{loginError}</p>
//               )}
//             </form>
//           )}
//           {user ? null : (
//             <p className="text-center text-sm">
//               Dont have an account?{" "}
//               <NavLink to="/register" className="text-blue-500">
//                 Register
//               </NavLink>
//             </p>
//           )}
//           {loginError && (
//             <p className="text-red-500 text-center mt-2">{loginError}</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Navbar from "./Navbar";

const Login = () => {
  const auth = getAuth();
  const { user, logout } = useAuth();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      navigate(location?.state?.from || "/");
    } catch (error) {
      console.error(error);
      setLoginError(error.message);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          {user ? (
            <>
              <p className="text-green-500 text-center mb-4">
                You are logged in as {user.email}
              </p>
              <button
                onClick={logout}
                className="w-full bg-red-500 text-white p-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4 text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded"
                >
                  Login
                </button>
              </div>

              {loginError && (
                <p className="text-red-500 text-center mt-2">{loginError}</p>
              )}
            </form>
          )}
          {user ? null : (
            <p className="text-center text-sm">
              Dont have an account?{" "}
              <NavLink to="/register" className="text-blue-500">
                Register
              </NavLink>
            </p>
          )}
          {loginError && (
            <p className="text-red-500 text-center mt-2">{loginError}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;



