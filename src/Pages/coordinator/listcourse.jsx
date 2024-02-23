import React, { useState } from "react";

const ListCourse = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container mx-auto mt-10 pt-[85px]">
            <div>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Faculty Course Scavenger Hunt
                </h1>
                <p className="text-lg text-gray-600 text-center">
                    Welcome to the exciting Faculty Course Scavenger Hunt! Explore and
                    discover the diverse range of courses offered by our faculty.
                </p>
            </div>

            <div className="container mx-auto mt-10 py-[30px] px-[30px] items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Existing Courses
                    </h1>
                    <button
                        onClick={toggleModal}
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Add New Course
                    </button>

                    {/* Main modal */}
                    {isModalOpen && (
                        <div
                            id="crud-modal"
                            tabIndex="-1"
                            aria-hidden="true"
                            className="fixed inset-0 z-50 overflow-y-auto"
                        >
                            <div className="flex items-center justify-center min-h-screen">
                                <div
                                    className="fixed inset-0 bg-black opacity-50"
                                    onClick={toggleModal}
                                ></div>
                                <div className="relative p-4 w-full max-w-md">
                                    {/* Modal content */}
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* Modal header */}
                                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Create New Coures
                                            </h3>
                                            <button
                                                type="button"
                                                onClick={toggleModal}
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        {/* Modal body */}
                                        <form className="p-4 md:p-5">
                                            {/* ... (rest of the modal content) */}
                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                <div className="col-span-2">
                                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Upload Cover image
                                                    </label>
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="file"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                        <option selected="">Select category</option>
                                                        <option value="wd">Web devlopment</option>
                                                        <option value="ai">AI</option>
                                                        <option value="ml">ML</option>
                                                        <option value="ui">UI-UX</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-2">
                                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coures Description</label>
                                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write course description here"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                Add new Course
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <hr className="border-t border-gray-300 mb-8 mx-10" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 my-[30px]">
                <div className="w-full p-2 rounded-lg border border-gray-300 shadow-xl">
                    <img
                        className="object-cover w-full h-40 rounded-t-lg"
                        src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Horizontal Card with Image
                        </h4>
                        <p className="mb-2 leading-normal text-gray-700">
                            It is a long established fact that a reader will be distracted by the readable content.
                        </p>
                        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow">
                            Add Item
                        </button>
                    </div>
                </div>
                <div className="w-full p-2 rounded-lg border border-gray-300 shadow-xl">
                    <img
                        className="object-cover w-full h-40 rounded-t-lg"
                        src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Horizontal Card with Image
                        </h4>
                        <p className="mb-2 leading-normal text-gray-700">
                            It is a long established fact that a reader will be distracted by the readable content.
                        </p>
                        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow">
                            Add Item
                        </button>
                    </div>
                </div>
                <div className="w-full p-2 rounded-lg border border-gray-300 shadow-xl">
                    <img
                        className="object-cover w-full h-40 rounded-t-lg"
                        src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            React Tailwind Horizontal Card with Image
                        </h4>
                        <p className="mb-2 leading-normal text-gray-700">
                            It is a long established fact that a reader will be distracted by the readable content.
                        </p>
                        <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded shadow">
                            Add Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCourse;
