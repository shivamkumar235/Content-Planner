import { Link } from "react-router-dom";
const LoginBtn = () => {
  return (
    <div className=" mt-5 flex items-center flex-col">
      <p className="text-gray-300 text-sm text-center hover:text-white hover:cursor-pointer">
        If you are new user Tap to{" "}
        <span className="text-md font-bold hover:text-green-200">
          <Link to={"/"}>Register</Link>
        </span>
      </p>
      <button
        type="submit"
        className="bg-emerald-300 active:scale-95  hover:cursor-pointer mt-1 w-full text-xl font-semibold p-3 rounded-3xl "
      >
        Login
      </button>
    </div>
  );
};

export default LoginBtn;
