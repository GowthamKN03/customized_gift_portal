// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from '@react-oauth/google';

// const Register = () => {
//   const [user, setUser] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = {
//       user: user,
//       password: password
//     };

//     axios.post('http://localhost:8080/gift', userData)
//       .then((res) => {
//         console.log(res.data);
//         navigate('/Login');
//       })
//       .catch((error) => {
//         console.error("Something went wrong: " + error);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email ID</label>
//             <input
//               type="email"
//               value={user}
//               onChange={(e) => setUser(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//           >
//             Register
//           </button>
//           <p className="mt-4 text-center mb-4">
//             Already have an account?
//             <a href="/Login" className="text-blue-500 hover:underline"> Login</a>
//           </p>
//           <GoogleLogin
//             onSuccess={credentialResponse => {
//             console.log(credentialResponse);
//             }}
//             onError={() => {
//             console.log('Login Failed');
//             }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoogleLogin } from '@react-oauth/google';

// const Register = () => {
//   const [user, setUser] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = {
//       user: user,
//       password: password
//     };

//     axios.post('http://localhost:8080/gift', userData)
//       .then((res) => {
//         console.log(res.data);
//         navigate('/Login');
//       })
//       .catch((error) => {
//         console.error("Something went wrong: " + error);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email ID</label>
//             <input
//               type="email"
//               value={user}
//               onChange={(e) => setUser(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//           >
//             Register
//           </button>
//           <p className="mt-4 text-center mb-4">
//             Already have an account?
//             <a href="/Login" className="text-blue-500 hover:underline"> Login</a>
//           </p>
//           <GoogleLogin
//             onSuccess={credentialResponse => {
//             console.log(credentialResponse);
//             }}
//             onError={() => {
//             console.log('Login Failed');
//             }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      user: user,
      password: password
    };

    axios.post('http://localhost:8080/gift', userData)
      .then((res) => {
        console.log(res.data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error("Something went wrong: " + error);
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/iconic-gift-box-symbolizing-rewards-giveawa-00443-02_1148322-15317.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-100 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email ID</label>
            <input
              type="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-200"
          >
            Register
          </button>
          <p className="mt-4 text-center mb-4">
            Already have an account? <a href="/Login" className="text-blue-500 hover:underline">Login</a>
          </p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
