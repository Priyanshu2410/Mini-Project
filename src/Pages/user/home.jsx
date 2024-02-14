import React, { useState, useEffect } from "react";
import RunSidebar from "../../component/runsidebar";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from the server or check session status
    setUser(JSON.parse(localStorage.getItem("data")));
    console.log(user);
    // console.log(localStorage.getItem("data"));
  }, []);

  return (
    <div>
      <div className="pt-[87px] bg-[#d6d4d5] bg-opacity-80 h-[800px] ">
        <div className="flex mt-10 ml-5">
          <div className='flex items-center'>
            <span className='text-3xl font-bold mr-3'>Welcome,</span>
            <h1 className='text-3xl font-bold'>{user.firstName}</h1>
          </div>
        </div>
        <div className="flex justify-end items-center font-sans">
          <div className="flex flex-col items-center">
            <h1 className="text-[50px] font-bold max-w-[800px]">Learn today’s most in-demand
              skills with our free online
              courses</h1>
            <button className="bg-[#3047b8] text-white font-bold text-xl px-3 py-2 rounded-full max-w-[300px] mt-5">Explore Our Best courses</button>
          </div>
          <img src="/userhome.png" alt="" className="ml-5 w-[550px]" />
        </div>



      </div>

      <div className="mt-[20px] text-center">
  <h1 className="text-4xl font-bold text-gray-700 transition-all duration-300 hover:text-[#1a4e63] hover:transform hover:translate-y-1">
    Collage of Brilliance: Where Expert Minds Converge
  </h1>
  <RunSidebar />
</div>



    </div>

  );
};

export default Home;
