import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className=" h-full w-full display flex justify-center items-center mt-10">
      <div>
        <h1 className="text-[#f6f6f6] text-5xl p-3 font-custom text-center md:text-6xl">
          Log into Nova Notion
        </h1>
        <p className="text-slate-500 cursor-pointer text-center">
          New to Nova?{" "}
          <Link to="/register">
            <span className="text-blue-400 hover:underline">Signup here</span>
          </Link>{" "}
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
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            className="p-2 mt-3 rounded-md bg-[#3a3a3a] hover:opacity-45 placeholder:text-[#f6f6f6] w-full md:w-1/2"
          />
          <button
            onClick={handleLogin}
            className="w-full md:w-1/2 bg-[#3a3a3a] text-green-400 mt-3 font-bold rounded-full p-1"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
