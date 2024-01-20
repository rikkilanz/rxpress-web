import { NavLink } from "react-router-dom";
import { logo } from "../assets";


const navigation = [
    {name: "Patients", path: "/patients", icon: ""},
    {name: "Prescriptions", path: "/px", icon: ""},
    {name: "Pharmacies", path: "/pharmacies", icon: ""},               
];

export default function NavMenu() {
    return (
        <div className="bg-sky-50 flex flex-col py-16 px-8">
            <div className="mb-16">
                <NavLink to="/">
                    <img src={logo} alt="" className="h-16 w-auto" />
                </NavLink>
            </div>
            <nav className="flex flex-col ">
                {navigation.map((link) => (
                    <NavLink key={link.name} to={link.path} className="mb-4 text-xl text-sky-500 bg-white p-2 rounded-md outline-1 outline-sky-300">
                        <img src={link.icon} alt="" className="w-4" />
                        <p>{link.name}</p>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}