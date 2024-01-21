import {
  Routes, Route
} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Dashboard from "./components/Dashboard";
import Patients from "./components/Patients";

function App() {


  return (
    <div className="grid grid-cols-4 h-screen">
      <NavMenu/>
        <Routes>
          {/* Add more routes here as needed */}
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/patients" element={<Patients/>}/>
        </Routes>
    </div>
  )
}

export default App;
