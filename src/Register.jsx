// /* eslint-disable no-unused-vars */

// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword ,getAuth} from 'firebase/auth';
// import app from '../firebaseConfig';
// import Navbar from './Navbar';

// const Register = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [registerError, setRegisterError] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setRegisterError('');

//     const form = new FormData(e.currentTarget);
//     const name = form.get('displayName');
//     const email = form.get('email');
//     const password = form.get('password');

//     try {
//       if (!isPasswordValid(password)) {
//         throw new Error(
//           'Password must be at least 6 characters and contain at least one uppercase letter and one special character.'
//         );
//       }

//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(userCredential.user);
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
//       setRegisterError(error.message);
//     }
//   };

//   const isPasswordValid = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <>
//     <Navbar></Navbar>
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
//         <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
//         <form onSubmit={handleRegister}>
//           <div className="mb-4">
//             <label htmlFor="displayName" className="block text-sm font-semibold text-gray-600">
//               Name:
//             </label>
//             <input
//               type="text"
//               name="displayName"
//               placeholder="Enter your name"
//               className="w-full mt-1 p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full mt-1 p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="w-full mt-1 p-2 border rounded"
//               required
//             />
//           </div>
//           <p className="text-sm text-gray-600 mb-4">
//             Already have an account?{' '}
//             <NavLink to="/login" className="text-blue-500 hover:underline">
//               Login
//             </NavLink>
//           </p>
//           <div className="mb-6">
//             <button type="submit" className="btn btn-primary w-full">
//               Register
//             </button>
//           </div>
//         </form>
//         {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
//       </div>
//     </div>
//     </>
    
//   );
// };

// export default Register;


/* eslint-disable no-unused-vars */

// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { ref, push, getDatabase } from 'firebase/database';
// // import app from '../firebaseConfig';
// import Navbar from './Navbar';

// const Register = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [registerError, setRegisterError] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setRegisterError('');

//     const form = new FormData(e.currentTarget);
//     const name = form.get('displayName');
//     const email = form.get('email');
//     const password = form.get('password');

//     try {
//       if (!isPasswordValid(password)) {
//         throw new Error(
//           'Password must be at least 6 characters and contain at least one uppercase letter and one special character.'
//         );
//       }

//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const newUser = userCredential.user;

//       // Send user data to Firebase Realtime Database
//       const database = getDatabase();
//       const usersRef = ref(database, '/users');
//       const newUserData = {
//         email: newUser.email,
//         userId: newUser.uid,
//         role: 'user', // Default role is 'user'
//         // Add any other user details you want to store
//       };

//       await push(usersRef, newUserData);

//       console.log(newUser);
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
//       setRegisterError(error.message);
//     }
//   };

//   const isPasswordValid = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
//           <form onSubmit={handleRegister}>
//             <div className="mb-4">
//               <label htmlFor="displayName" className="block text-sm font-semibold text-gray-600">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 name="displayName"
//                 placeholder="Enter your name"
//                 className="w-full mt-1 p-2 border rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full mt-1 p-2 border rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="w-full mt-1 p-2 border rounded"
//                 required
//               />
//             </div>
//             <p className="text-sm text-gray-600 mb-4">
//               Already have an account?{' '}
//               <NavLink to="/login" className="text-blue-500 hover:underline">
//                 Login
//               </NavLink>
//             </p>
//             <div className="mb-6">
//               <button type="submit" className="btn btn-primary w-full">
//                 Register
//               </button>
//             </div>
//           </form>
//           {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;


import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ref, push, getDatabase } from 'firebase/database';
import Navbar from './Navbar';

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [selectedRole, setSelectedRole] = useState('user'); // Default role is 'user'

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError('');

    const form = new FormData(e.currentTarget);
    const name = form.get('displayName');
    const email = form.get('email');
    const password = form.get('password');

    try {
      if (!isPasswordValid(password)) {
        throw new Error(
          'Password must be at least 6 characters and contain at least one uppercase letter and one special character.'
        );
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      console.log(selectedRole)
      // Send user data to Firebase Realtime Database
      const database = getDatabase();
      const usersRef = ref(database, '/users');
      const newUserData = {
        email: newUser.email,
        userId: newUser.uid,
        role: selectedRole, 
      };

      await push(usersRef, newUserData);

      console.log(newUser);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setRegisterError(error.message);
    }
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="displayName" className="block text-sm font-semibold text-gray-600">
                Name:
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
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
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
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
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-semibold text-gray-600">
                Role:
              </label>
              <select
                id="role"
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Already have an account?{' '}
              <NavLink to="/login" className="text-blue-500 hover:underline">
                Login
              </NavLink>
            </p>
            <div className="mb-6">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>
          {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
        </div>
      </div>
    </>
  );
};

export default Register;








