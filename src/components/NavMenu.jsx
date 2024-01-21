import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import {
  UserIcon,
  UsersIcon,
  DocumentTextIcon,
  IdentificationIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const docNav = [
  { name: "Patients", path: "/patients", icon: UsersIcon },
  { name: "Prescriptions", path: "/px", icon: DocumentTextIcon },
  { name: "Pharmacies", path: "/pharmacies", icon: BuildingStorefrontIcon },
];

const patientNav = [
  { name: "Doctors", path: "/doctors", icon: IdentificationIcon },
  { name: "Prescriptions", path: "/patient-dash", icon: DocumentTextIcon },
  //   { name: "Pharmacies", path: "/pharmacies", icon: BuildingStorefrontIcon },
];

const pharmacyNav = [
  { name: "Doctors", path: "/doctors", icon: IdentificationIcon },
  { name: "Prescriptions", path: "/px", icon: DocumentTextIcon },
  { name: "Pharmacies", path: "/pharmacies", icon: BuildingStorefrontIcon },
];

export default function NavMenu({ profileContext, setProfile }) {
  const [selectedNav, setSelectedNav] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const selectedProfile = () => {
      switch (profileContext) {
        case "doctor":
          setSelectedNav(docNav);
          break;
        case "patient":
          setSelectedNav(patientNav);
          break;
        case "pharmacy":
          setSelectedNav(pharmacyNav);
          break;
      }
    };
    selectedProfile();
  }, []);

  return (
    <div className="bg-white flex flex-col py-12 px-6 border-r border-sky-200/50">
      <div className="mb-8">
        <NavLink to="/" className="flex flex-col">
          <img src={logo} alt="" className="w-full px-10 mb-4" />
        </NavLink>
      </div>
      <div className="justify-between flex flex-col h-full">
        <nav className="flex flex-col">
          {selectedNav.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="mb-8 text-lg text-sky-600 hover:text-sky-500 bg-sky-50/75 px-4 py-2 rounded-md outline-1 outline-sky-200/50 flex items-center outline"
            >
              {<link.icon className="w-auto h-5 mr-4" />}
              <p className="">{link.name}</p>
            </NavLink>
          ))}
        </nav>
        <button
          className="text-lg text-sky-600 hover:text-sky-500 bg-sky-50/75 px-4 py-2 rounded-md outline-1 outline-sky-200/50 flex items-center outline relative"
          onClick={toggleMenu}
        >
          <UserIcon className="w-auto h-5 mr-4" />
          <p className="">Profile</p>
          {isMenuOpen && (
            <div className="bg-white border rounded-md absolute right-0 mt-2 shadow-md">
              <ul className="flex flex-col">
                <NavLink
                  to="/user"
                  className="w-full px-4 py-2 text-sky-600 hover:bg-sky-50"
                >
                  Settings
                </NavLink>
                <NavLink
                  to="/"
                  onClick={() => setProfile(null)}
                  className="w-full px-4 py-2 text-sky-600 hover:bg-sky-50"
                >
                  Sign Out
                </NavLink>
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
