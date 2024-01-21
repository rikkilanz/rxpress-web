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
import Pharmacies from './components/DoctorDash/Pharmacies';
import Prescription from './components/DoctorDash/Prescription';
import UserProfile from './components/UserProfile';
import PatientDoctor from './components/PatientDash/PatientDoctor';
import NewPrescription from './components/DoctorDash/NewPrescription';
import PharmacyDetails from './components/DoctorDash/PharmacyDetails';

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
          <NavMenu profileContext={profile} setProfile={setProfile}/>
          <Routes>
            <Route path="/" element={<Dashboard selectedProfile={profile}/>} />
            <Route path="/doctor-patients" element={<Patients />} />
            <Route path="/patient/:id" element={<PatientDetails/>}/>
            <Route path="/doctor-rx" element={<Prescription/>}/>
            <Route path="doctor-rx-new" element={<NewPrescription/>}/>
            <Route path="/doctor-pharmacies" element={<Pharmacies/>}/>
            <Route path="/pharmacy/:id" element={<PharmacyDetails/>}/>
            <Route path="/patient-rx" element={<PatientDash/>} />
            <Route path='/patient-doctors' element={<PatientDoctor/>}/>
            <Route path="/user" element={<UserProfile/>}/>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
