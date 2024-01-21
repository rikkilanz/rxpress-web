import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Patients from "./components/Patients";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  const [profile, setProfile] = useState(null);
  return (
    <>
      {!profile ? (
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login setTheProfile={setProfile} />}/>
        </Routes>
      ) : (
        <div className="grid grid-cols-4 h-screen">
          <NavMenu profileContext={profile}/>
          <Routes>
            {/* Add more routes here as needed */}
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
