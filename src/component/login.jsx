// Login.js

import React, { useState } from 'react';

const Login = () => {

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="firstName" placeholder="First Name" required="" />
          <input type="text" name="lastName" placeholder="Last Name" required="" />
          <input type="tel" name="mobileNumber" placeholder="Mobile Number" required="" />
          <input type="date" name="dob" required="" />
          <select name="gender" placeholder="Mobile Number" required="">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="text" name="collegeName" placeholder="College Name" required="" />
          <input type="text" name="department" placeholder="Department Name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="password" placeholder="Password" required="" />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input type="password" name="pswd" placeholder="Password" required="" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
