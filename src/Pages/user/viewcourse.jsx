import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewCourse = () => {
  const { courseId } = useParams();
  const [videos, setVideos] = useState([]);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState(""); // Changed setcolor to setColor
  const [doneVideosCount, setVideoCount] = useState(0);
  // let doneVideosCount = 0;

  const id = JSON.parse(localStorage.getItem("data"))._id;
  const onStatusChange = async (e) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/video/progress`,
        {
          userid: id,
          videoid: e.target.id,
          progress: e.target.value,
        }
      );
      // console.log(id + "\n" + e.target.id + "\n" + e.target.value);
      setStatus(Math.random());
      console.log("First");
    } catch (error) {
      console.error("error on progress", error);
    }
  };

  const getVideo = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/getvideo?courseID=${courseId}`
      );
      // console.log("Result", result.data.data);
      setVideos(result.data.data);
    } catch (error) {
      console.error("Error fetching video", error);
    }
  };

  const [progress1, setProgress] = useState({});
  const [userdata, setuserdata] = useState([{}]);
  const getprogress = async () => {
    try {
      const data = await fetch(`http://localhost:5000/getprogress?id=${id}`);
      const result = await axios.get(
        `http://localhost:5000/getvideo?courseID=${courseId}`
      );

      const jsondata = await data.json();
      setuserdata(jsondata);
      console.log(jsondata);
      console.log(result);
      // const userProgressData = jsondata.find((item) => item.userId === id);
      // const { progress } = userProgressData;
      // console.log(videos);
      let count = 0;
      result.data.data.forEach((video) => {
        console.log("Test");
        if (jsondata && jsondata?.progress[video._id] === "Done") {
          count++;
          // console.log("hahah");
        }
      });
      console.log(count);
      setVideoCount(count);

      // setProgress(progress);
      // console.log("mmm", progress1);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getprogress();
    console.log("tets");
  }, [status]);

  useEffect(() => {
    getVideo();
    // getprogress();
  }, []);

  // const progress = userdata.progress;
  // const [task_status, setTaskStatus] = useState({ taskId: "", status: "" });
  // // Iterating through the key-value pairs
  // for (const taskId in progress) {
  //   if (progress.hasOwnProperty(taskId)) {
  //     const status = progress[taskId];
  //     console.log(`Task ID: ${taskId}, Status: ${status}`);
  //     // setTaskStatus({ taskId: taskId, status: status });
  //     // You can perform any further operations with the task ID and status here
  //   }
  // }
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };
  const youtubeWatchUrl = videos.youtubeLink || "";
  const youtubeVideoId = youtubeWatchUrl
    ? getYouTubeVideoId(youtubeWatchUrl)
    : "";
  // videos.forEach((video) => {
  //   // Check if userdata exists and if the video's status is "Done"
  //   if (userdata && userdata?.progress[video._id] === "Done") {
  //     doneVideosCount++; // Increment the counter
  //   }
  // });

  return (
    <>
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
              {/* <div>{userdata[0].progress["65f344a80c8dec8dfada324f"]}</div> */}
              <div className="asdf">
                {}
                {/* {userdata.map((data, i) => {  
                  return (
                    <>
                      <div key={i}>{data.progress}  </div>
                    </>
                  );
                })} */}
                {/* {task_status.taskId}
                {task_status.status} */}
                {/* {console.log("adsf", userdata)} */}
                {/* {console.log(
                  "qewr",
                  id,
                  userdata[1].userId,
                  userdata.find((item) => item.userId === id)
                )} */}
              </div>
            </h1>
          </div>
        </div>
        <div className="justify-center flex flex-row  ">
          {/* <h1 className="p-5 font-bold  text-[20px]">Video Status :</h1> */}
          <div className="p-3 border border-black rounded-lg w-[725px]">
            <div className="p-2 bg-blue-300 w-[700px] text-center">
              {doneVideosCount}/{videos.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 my-[30px]">
          {/* {Object.entries(progress1).map(([taskId, status]) => (
            <li key={taskId}>
              Task ID: {taskId}, Status: {status}
            </li>
          ))} */}

          {videos.map((video, i) => (
            <div
              key={video._id}
              className="rounded-lg shadow-lg bg-white max-w-sm"
            >
              {/* Use the correct video properties here */}
              {video.youtubeLink && (
                <iframe
                  title={`YouTube Video ${video._id}`}
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    video.youtubeLink
                  )}`}
                  allowFullScreen
                ></iframe>
              )}

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {video.title}
                </h5>
                <p className="text-gray-700 text-base">{video.description}</p>
              </div>
              {userdata && (
                <select
                  name="Status"
                  required
                  id={video._id}
                  className={`text-sm bg-${color}-300 w-full mb-2 px-4 py-2 border border-solid invalid:text-gray-500 border-gray-300 rounded mt-4`}
                  onChange={onStatusChange}
                  // value={userdata.progress[video._id]}
                >
                  <option
                    value="Pending"
                    selected={userdata?.progress?.[video._id] === "Pending"}
                  >
                    Pending
                  </option>
                  <option
                    value="Done"
                    selected={userdata?.progress?.[video._id] === "Done"}
                  >
                    Done
                  </option>
                </select>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewCourse;
