import PatientDash from './components/PatientDash'
import {
  Routes, Route
} from "react-router-dom";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Patients from "./components/Patients";
import Landing from "./components/Landing";
import Login from "./components/Login";
import DoctorDashboard from './components/DoctorDashboard';
import PatientDetails from './components/PatientDetails';

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
            <Route path="/" element={<DoctorDashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patient/:id" element={<PatientDetails/>}/>
            <Route path="/patient-dash" element={<PatientDash/>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
