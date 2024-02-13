import React from 'react'

import { Outlet } from "react-router-dom";

//user
import Navbar from './Navbar';
import Footer from './footer';


function index() {
  return (
    <div className="h-[100%]">
        <Navbar />
        
        <Outlet />
        <Footer />
        
    </div>
    
  )
}                                                                                                                          

export default index;