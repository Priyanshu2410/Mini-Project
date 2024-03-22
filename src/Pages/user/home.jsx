import React, { useState, useEffect } from "react";
import RunSidebar from "../../component/runsidebar";
import Coures from "./coures";
import Faq from "../../component/faq";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from the server or check session status
    setUser(JSON.parse(localStorage.getItem("data")));
    console.log(user);
    // console.log(localStorage.getItem("data"));
  }, []);

  const logos = [
    { id: 1, src: "/adobe.png", alt: "Logo 1" },
    { id: 2, src: "/Amex_Logo.png", alt: "Logo 2" },
    { id: 3, src: "/amzon.png", alt: "Logo 3" },
    { id: 4, src: "/Zomato_Logo.png", alt: "Logo 4" },
    { id: 5, src: "/atlassian.png", alt: "Logo 5" },
    { id: 6, src: "/Bosch_Logo.png", alt: "Logo 6" },
    { id: 7, src: "/Cisco_Logo.png", alt: "Logo 7" },
    { id: 8, src: "/Flipkart_Logo.png", alt: "Logo 8" },
    { id: 9, src: "/Walmart_Logo.png", alt: "Logo 9" },
    { id: 10, src: "/goldman.png", alt: "Logo 10" },
    { id: 11, src: "/google.png", alt: "Logo 11" },
    { id: 12, src: "/Intuit_Logo.png", alt: "Logo 12" },
    { id: 13, src: "/linkdin.png", alt: "Logo 13" },
    { id: 14, src: "/micro.png", alt: "Logo 14" },
    { id: 15, src: "/Myntra_Logo.png", alt: "Logo 15" },
    { id: 16, src: "/SalesForce_Logo.svg", alt: "Logo 16" },
    { id: 17, src: "/Tower_Research_Logo.png", alt: "Logo 17" },
  ];

  return (
    <div>
      <div className="pt-[87px] bg-[#cfcece] bg-opacity-80 h-[800px] ">
        <div className="flex mt-10 ml-5">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-3">Welcome,</span>
            {user?.firstName && (
              <h1 className="text-3xl font-bold">{user.firstName}</h1>
            )}
          </div>
        </div>
        <div className="flex justify-end items-center font-sans mt-[50px]">
          <div className="flex flex-col items-center">
            <h1 className="text-[70px] font-bold max-w-[800px]">
              Learn today’s most in-demand skills with our free online courses
            </h1>
            <button className="bg-[#3047b8] text-white font-bold text-xl px-5 py-3 rounded-full max-w-[300px] mt-5">
              Explore Our Best courses
            </button>
          </div>
          <img
            src="/home1-removebg-preview.png"
            alt=""
            className="ml-5 w-[550px]"
          />
        </div>
      </div>

      <div className="mt-[20px] text-center">
        <h1 className="text-4xl font-bold text-gray-700 transition-all duration-300 hover:text-[#1a4e63] hover:transform hover:translate-y-1">
          Collage of Brilliance: Where Expert Minds Converge
        </h1>
        <RunSidebar />
      </div>
      <div class="text-center">
        <p class="font-bold text-xl">Companies Where Our Students Work</p>
        <p class="text-lg">
          At our education platform, we take pride in our students' success.
          Many of our graduates
        </p>
        <p class="text-lg">
          have landed jobs at top companies like Google, Amazon, and Microsoft.
        </p>
      </div>

      <div className="mt-[80px] ">
        <div className="grid grid-cols-5 gap-4">
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
              <img src={logo.src} alt={logo.alt} className="w-24 h-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[100px] text-center">
        <h1 className="text-4xl font-bold text-gray-700 transition-all duration-300 hover:text-[#1a4e63] hover:transform hover:translate-y-1">
          Mastery Series: Elevate Your Expertise
        </h1>
        <Coures />
      </div>
      <div class="flex justify-between items-center mt-11">
        <div class="ml-20 flex items-center">
          <img src="/at_the_rate_icon.png" alt="Logo" class="w-24 h-24 mr-6" />
          <p class="text-[50px] font-semibold">
            Add one more Skill to your Resume.
          </p>
        </div>
        <div class="mr-10 w-1/2">
          <img src="/certificate.png" alt="Certificate" class="w-full h-auto" />
        </div>
      </div>

      <div className="mt-[90px] text-center">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
