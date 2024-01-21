import { logo } from "../assets";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between p-8">
      <div>
        <img src={logo} alt="" className="h-12 w-auto" />
      </div>
      <nav>
        <ul className="flex items-center text-[16px]">
            <NavLink className="hover:font-bold hover:text-primary py-4 px-6">About</NavLink>
            <NavLink className="hover:font-bold hover:text-primary">Careers</NavLink>
            <NavLink className="hover:font-bold hover:text-primary py-4 px-6">Developers</NavLink>
            <NavLink className="text-white bg-primary rounded-full py-4 px-6 hover:bg-primary-300" to="/login">Log In</NavLink>
        </ul>
      </nav>
    </div>
  );
}
