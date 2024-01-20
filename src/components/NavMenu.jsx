import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { UserIcon, DocumentTextIcon, IdentificationIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'

const docNav = [
    {name: "Patients", path: "/patients", icon: UserIcon},
    {name: "Prescriptions", path: "/px", icon: DocumentTextIcon},
    {name: "Pharmacies", path: "/pharmacies", icon: BuildingStorefrontIcon},               
];

const patientNav = [
    {name: "Doctors", path: "/doctors", icon: IdentificationIcon},
    {name: "Prescriptions", path: "/px", icon: DocumentTextIcon},
    {name: "Pharmacies", path: "/pharmacies", icon: BuildingStorefrontIcon},               
];

export default function NavMenu({profile}) {

    const [selectedNav, setSelectedNav] = useState([]);

    useEffect(() => {
        const selectedProfile = () => {
            switch(profile){
            case "doctor":
                setSelectedNav(docNav);
            break;
            case "patient":
                setSelectedNav(patientNav);
            break;
            }
        };
        selectedProfile();

    }, []);

    return (
        <div className="bg-white flex flex-col py-12 px-6">
            <div className="mb-8">
                <NavLink to="/" className="flex flex-col">
                    <img src={logo} alt="" className="h-16 w-auto mb-4" />
                    <h1 className="font-bold uppercase text-sky-900">{profile}'s Dashboard</h1>
                </NavLink>
            </div>
            <nav className="flex flex-col ">
                {selectedNav.map((link) => (
                    <NavLink key={link.name} to={link.path} className="mb-8 text-xl text-sky-600 hover:text-sky-500 bg-sky-50/75 px-4 py-2 rounded-md outline-1 outline-sky-200/50 flex items-center outline">
                        {<link.icon className="w-auto h-8 mr-4" />}
                        <p className="">{link.name}</p>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}