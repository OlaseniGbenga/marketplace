import React from "react";

function Signup() {
  return (
    <div>
      <form className="text-red-600">
        {/* Form fields, input fields, etc. */}
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
