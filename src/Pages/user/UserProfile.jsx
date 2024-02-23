import React from "react";

const UserProfile = () => {
    return (
        <div className="pt-[100px] ">
            <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div class="p-8 bg-[#8da9ef]">
                    <h2 class="text-3xl font-bold black">User Profile</h2>
                </div>
                <div class="px-8 py-6">
                    <div class="grid grid-cols-2 gap-y-4">
                        <div class="text-gray-600 font-semibold">First Name:</div>
                        <div class="text-gray-800">John</div>
                        <div class="text-gray-600 font-semibold">Last Name:</div>
                        <div class="text-gray-800">Doe</div>
                        <div class="text-gray-600 font-semibold">Gender:</div>
                        <div class="text-gray-800">Male</div>
                        <div class="text-gray-600 font-semibold">Contact:</div>
                        <div class="text-gray-800">123-456-7890</div>
                        <div class="text-gray-600 font-semibold">Address:</div>
                        <div class="text-gray-800">123 Main St, City</div>
                        <div class="text-gray-600 font-semibold">College:</div>
                        <div class="text-gray-800">ABC University</div>
                        <div class="text-gray-600 font-semibold">Department:</div>
                        <div class="text-gray-800">Computer Science</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;
