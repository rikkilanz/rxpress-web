import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { stockImage3 } from "../assets/";

export default function Login({ setTheProfile }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidProfile, setIsValidProfile] = useState(true);

  const handleLogin = () => {
    const validProfiles = ["doctor", "pharmacy", "patient"];
    const lowercaseEmail = email.toLowerCase();

    if (validProfiles.includes(lowercaseEmail)) {
      setTheProfile(lowercaseEmail);
      setIsValidProfile(true);
    } else {
      setIsValidProfile(false);
    }
  };

  return (
    <div className="h-screen w-full">
      <NavLink to="/">
        <XMarkIcon className="h-8 w-8 mt-2 ml-2" />
      </NavLink>
      <div className="flex h-full">
        <div className="basis-[50%] flex items-center justify-center">
          <div className="w-96">
            <h1 className="text-4xl font-bold mb-4 font-playfair">Login to RxPress</h1>
            <div>
              <div className={`mb-4 ${isValidProfile ? "" : "border-red-500"}`}>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className={`bg-gray-100 border-2 w-full p-4 rounded-lg focus:outline-none focus:ring focus:border-primary transition-colors ${
                    isValidProfile ? "" : "border-red-500"
                  }`}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidProfile(true);
                  }}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <NavLink
                  className="text-center bg-primary text-white px-4 py-3 rounded font-medium w-full"
                  onClick={handleLogin}
                  to="/"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[50%] h-full block">
          <img
            src={stockImage3}
            alt=""
            className="h-full w-full object-cover"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
