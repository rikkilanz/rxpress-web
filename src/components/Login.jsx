import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="h-screen w-screen">
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
              <NavLink className="text-center bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
              to="">
                Login as Doctor
              </NavLink>
              <NavLink className="text-center bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
              to="/patient-dashboard">
                Login as Patient
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
