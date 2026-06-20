import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Register = () => {
  const [Regname, setRegname] = useState("");
  const [Regemail, setRegemail] = useState("");
  const [Regpassword, setRegpassword] = useState("");
  const [Regrepassword, setRegrepassword] = useState("");
  // const [user, setuser] = useState([]);
  const navigate = useNavigate();

  const registerFormSubmitted = (e) => {
    e.preventDefault();

    if (Regpassword == Regrepassword && Regemail) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const emailExists = users.find((user) => user.Regemail === Regemail);

      if (emailExists) {
        alert("You are already registered!");
        return;
      }

      users.push({
        Regname,
        Regemail,
        Regpassword,
      });

      const currentUser = {
        Regname,
        Regemail,
        Regpassword,
      };
      localStorage.setItem("users", JSON.stringify(users));

      // const data = JSON.parse(localStorage.getItem("users"));
      console.log(users);

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      alert("Register Successfull!");
      navigate("/Dashboard");
    } else {
      alert("Enter correct password in Re-Enter password!");
    }
  };

  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex justify-center items-center">
      <form
        onSubmit={(e) => {
          registerFormSubmitted(e);
        }}
        className="lg:w-[28vw] md:w-[25%] sm:w-[10vw] flex flex-col gap-5 p-12 border-4 bg-[#2222] border-emerald-600 rounded-3xl "
      >
        <input
          className="px-3 py-3 mt-2 text-[#ffffff] rounded-3xl text-xl bg-transparent border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="name"
          value={Regname}
          onChange={(e) => {
            setRegname(e.target.value);
          }}
          placeholder="Enter Name"
        />
        <input
          className="px-3 py-3 text-[#ffffff] mt-2 rounded-3xl text-xl bg-transparent border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="email"
          required
          value={Regemail}
          onChange={(e) => {
            setRegemail(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <input
          className="px-3 text-[#ffffff] py-3 mt-2 rounded-3xl text-xl bg-transparent border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="password"
          required
          value={Regpassword}
          onChange={(e) => {
            setRegpassword(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <input
          className="px-3  text-[#ffffff] py-3 mt-2 rounded-3xl text-xl bg-transparent border-2 outline-none placeholder:text-gray-200 border-emerald-500"
          type="password"
          required
          value={Regrepassword}
          onChange={(e) => {
            setRegrepassword(e.target.value);
          }}
          placeholder="Re-Enter Password"
        />

        <div className=" mt-5 flex items-center flex-col">
          <p className="text-gray-300 text-sm text-center hover:text-white hover:cursor-pointer">
            If you are already registerd Tap to{" "}
            <span className="text-md font-bold hover:text-green-200">
              <Link to={"/Login"}>Login</Link>
            </span>
          </p>
          <button
            type="submit"
            className=" hover:cursor-pointer mt-1 w-full text-xl bg-emerald-300 active:scale-95 font-semibold p-3 rounded-3xl "
          >
            Register
          </button>
          <Outlet />
        </div>
      </form>
    </div>
  );
};

export default Register;
