import React from 'react'

import { Outlet } from "react-router-dom";

//user
import Navbar from './Navbar';


function index() {
  return (
    <div className="h-[2000px]">
        <Navbar />
        <Outlet />
    </div>
    
  )
}                                                                                                                          

export default index;