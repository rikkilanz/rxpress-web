import { patientData } from "../data/patientData";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NewPrescription() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescriptionData, setPrescriptionData] = useState(null);

  const handleSelectChange = (event) => {
    const selectedPatientId = event.target.value;
    const patient = patientData.find(
      (p) => p.id === parseInt(selectedPatientId)
    );
    setSelectedPatient(patient);
  };

  return (
    <div className="col-span-3 px-4 overflow-y-scroll">
      <div className="sticky top-0 w-full bg-white">
        <h1 className="text-[48px] font-bold py-10">New Prescription</h1>
      </div>
      <div className="px-4">
        <XMarkIcon className="h-8 w-8" />
        <h2 className="text-[24px]">For which patient?</h2>
        <div className="relative inline-block text-left mt-4">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            onChange={handleSelectChange}
          >
            {patientData.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 0h20v20H0z" fill="none" />
              <path d="M10 12L4 6h12l-6 6z" fill="#4A5568" />
            </svg>
          </div>
        </div>
      </div>
      {selectedPatient && (
        <div className="mt-4 col-span-3 px-4">
          <div>
            <h3 className="text-lg font-semibold">Selected Patient:</h3>
            <p>Name: {selectedPatient.name}</p>
            <p>Address: {selectedPatient.address}</p>
            <p>
              Preferred Pharmacy Location:{" "}
              {selectedPatient.preferredPharmacyLocation}
            </p>
            <p>Phone Number: {selectedPatient.phoneNumber}</p>
            <p>Email: {selectedPatient.email}</p>
            <p>Date of Birth: {selectedPatient.dateOfBirth}</p>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">What is the prescription?</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border rounded-md border-gray-500"
              onChange={(e) => setPrescriptionData(e.target.value)}
            ></textarea>
          </div>
          {prescriptionData && (
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setPrescriptionFlow(true);
                }}
                className="border border-gray-200 py-2 px-4 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setPrescriptionFlow(true);
                }}
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Review
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
