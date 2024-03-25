
// src/Components/Login.js
import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Lognav from "./Lognav";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/login", { email, password });
      console.log(result.data);
      if (result.status === 200) {
        localStorage.setItem("data", JSON.stringify(result.data));
        if(result.data.role === "coordinator")
        {
          navigate("/coordinator/home");
        }
        else if(result.data.role === "user")
        {
          navigate("/user/home");
        
        }
        else{
          alert("Invalid Credentials")
        }
      }
      else{ 
        alert("Invalid Credentials")
      }
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div>
      <Lognav/>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
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
        <form >
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>

          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Login;
