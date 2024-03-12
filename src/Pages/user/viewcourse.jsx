
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewCourse = () => {
    const { courseId } = useParams();
    const [videos, setVideos] = useState([]);
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
    const getYouTubeVideoId = (url) => {
        const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    };
    const youtubeWatchUrl = videos.youtubeLink || '';
    const youtubeVideoId = youtubeWatchUrl ? getYouTubeVideoId(youtubeWatchUrl) : '';
    return (
        <div className="pt-[85px]">
            <div className="mt-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Your Course
                </h1>
                <h1>Add Item for Course ID: {courseId}</h1>

            </div>

            <div className="container mx-auto mt-10 py-[30px] px-[30px] items-center justify-center bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 text-center">
                    Available Videos
                    </h1>
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


        </div>
    );
}

export default ViewCourse;