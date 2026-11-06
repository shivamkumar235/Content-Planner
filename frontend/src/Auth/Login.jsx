// import React from 'react'

import { useState } from "react";
import LoginBtn from "../Components/LoginBtn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import api from "../api";

const Login = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  // const [users, setusers] = useState("");
  const navigate = useNavigate();

  const loginFormSubmitted = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email: loginemail,
        password: loginpassword,
      });
      console.log(res.data);
      alert("login ho gaya");
      navigate("/Dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "login me gadbad hui");
    }

    // axios.get("http://localhost:3000/reg").then((res) => {
    //   const users = res.data.users; // data yahin mil gaya, state ki zaroorat nahi

    //   const dataexist = users.find(
    //     (user) => user.email === loginemail && user.password === loginpassword,
    //   );

    //   if (dataexist) {
    //     localStorage.setItem("userEmail", dataexist.email); // notes ke liye
    //     navigate("/Dashboard");
    //   } else {
    //     alert("Email ya password galat hai");
    //   }
    // });
  };

  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex justify-center items-center">
      <form
        onSubmit={(e) => {
          loginFormSubmitted(e);
        }}
        className="w-[80%] sm:w-[10vw] xl:w-[28vw]  lg:w-[28vw] flex flex-col gap-5 p-4 sm:p-12 lg:p-12 xl:p-12 border-4 bg-[#2222] border-emerald-700 rounded-3xl "
      >
        <input
          className="px-3 sm:px-5 lg:px-5 cl:px-5 py-2 sm:py-3 lg:py-3 xl:py-3 mt-2 rounded-3xl text-xl bg-transparent text-white border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="name"
          value={loginemail}
          onChange={(e) => {
            setloginemail(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <input
          className="px-3 sm:px-5 lg:px-5 cl:px-5 py-2 sm:py-3 lg:py-3 xl:py-3 mt-2 rounded-3xl text-xl bg-transparent text-white border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="name"
          value={loginpassword}
          onChange={(e) => {
            setloginpassword(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <LoginBtn />
      </form>
    </div>
  );
};

export default Login;
