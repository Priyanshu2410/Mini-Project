// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login.jsx"; 
import Root from "./Pages/root/Root.jsx";
import Register from "./Pages/register/index.jsx";

function App() {
  return (
    <>
    
      <Routes>
      <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />        
      </Routes>
    </>
  );
}

export default App;
