import React from "react";
import { useParams } from "react-router-dom";

const ViewCourse = () => {
    const { courseId } = useParams();
    return (
        <div className="pt-[85px]">
            <h1>View Course</h1>
            <h2>Course ID: {courseId}</h2>
            
        </div>
    );
}

export default ViewCourse;