import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://the-brand-wick-backend-6vxa.onrender.com/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        // const userInfo = response.data;
        setRedirect(true);
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  if (redirect) {
    navigate("/Welcome");
  }

  return (
    <div>
      <div className="flex justify-center my-16">
        <div>
          <img
            className="w-auto h-20"
            src="https://www.thebrandwick.com/images/logo.png"
            alt=""
          />
        </div>
      </div>
      <div className=" z-20 mt-14 w-1/4 mx-auto items-center px-5 rounded-3xl py-4 border">
        <form className="login" onSubmit={handleLogin}>
          <h1 className="text-center text-3xl font-bold mb-8">Login</h1>
          <div className="mb-4">
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" w-full flex items-center justify-center">
            <button
              className=" py-2 px-4 rounded-full bg-[#33E2A0] text-white hover:bg-[#1B0E3D]  w-full border"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <h4
          className="mt-4 font-normal text-base"
          style={{ textAlign: "center" }}
        >
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "blue" }}>
            Register.
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
