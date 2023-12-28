import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://the-brand-wick-backend-6vxa.onrender.com/register",
        {
          email,
          password,
          name,
          phone,
        }
      );
      alert("Registration successful. Now you can login");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Email already exists in the database
        setError("Email already in use. Please choose a different email.");
      } else {
        // Other errors
        alert("Registration failed. Please try again later");
      }
    }
  };
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
        <form className="login" onSubmit={handleRegister}>
          <h1 className="text-center text-3xl font-bold mb-8">Register</h1>
          <div className="mb-4">
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="name"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="phone"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="px-4 text-xs text-red-600">{error}</p>}
          </div>
          <div className="mb-4" style={{ display: "flex" }}>
            <input
              className="py-2 px-4 border-2 rounded-full w-full text-black hover:border-purple-950"
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" w-full flex items-center justify-center">
            <button
              className=" py-2 px-4 rounded-full bg-[#33E2A0] text-white hover:bg-[#1B0E3D]  w-full border"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <h4
          className="mt-4 font-normal text-base"
          style={{ textAlign: "center" }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Login.
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
