import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  return (
    <div className="h-screen w-screen">
      <NavLink to="/">
        <XMarkIcon className="h-8 w-8 mt-2 ml-2" />
      </NavLink>
      <div className="flex justify-center items-center h-full">
        <div className="w-96">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </div>
            <div className="flex gap-2">
              <NavLink
                className="text-center bg-primary text-white px-4 py-3 rounded font-medium w-full"
                to="/login"
              >
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
