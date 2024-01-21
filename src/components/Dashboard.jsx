import { useState, useEffect } from "react";

const doctorNames = [
  "Dr. Emily Johnson",
  "Dr. Jonathan Chen",
  "Dr. Olivia Rodriguez",
  "Dr. Alexander Patel",
  "Dr. Sophia Davis",
  "Dr. Benjamin Miller",
  "Dr. Mia Thompson",
  "Dr. Ethan Garcia",
  "Dr. Isabella Robinson",
  "Dr. Liam Nguyen",
];

const patientNames = [
  "Mr. Anderson"
];

const pharmacyNames = [
  "Shoppers"
];

const getRandomName = (loginContext) => {
  const randomIndex = Math.floor(Math.random() * doctorNames.length);
  const doctorName = doctorNames[randomIndex];

  // Check login context and modify the name accordingly
  return loginContext === "patient"
    ? doctorName.replace("Dr. ", "")
    : doctorName;
};

export default function DoctorDashboard({ selectedProfile }) {

  const [profileData, setProfileData] = useState("");
  
  useEffect(() => {
    const selectedProfileData = () => {
      switch (selectedProfile) {
        case "doctor":
          setProfileData(getRandomName(selectedProfile));
          break;
        case "patient":
          setProfileData(patientNames);
          break;
        case "pharmacy":
          setProfileData(pharmacyNames);
          break;
      }
    };
    selectedProfileData();
  }, []);
  
  return (
    <main className="bg-sky-50/75 col-span-3 py-16 px-8">
      <div className="mb-8">
        <h1 className="text-sky-900 text-2xl font-playfair">
          <span className="font-bold">Good afternoon,</span> <br />
          <span className="text-4xl">{profileData}</span>
        </h1>
      </div>
      <div className="p-8 bg-white shadow-md border border-sky-200 rounded">
        What do you want to do today?
      </div>
    </main>
  );
}
