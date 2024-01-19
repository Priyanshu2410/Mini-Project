// Login.js

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your validation logic here
    // For simplicity, this example checks if both fields are non-empty
    if (username && password) {
      alert('Login successful!');
      // You can redirect the user to another page or perform other actions here
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded shadow-md">
        <label className="block mb-2" htmlFor="username">
          Username:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="block mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
