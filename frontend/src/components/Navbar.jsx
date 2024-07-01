import logo from "../assets/logo-icon.png";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser)
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="p-3 sticky top-0 z-10 flex items-center md:justify-around justify-between bg-opacity-25 bg-[#151515] ">
      <div className="logo flex  items-center space-x-2">
        <img src={logo} alt="" />
        <h3 className="text-bold font-custom text-[#f6f6f6] md:text-xl ">
          Nova Notion
        </h3>
      </div>

      <div onClick={handleClick} className="md:hidden relative ">
        {open ? (
          <MdClose color="white" size={30} />
        ) : (
          <CiMenuFries color="white" size={30} />
        )}
      </div>
      {open ? (
        <div className="  p-3 md:hidden absolute text-white top-14 w-[300px] h-[300px] bg-[#171717] z-10 ">
          <ul className="text-slate-400 text-sm">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/?cat=art">Art</Link>
            </li>
            <li>
              <Link to="/?cat=science">Science</Link>
            </li>
            <li>
              <Link to="/?cat=cinema">Cinema</Link>
            </li>
            <li>
              <Link to="/?cat=design">Design</Link>
            </li>
            <li>
              <Link to="/?cat=food">Food</Link>
            </li>
            <li>
              <Link to="/?cat=technology">Tech</Link>
            </li>
            <br />
            <div className="credetials mt-5 flex flex-col">
              <span>{currentUser?.username}</span>
              {currentUser ? (
                <span className="cursor-pointer" onClick={logout}>Logout</span>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <span>
                <Link to="/write">Write</Link>
              </span>
            </div>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="hidden md:flex md:items-center md:justify-between  space-x-9 text-sm tracking-tight font-medium">
        <div>
          <ul className="nav-items text-[#f6f6f6] md:flex md:space-x-5   md:block hidden">
            <li className="hover:text-blue-400">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=art">Art</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=science">Science</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=cinema">Cinema</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=design">Design</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=food">Food</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/?cat=technology">Tech</Link>
            </li>
          </ul>
        </div>
        <div className="credetials  md:flex md:items-center md:justify-center space-x-3 text-[#f6f6f6] hidden">
        <span>{currentUser?.username}</span>
              {currentUser ? (
                <span className="cursor-pointer "onClick={logout}>Logout</span>
              ) : (
                <Link to="/login">Login</Link>
              )}
          <span>
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
