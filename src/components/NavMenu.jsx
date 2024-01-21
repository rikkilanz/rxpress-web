import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { UserIcon } from '@heroicons/react/24/outline'

const docNav = [
    {name: "Patients", path: "/patients", icon: UserIcon},
    {name: "Prescriptions", path: "/px", icon: UserIcon},
    {name: "Pharmacies", path: "/pharmacies", icon: UserIcon},               
];

const patientNav = [
    {name: "Doctors", path: "/doctors", icon: UserIcon},
    {name: "Prescription", path: "/prescription", icon: UserIcon},
    {name: "Pharmacies", path: "/pharmacies", icon: UserIcon},               
];

export default function NavMenu({profile}) {

    const [selectedNav, setSelectedNav] = useState([]);

    useEffect(() => {
        const selectedProfile = () => {
            switch(profile){
            case "doctor":
                setSelectedNav(docNav)
            break;
            case "patient":
                setSelectedNav(patientNav)
            break;
            }
        };
        selectedProfile();

    }, [profile]);

    return (
        <div className="bg-sky-50 flex flex-col py-16 px-8">
            <div className="mb-16">
                <NavLink to="/">
                    <img src={logo} alt="" className="h-16 w-auto" />
                    <h1>{profile}</h1>
                </NavLink>
            </div>
            <nav className="flex flex-col ">
                {selectedNav.map((link) => (
                    <NavLink key={link.name} to={link.path} className="mb-4 text-xl text-sky-500 bg-white p-2 rounded-md outline-1 outline-sky-300">
                        {<link.icon className="w-4 h-4" />}
                        <p>{link.name}</p>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}