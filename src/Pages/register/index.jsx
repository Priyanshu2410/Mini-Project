
// src/Components/Login.js
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Register in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-500 hover:bg-gray-700 text-white shadow-[0_4px_9px_-4px_#bd7fda]"
          >
            <AiFillGoogleCircle
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Enter your firstName"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Enter your lastname"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="phone"
          placeholder="Enter your phone number"
        />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="email"
          placeholder="Email Address"
        />
         <select name="gender" required=""
         className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4">
              <option value="" disabled selected>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
        </select>
         <select name="collage" required=""
         className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4">
              <option value="" disabled selected>Select your collage</option>
              <option value="male">ADIT</option>
              <option value="gcet">GCET</option>
              <option value="mbit">MBIT</option>
              <option value="other">OTHER</option>
        </select>
         <select name="dept" required=""
         className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4">
              <option value="" disabled selected>Select your department</option>
              <option value="IT">Information Technology</option>
              <option value="cs">Computer Engineering </option>
              <option value="aids">Artificial Intelligence & Data Science (AI&DS)</option>
              <option value="csd">Computer Engineering and design</option>
              <option value="other">Other</option>
        </select>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
         
          
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
