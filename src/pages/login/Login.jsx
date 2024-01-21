import React, { useState } from "react";
import Header from "../../components/common/Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative text-white ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
          alt="background"
        />
        {/* login form */}
        <form className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-50 flex flex-col p-12 w-3/12 bg-black bg-opacity-80 rounded-md">
          <h1 className="text-3xl mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {
            !isSignInForm && 
            <input
            type="text"
            placeholder="Full Name"
            className="p-3 w-full mb-3 bg-gray-700"
          />
          }
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 w-full mb-3 bg-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 w-full mb-7 bg-gray-700"
          />

          <button className="bg-red-600 w-full p-3 ">{isSignInForm? "Sign In" : "Sign Up"}</button>

          <div className="flex justify-between">
            <div>
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
          <p className="mt-10 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm? "Are you new to Netflix? Signup Now" : "Already Registerd? SignIn Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
