
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const clientId = "874888114408-0od2o09ugoa3jat7ddcrsv92gfbnluhp.apps.googleusercontent.com";

const Login = () => {
  const [userr, setuser] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/gift');
      const users = response.data;
      console.log('fetch', users);

      const userd = users.find(
        (user) => user.user === userr && user.password === password
      );
      console.log("Matched User: ", userd);

      if (userd) {
        navigate('/home');
      } else {
        setError("Invalid username or password");
      }

    } catch (error) {
      setError("An error occurred abccc");
      console.log("error", error);
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register")
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/iconic-gift-box-symbolizing-rewards-giveawa-00443-02_1148322-15317.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-100 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email ID</label>
            <input
              type="email"
              value={userr}
              onChange={(e) => setuser(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-200"
          >
            Login
          </button>
          <div className='mt-4 text-center mb-4'>
            New User? <button className='text-blue-500 hover:underline' onClick={handleRegister}><a>Register</a></button>
          </div>

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
}

export default Login;

