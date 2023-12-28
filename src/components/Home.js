import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-32">
      <div className="flex justify-center my-16">
        <div>
          <img
            className="w-auto h-20"
            src="https://www.thebrandwick.com/images/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="border font-medium text-xl text-white bg-[#33E2A0] w-40 rounded-full px-12 py-6 hover:bg-[#1B0E3D]">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="border font-semibold text-xl text-white bg-[#33E2A0] w-40 rounded-full px-auto py-6 hover:bg-[#1B0E3D]">
          <Link to={"/register"}>Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
