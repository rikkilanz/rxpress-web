import { patientData } from "../../data/patientData";
import { useState } from "react";
import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function NewPrescription({ prescriptionFlow }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescriptionData, setPrescriptionData] = useState(null);
  const [reviewScreen, setReviewScreen] = useState(false);
  const [confirmScreen, setConfirmScreen] = useState(false);

  const handleSelectChange = (event) => {
    const selectedPatientId = event.target.value;
    const patient = patientData.find(
      (p) => p.id === parseInt(selectedPatientId)
    );
    setSelectedPatient(patient);
  };

  return (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
      {!reviewScreen && !confirmScreen ? (
        <div>
          <div className="flex items-center">
            <button
              onClick={() => {
                prescriptionFlow(false);
              }}
            >
              <ArrowLeftIcon className="h-8 w-8 text-primary" />
            </button>
            <h1 className="text-sky-600 ml-8 text-[48px] font-bold">
              New Prescription
            </h1>
          </div>
          <div className="px-4">
            <h2 className="text-[24px] mt-8">
              Which patient are you creating a prescription for?
            </h2>
            <div className="relative inline-block text-left mt-4">
              <select
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                onChange={handleSelectChange}
              >
                <option value="" disabled selected>
                  Select a patient
                </option>
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
              <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <h3 className="text-lg font-semibold">Selected Patient:</h3>
                <p>Name: {selectedPatient.name}</p>
                <p>Address: {selectedPatient.address}</p>
                <p>
                  Preferred Pharmacy Location:{" "}
                  {selectedPatient.preferredPharmacyLocation}
                </p>
                <p>Phone Number: {selectedPatient.phoneNumber}</p>
                <p>Email: {selectedPatient.email}</p>
                <p>Date of Birth: {selectedPatient.dob}</p>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold mt-8 mb-2">
                  What is the prescription?
                </h3>
                <textarea
                  name=""
                  placeholder="Enter prescription details here..."
                  id=""
                  rows="5"
                  className="border rounded-md border-primary-300 focus:border-1 min-w-full p-4 focus:outline-none focus:ring focus:ring-primary"
                  onChange={(e) => setPrescriptionData(e.target.value)}
                ></textarea>
              </div>
              {prescriptionData && (
                <div className="flex justify-between mt-4 pb-8">
                  <button
                    onClick={() => {
                      prescriptionFlow(false);
                    }}
                    className="border border-gray-200 py-2 px-4 rounded-md bg-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setReviewScreen(true);
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
      ) : !confirmScreen ? (
        <div className="">
          <div className="">
            <h1 className="text-sky-600 mb-8 text-[48px] font-bold">
              Prescription Review
            </h1>
          </div>
          <div className="mt-4 col-span-3 px-4 bg-white p-8 rounded shadow-md border border-sky-200">
            <div>
              <h3 className="text-lg font-semibold">Prescription for:</h3>
              <p>Name: {selectedPatient.name}</p>
              <p>Address: {selectedPatient.address}</p>

              <p>Phone Number: {selectedPatient.phoneNumber}</p>
              <p>Email: {selectedPatient.email}</p>
              <p>Date of Birth: {selectedPatient.dob}</p>
            </div>
          </div>
          <div className="mt-4 col-span-3 px-4 bg-white p-8 rounded shadow-md border border-sky-200">
            <div>
              <h3 className="text-lg font-semibold">
                Sending prescription to:
              </h3>
              <p>
                Preferred Pharmacy Location:{" "}
                {selectedPatient.preferredPharmacyLocation}
              </p>
            </div>
          </div>
          <div className="mt-4 col-span-3 px-4 bg-white p-8 rounded shadow-md border border-sky-200">
            <div>
              <h3 className="text-lg font-semibold">Prescription details:</h3>
              <p>{prescriptionData}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                prescriptionFlow(false);
              }}
              className="border border-gray-200 py-2 px-4 rounded-md bg-white"
            >
              Go Back
            </button>
            <button
              onClick={() => {
                setConfirmScreen(true);
              }}
              className="bg-primary text-white py-2 px-4 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <div className="col-span-3 px-4 py-8 text-center flex flex-col items-center justify-center h-full">
          <CheckCircleIcon className="h-10 w-10 text-primary" />
          <h3 className="font-playfair text-[32px]">
            Prescription sent to pharmacy!
          </h3>
          <p>We will notify your patient about their prescription.</p>
          <NavLink
            to="/"
            className="bg-primary text-white py-2 px-4 rounded-md mt-8"
          >
            Back to Dashboard
          </NavLink>
        </div>
      )}
    </div>
  );
}
