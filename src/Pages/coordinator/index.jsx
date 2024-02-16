import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


import { Outlet } from "react-router-dom";
const CodHome = () => {
    return (
        <div className="h-[100%]">
            <Navbar />

            <Outlet />
            <Footer />

        </div>
    )
};


export default CodHome;