import PatientDash from './components/PatientDash'
import {
  Routes, Route
} from "react-router-dom";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Patients from "./components/Patients";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import PatientDetails from './components/PatientDetails';
import PatientDoctor from './components/PatientDoctor';

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
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patient/:id" element={<PatientDetails/>}/>
            <Route path="/patient-dash" element={<PatientDash/>} />
            <Route path="/doctors" element={<PatientDoctor/>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
