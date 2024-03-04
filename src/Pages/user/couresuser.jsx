import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import axios from 'axios';

const CoursesUser = () => {
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedCollege, setSelectedCollege] = useState('');
    const [course, setCourse] = useState([]);

    const programOptions = {
        'ET': ['Select your collage', 'A. D. Patel Institute of Technology', 'G H Patel College of Engineering & Technology', 'Madhuben & Bhanubhai Patel Institute of Technology'],
        // Add other faculties and their respective programs
    };

    const collegeOptions = {
        'A. D. Patel Institute of Technology': ['Select your program', 'Information Technology', 'Data Science and Artificial Intelligence', 'Computer Enginnering','Computer Enginnering and Design'],
        'G H Patel College of Engineering & Technology': ['Select your program', 'Information Technology', 'Computer Enginnering'],
        'Madhuben & Bhanubhai Patel Institute of Technology': ['Select your program', 'Information Technology', 'Computer Enginnering'],
        // Add other program options
    };
    const getCourse = async (event) => {
        event.preventDefault();
        try {
            console.log("Selected College:", selectedProgram);
            console.log("Selected Program:",  selectedCollege);
    
            // Check if both selectedCollege and selectedProgram are available
            if (selectedCollege && selectedProgram) {
                const result = await axios.get(`http://localhost:5000/getusercourse`, {
                    params: {
                        coordinatorDept: selectedCollege,
                        coordinatorClg: selectedProgram,
                    },
                });
                console.log("result", result.data.data);
                setCourse(result.data.data);
            } else {
                console.log("Please select both college and program before making the API call.");
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    



    const handleFacultyChange = (event) => {
        const facultyValue = event.target.value;
        setSelectedFaculty(facultyValue);
        setSelectedProgram(''); // Reset the selected program when faculty changes
        setSelectedCollege(''); // Reset the selected college when faculty changes
    };

    const handleProgramChange = (event) => {
        const programValue = event.target.value;
        setSelectedProgram(programValue);
        setSelectedCollege(''); // Reset the selected college when program changes
    };

    const handleCollegeChange = (event) => {
        const collegeValue = event.target.value;
        setSelectedCollege(collegeValue);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // Here, you can perform actions based on the selected values
    //     if (selectedCollege && selectedProgram) {
    //         // Perform your logic, e.g., make an API request
    //         console.log(`Selected College: ${selectedCollege}, Selected Program: ${selectedProgram}`);
    //         // Make an API request or any other action you need
    //     }
    // };
    return (
        <div className="pt-[80px] ">
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

                    <form className="flex flex-row mt-8 " >

                        {/* First Select */}
                        <select
                            id="small"
                            className="block w-[320px] mr-4 py-[30px] px-[15px] text-[18px] text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#688ed6] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleFacultyChange}
                            value={selectedFaculty}
                        >
                            <option value="">Select Faculty</option>
                            <option value="ET">ENGINEERING & TECHNOLOGY</option>
                            {/* Add other faculty options */}
                        </select>

                        {/* Second Select */}
                        <select
                            id="default"
                            className="mr-4 bg-gray-50 w-[320px] border border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-[#688ed6] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleProgramChange}
                            value={selectedProgram}
                            disabled={!selectedFaculty} // Disable if no faculty is selected
                        >
                            {programOptions[selectedFaculty]?.map((program, index) => (
                                <option key={index} value={program}>
                                    {program}
                                </option>
                            ))}
                        </select>

                        {/* Third Select */}
                        <select
                            id="default"
                            className="bg-gray-50 w-[320px] border border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 p-5 dark:bg-[#688ed6] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleCollegeChange}
                            value={selectedCollege}
                            disabled={!selectedProgram} // Disable if no program is selected
                        >
                            {collegeOptions[selectedProgram]?.map((college, index) => (
                                <option key={index} value={college}>
                                    {college}
                                </option>
                            ))}
                        </select>
                        <button
                            type="button" // Use type="button" to prevent form submission
                            className="dark:bg-[#ecea73] ml-[10px] flex items-center rounded-full p-5 cursor-pointer"
                            onClick={getCourse}
                        >
                            <GoArrowUpRight className="text-black text-[35px] font-bold" />
                        </button>
                    </form>


                </div>
            </div>

            <div className='mt-8 text-center'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Explore Our Courses
                </h1>
                <p className='mt-4 text-lg text-gray-600'>
                    Choose your faculty, program, and college to discover the wide range of courses we offer. Your journey to knowledge starts here!
                </p>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 my-[30px]'>
                {course.map((singleCourse) => (
                    <div key={singleCourse._id} className="w-full p-2 rounded-lg border border-gray-300 shadow-xl">

                        <img
                            key={singleCourse._id}
                            className="object-cover w-full h-40 rounded-t-lg"
                            src={require(`../../images/${singleCourse.image}`)}
                            alt={singleCourse._id}
                        />

                        <div className="p-4">
                            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                {singleCourse.name}
                            </h4>
                            <p className="mb-2 leading-normal text-gray-700">
                                {singleCourse.category} <br />
                                {singleCourse.description}
                            </p>
                            <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow">
                                Add Item
                            </button>
                        </div>
                    </div>
                ))}



                {/* Repeat this block for each card */}
            </div>


        </div>
    );
};

export default CoursesUser;
