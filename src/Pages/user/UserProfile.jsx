import React, { useState, useEffect } from "react";

const UserProfile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data from the server or check session status
        setUser(JSON.parse(localStorage.getItem("data")));
        console.log(user);
        // console.log(localStorage.getItem("data"));
    }, []);

    return (
        <div className="pt-[100px] ">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-8 bg-[#8da9ef]">
                    <h2 className="text-3xl font-bold black">User Profile</h2>
                </div>
                <div className="px-8 py-6">
                    <div className="grid grid-cols-2 gap-y-4">
                        <div className="text-gray-600 font-semibold">First Name:</div>
                        <div className="text-gray-800">{user.firstName}</div>
                        <div className="text-gray-600 font-semibold">Last Name:</div>
                        <div className="text-gray-800">{user.lastName}</div>
                        <div className="text-gray-600 font-semibold">Gender:</div>
                        <div className="text-gray-800">{user.gender}</div>
                        <div className="text-gray-600 font-semibold">Contact:</div>
                        <div className="text-gray-800">{user.phone}</div>

                        <div className="text-gray-600 font-semibold">College:</div>
                        <div className="text-gray-800">{user.college}</div>
                        <div className="text-gray-600 font-semibold">Department:</div>
                        <div className="text-gray-800">{user.dept}</div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;
