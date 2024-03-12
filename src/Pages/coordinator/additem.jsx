import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Additem = () => {
    const { courseId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videos, setVideos] = useState([]);



    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const getYouTubeVideoId = (url) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    };

    const submitform = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append("youtubeLink", document.getElementById("youtube").value);
        formData.append("description", document.getElementById("description").value);
        formData.append("courseID", courseId);

        try {
            const result = await axios.post(
                "http://localhost:5000/addvideo",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Result" + result.data);
            toast.success("Video added successfully!");
            window.location.reload();
        } catch (error) {
            console.error("Error uploading video", error);

            // Display error toast
            toast.error("Error uploading video. Please try again.");
        }
    };

    const getVideo = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/getvideo?courseID=${courseId}`);
            console.log("Result", result.data.data);
            setVideos(result.data.data);
        } catch (error) {
            console.error("Error fetching video", error);
        }
    };

    useEffect(() => {
        getVideo();
    }, []);


    const youtubeWatchUrl = videos.youtubeLink || '';
    const youtubeVideoId = youtubeWatchUrl ? getYouTubeVideoId(youtubeWatchUrl) : '';
    const youtubeEmbedUrl = youtubeVideoId ? `https://www.youtube.com/embed/${youtubeVideoId}` : '';




    return (
        <div className="pt-[85px]">
            <div className="mt-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Add Video and other materials
                </h1>
                {/* <h1>Add Item for Course ID: {courseId}</h1> */}

            </div>
            <div className="container mx-auto mt-10 py-[30px] px-[30px] items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Existing Videos
                    </h1>
                    <button
                        onClick={toggleModal}
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Add New Video
                    </button>

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
                                                Add New Video
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
                                        <form className="p-4 md:p-5 "
                                            onSubmit={submitform}
                                        >
                                            {/* ... (rest of the modal content) */}
                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                <div className="col-span-2">
                                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type video name" required="" />
                                                </div>
                                                <div className="col-span-2">
                                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paste Your Youtube video link</label>
                                                    <input type="text" name="youtube" id="youtube" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Give Youtube video link" required="" />
                                                </div>
                                                <div className="col-span-2">
                                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video Description</label>
                                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write video description here"></textarea>
                                                </div>



                                            </div>
                                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                                Add new video
                                            </button>
                                        </form>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 my-[30px]">
                {videos.map((video) => (
                    <div key={video._id} className="rounded-lg shadow-lg bg-white max-w-sm">
                        {/* Use the correct video properties here */}
                        {video.youtubeLink && (
                            <iframe
                                title={`YouTube Video ${video._id}`}
                                width="100%"
                                height="250"
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.youtubeLink)}`}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        )}

                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{video.title}</h5>
                            <p className="text-gray-700 text-base mb-4">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>



            <div className="container mx-auto mt-10 py-[30px] px-[30px] items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Existing Materials
                    </h1>
                    <button
                        // onClick={toggleModal}
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Add New Materials
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Additem;