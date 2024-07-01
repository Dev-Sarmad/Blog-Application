import { Link } from "react-router-dom";
import logo from "../assets/logo-icon-white.png";
function Footer() {
  return (
    <div className="bg-[#181818] flex flex-wrap space-x-3  md:flex-row md:justify-evenly p-4  w-full">
      {/* Company Name and CTA */}
      <div className="Company Name and CTA">
        {/* logo and cta */}
        <div className="logo flex  items-center space-x-2">
          <img src={logo} alt="" />
          <h4 className="text-bold font-custom text-[#f6f6f6]">Nova Notion</h4>
        </div>
        <div className="text-slate-400 text-xs mt-3">
          <p>Documents and designs for engineering teams</p>
          &copy; <span> 2024 Nova Notion labs , Inc.</span>
        </div>
      </div>
      {/* categories */}
      <div className="text-slate-400 text-sm">
        <h4 className="text-slate-600">Categories</h4>
        <ul className="mt-3">
          <li>Food</li>
          <li>Science</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>
      {/* About */}
      <div className="text-slate-400 text-sm">
        <h4 className="text-slate-600">About</h4>
        <ul className="mt-3">
          <li>Pricing</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <Link to="/about"><li>Teams</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
