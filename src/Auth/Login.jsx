// import React from 'react'

import { useState } from "react";
import LoginBtn from "../Components/LoginBtn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const navigate = useNavigate();

  const loginFormSubmitted = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const dataexist = users.find(
      (users) =>
        users.Regemail === loginemail && users.Regpassword === loginpassword,
    );

    if (dataexist) {
      alert("You are already registered!");
      navigate("/Dashboard");
      return;
    } else {
      console.log("no");
    }
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
