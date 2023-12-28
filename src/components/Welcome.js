import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="flex justify-center my-16">
        <img
          className="w-auto h-20"
          src="https://www.thebrandwick.com/images/logo.png"
          alt=""
        />
      </div>
      <div className="flex justify-center my-2">
        <p className="text-4xl">It's good to stand on top of competition</p>
      </div>
      <div className="flex justify-center my-2">
        <p className="text-gray-700 text-2xl">
          We work with the latest frameworks
        </p>
      </div>
    </div>
  );
};

export default Welcome;
