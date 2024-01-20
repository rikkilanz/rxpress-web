import { logo } from "../assets";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between p-8">
      <div>
        <img src={logo} alt="" className="h-12 w-auto" />
      </div>
      <nav>
        <ul className="flex gap-x-2 items-center">
            <NavLink className="hover:font-bold hover:text-primary">About</NavLink>
            <NavLink className="hover:font-bold hover:text-primary">Careers</NavLink>
            <NavLink className="hover:font-bold hover:text-primary">Developers</NavLink>
            <NavLink className="text-white bg-primary py-4 px-6 rounded-full" to="/login">Log In</NavLink>
        </ul>
      </nav>
    </div>
  );
}
