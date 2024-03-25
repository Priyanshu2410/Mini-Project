import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Yourcourse = () => {
    const [user, setUser] = useState({});
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from localStorage
        const userData = JSON.parse(localStorage.getItem("data"));
        setUser(userData);

        // Fetch enrolled courses for the current user from the backend
        const fetchEnrolledCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/getuserenrolledcourses/${userData._id}`);
                setEnrolledCourses(response.data.data);
                console.log("Enrolled Courses:", response.data.data); 
            } catch (error) {
                console.error("Error fetching enrolled courses:", error);
                navigate('/login');
            }
        };

        fetchEnrolledCourses();
    }, []);

    const handleviewcourse = (courseId) => {
        // Navigate to the "additem" route with the specific course ID
        navigate(`/user/viewcourse/${courseId}`);
    };

    return (
        <div className="pt-[90px]">
            <h1>Your Enrolled Courses</h1>
            <h2>User ID: {user._id}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 my-[30px]'>
                {enrolledCourses.map((singleCourse) => (
                    <div key={singleCourse._id} className="w-full p-2 rounded-lg border border-gray-300 shadow-xl">
                        <img
                            key={singleCourse._id}
                            className="object-cover w-full h-40 rounded-t-lg"
                            src={require(`../../images/${singleCourse.courseimage}`)}
                            alt={singleCourse._id}
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                                {singleCourse.courseName}
                            </h4>
                            {/* <h1>{singleCourse._id}</h1> */}
                            <p className="mb-2 leading-normal text-gray-700">
                                {singleCourse.coursecategory} <br />
                                {singleCourse.coursedescription}
                            </p>
                            <button className=" px-4 py-2 text-sm text-white bg-blue-500 rounded shadow cursor" onClick={()=> handleviewcourse(singleCourse.courseId)}>
                                View Course
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Yourcourse;
