import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      navigate("/login");

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=" h-full w-full display flex justify-center items-center mt-10">
      <div>
        <h1 className="text-[#f6f6f6] text-5xl p-3 font-custom text-center md:text-6xl">
          Create your Nova Notion account
        </h1>
        <p className="text-slate-500 mt-2 text-center">
          By signing up you, agree to our{" "}
          <span className="text-blue-400 hover:underline">
            terms of services
          </span>
        </p>
        <div className="flex flex-col p-3 items-center">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter username"
            className="p-2 mt-3 rounded-md bg-[#3a3a3a] hover:opacity-45 placeholder:text-[#f6f6f6] placeholder:font-semibold w-full md:w-1/2"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            className="p-2 w-full md:w-1/2 mt-3 rounded-md bg-[#3a3a3a] hover:opacity-45 placeholder:text-[#f6f6f6] placeholder:font-semibold"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            className="p-2 mt-3 rounded-md bg-[#3a3a3a] hover:opacity-45 placeholder:text-[#f6f6f6] w-full md:w-1/2"
          />
          <button
            onClick={handleRegister}
            className="w-full md:w-1/2 bg-[#3a3a3a] text-green-400 mt-3 font-bold rounded-full p-1"
          >
            Register
          </button>
          <p className="text-slate-500 cursor-pointer ">
            Already have a account ?{" "}
            <Link to="/login">
              <span className="text-blue-400 hover:underline">Login here</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
