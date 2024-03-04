import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";

// import logo from "../../../public/heaer_logo_final.png"

const Navbar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data from the server or check session status
        setUser(JSON.parse(localStorage.getItem("data")));
        console.log(user);
        // console.log(localStorage.getItem("data"));
        // eslint-disable-next-line
    }, []);
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const logoutu = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <>
            <nav className="bg-white dark:bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <Link href="https://www.cvmu.edu.in/" className="flex items-center space-x-3 ">
                        <img src="/heaer_logo_final.png" className="h-20 w-[120%]" alt="cvm Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CVM</span> */}
                    </Link>
                    <div className="flex flex-row items-center md:order-2 space-x-6 md:space-x-8 rtl:space-x-reverse">
                        <button type="button" onClick={logoutu} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out</button>
                        <Link
                            to="/user/profile"
                            className='flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700'
                            style={{ fontSize: '1.5rem' }}
                        >
                            <FaUser />
                        </Link>

                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/user/home"
                                    className={`block py-2 px-3 rounded md:p-0 ${activeButton === 'home'
                                        ? 'text-blue-700 '
                                        : 'text-blue-700 bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => handleButtonClick('home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/courses"
                                    className={`block py-2 px-3 rounded md:p-0 ${activeButton === 'courses'
                                        ? 'text-blue-700'
                                        : 'text-gray-800 bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => handleButtonClick('courses')}
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/codehub"
                                    className={`block py-2 px-3 rounded md:p-0 ${activeButton === 'codehub'
                                        ? 'text-blue-700'
                                        : 'text-gray-900 bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => handleButtonClick('codehub')}
                                >
                                    CodeHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/user/contactus"
                                    className={`block py-2 px-3 rounded md:p-0 ${activeButton === 'contact'
                                        ? 'text-blue-700'
                                        : 'text-gray-900 bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                        }`}
                                    onClick={() => handleButtonClick('contact')}
                                >
                                    Contact
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar