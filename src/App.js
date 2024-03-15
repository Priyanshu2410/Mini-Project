// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login.jsx";
import Root from "./Pages/root/Root.jsx";
import Register from "./Pages/register/index.jsx";

//user
import User from "./Pages/user/index.jsx";
import Home from "./Pages/user/home.jsx";
import Codehub from "./Pages/user/codehub.jsx";
import Coordinator from "./Pages/coordinator/index.jsx";
import ContactUs from "./Pages/user/contact.jsx";
import CoursesUser from "./Pages/user/couresuser.jsx";
import UserProfile from "./Pages/user/UserProfile.jsx";
import ViewCourse from "./Pages/user/viewcourse.jsx";
import Yourcourse from "./Pages/user/yourcourse.jsx";


//coordinator
import CoordinatorHome from "./Pages/coordinator/home.jsx";
import ListCourse from "./Pages/coordinator/listcourse.jsx";
import Contact from "./Pages/coordinator/contact.jsx";
import Coprofile from "./Pages/coordinator/Coprofile.jsx";
import Additem from "./Pages/coordinator/additem.jsx";

function App() {
  return (
    <>

      <Routes>

        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/user" element={<User />}>
          <Route path="home" element={<Home />} />
          <Route path="codehub" element={<Codehub />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="courses" element={<CoursesUser />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="viewcourse/:courseId" element={<ViewCourse />} />
          <Route path="yourcourse" element={<Yourcourse />} />
        </Route>
        <Route path="/coordinator" element={<Coordinator />}>
          <Route path="home" element={<CoordinatorHome />} />
          <Route path="listcourse" element={<ListCourse />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Coprofile />} />
          <Route path="additem/:courseId" element={<Additem />} />



        </Route>
      </Routes>
    </>
  );
}

export default App;
