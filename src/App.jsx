import PatientDash from './components/PatientDash/PatientDash'
import {
  Routes, Route
} from "react-router-dom";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Patients from "./components/DoctorDash/Patients";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import PatientDetails from './components/DoctorDash/PatientDetails';
import DoctorPrescriptions from './components/DoctorDash/DoctorPrescriptions';
import Pharmacies from './components/DoctorDash/Pharmacies';
import Prescription from './components/DoctorDash/Prescription';

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
            <Route path="/" element={<Dashboard />} />
            <Route path="/doctor-patients" element={<Patients />} />
            <Route path="/patient/:id" element={<PatientDetails/>}/>
            <Route path="/doctor-rx" element={<DoctorPrescriptions/>}/>
            <Route path="doctor-rx-new" element={<Prescription/>}/>
            <Route path="/doctor-pharmacies" element={<Pharmacies/>}/>
            <Route path="/patient-rx" element={<PatientDash/>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
