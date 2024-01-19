// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/login.jsx"; // Adjust the path based on the actual location of your Login component

function App() {
  return (
    <>
      <h1>Mini Project</h1>
      <Routes>
        <Route path="/login" element={<Login />} />        
      </Routes>
    </>
  );
}

export default App;
