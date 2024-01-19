// Login.js

import React, { useState } from 'react';
import style from '../styles/login.module.scss'

const Login = () => {

  return (
    <div className={style.main}>
      <input type="checkbox" id={style.chk} aria-hidden="true" />

      <div className={style.signup}>
        <form>
          <label htmlFor={style.chk} aria-hidden="true">
            Sign up
          </label>
          <div className={style.inputs}>
            <input type="text" name="firstName" placeholder="First Name" required="" />
            <input type="text" name="lastName" placeholder="Last Name" required="" />
            <input type="tel" name="mobileNumber" placeholder="Mobile Number" required="" />
            <input type="date" name="dob" required="" />
            <select name="gender" required="">
              <option value="" disabled selected>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input type="text" name="collegeName" placeholder="College Name" required="" />
            <input type="text" name="department" placeholder="Department Name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input type="password" name="password" placeholder="Password" required="" />
            <button>Sign up</button>
          </div>
        </form>
      </div>

      <div className={style.login}>
        <form>
          <label htmlFor={style.chk} aria-hidden="true">
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
