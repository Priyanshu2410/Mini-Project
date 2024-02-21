import React from "react";

const CoursesUser = () => {
    return (
        <div className="pt-[80px] h-screen">
            <div
                className="w-full h-[550px] relative"
                style={{
                    background: "url(/Footer_logoAsset3.png)",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full mt-[90px] mx-20">
                    <div className="">
                        <h1 className="text-white text-[70px] font-black tblt:text-3xl">
                            A LEGACY OF KNOWLEDGE
                        </h1>
                        <p className="text-white mt-8 italic  text-2xl font-bold tracking-tight tblt:text-xl tblt:px-0">
                            A space dedicated to fostering learning, exploration, innovation, creative expression, and meaningful discourse.{" "}
                        </p>
                    </div>

                    <form className=" flex flex-row">

                        <select id="small" className="block w-[150px] p-5  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Faculty</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <select id="default" className="bg-gray-50 w-[150px] border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Programs</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                        <select id="default" className="bg-gray-50 w-[150px] border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select College</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CoursesUser;
