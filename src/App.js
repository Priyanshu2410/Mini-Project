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


//coordinator
import CoordinatorHome from "./Pages/coordinator/home.jsx";

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
        </Route>
        <Route path="/coordinator" element={<Coordinator />}>
          <Route path="home" element={<CoordinatorHome />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
