import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [show, setshow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollage] = useState("");
  const [dept, setDept] = useState("");

  useEffect(() => {
    // Fetch user data from the server or check session status
    // let temp =
    setUser(JSON.parse(localStorage.getItem("data")));
    // console.log(localStorage.getItem("data"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("user", user.email);

      const result = await axios.put(
        `http://localhost:5000/update-profile/${user.email}`,{
            first_name : firstName,
            last_name : lastName,
            number:phone,
            gender:gender,
            collage:college,
            department:dept
        }
      );
        setUser({
            firstName : firstName,
            lastName : lastName,
            phone:phone,
            gender:gender,
            college:college,
            dept:dept
        })
        localStorage.setItem("data",JSON.stringify(result.data))
        console.log(result);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle the case where the email is already registered
        console.log(
          "Email is already registered. Please use a different email."
        );
      } else {
        // Handle other errors
        console.error("An error occurred during registration:", error.message);
      }
    }
    setshow(false);
    alert("profile update successfully");
  };

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
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
                onClick={() => {
                  setshow(true);
                }}
              >
                update
              </button>
              {show ? (
                <>
                <div className="fixed inset-0 bg-gray-700 bg-opacity-90"></div>

                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-30rem">
                    <form onSubmit={handleSubmit}>
                      <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                        type="text"
                        placeholder="Enter your firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                      />
                      <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="text"
                        placeholder="Enter your lastname"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                      />
                      <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="phone"
                        placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                      />
                      <select
                        name="gender"
                        required
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        onChange={(e) => setGender(e.target.value)}
                  
                      >
                        <option value="" disabled selected>
                          Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <select
                        name="collage"
                        required
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        onChange={(e) => setCollage(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select your collage
                        </option>
                        <option value="A. D. Patel Institute of Technology">
                          ADIT
                        </option>
                        <option value="G H Patel College of Engineering & Technology">
                          GCET
                        </option>
                        <option value="Madhuben & Bhanubhai Patel Institute of Technology">
                          MBIT
                        </option>
                        <option value="other">OTHER</option>
                      </select>
                      <select
                        name="dept"
                        required
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        onChange={(e) => setDept(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Select your department
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Computer Enginnering">
                          Computer Engineering{" "}
                        </option>
                        <option value="Data Science and Artificial Intelligence">
                          Artificial Intelligence & Data Science (AI&DS)
                        </option>
                        <option value="Computer Enginnering and Design">
                          Computer Engineering and design
                        </option>
                        <option value="other">Other</option>
                      </select>
                      <div className="mt-4 flex justify-between font-semibold text-sm"></div>
                      <div className="text-center md:text-left">
                        <button
                          className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                          type="submit"
                        >
                          done
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
