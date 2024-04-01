import React from "react";
import { useNavigate } from "react-router-dom";
import Lognav from "../Login/Lognav";

function Root() {
  const navigate = useNavigate();

  return (
    <div>
      <Lognav />

      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="flex justify-center">
          <img src="/CVM logo.png" alt="Logo" className="block w-[500px] " />
        </div>
        <div className="flex justify-center text-center mt-5">
          <h3 className="text-xl md:text-2xl lg:text-3xl">Welcome To Cvmu Mentorship Platform</h3>
        </div>
        <div className="flex justify-center mt-8">
          <button className=" mr-5 px-7 py-2.5 font-medium bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm" onClick={() => navigate("/login")}>Login</button>

          <button className=" px-7 py-2.5 font-medium bg-blue-100 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm" onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Root;
