import React from "react";
import Header from "../../components/common/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
          alt="background"
        />
        <form className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-50 flex flex-col p-12 w-4/12 bg-black opacity-90">
          <div >
            <input type="email" placeholder="Email Address" className="p-3 w-full mb-3" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="p-3 w-full mb-3" />
          </div>
          <div>
            <button className="bg-red-600 w-full p-3 ">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
