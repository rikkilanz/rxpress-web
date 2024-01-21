import React from "react";
import {
  pendingPrescriptions,
  sentPrescriptions,
} from "../data/doctorsPrescriptionData";
import NewPrescription from "./NewPrescription";
import { useState } from "react";
import { TruckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Prescription() {
  const [prescriptionFlow, setPrescriptionFlow] = useState(false);

  const renderPrescriptionRow = (prescription) => (
    <div
      key={prescription.id}
      className="flex bg-white rounded-md shadow-md px-4 py-8 mb-6"
    >
      <div className="w-1/5">{prescription.patientName}</div>
      <div className="w-1/5">{prescription.checkinId}</div>
      <div className="w-1/5">{prescription.prescriptionName}</div>
      <div className="w-2/5">{prescription.pharmacyLocation}</div>
      <div className="w-1/5">{prescription.dateSent}</div>
    </div>
  );

  return prescriptionFlow ? (
    <NewPrescription prescriptionFlow={setPrescriptionFlow} />
  ) : (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-sky-600 text-[48px] font-bold">
          Prescriptions
        </h1>
        <button
          onClick={() => {
            setPrescriptionFlow(true);
          }}
          className="bg-primary text-white py-2 px-4 rounded-md"
        >
          New Prescription +
        </button>
      </div>

      <div className="mt-8 bg-white p-8 rounded shadow-md border border-sky-200">
        <div className="flex align-center">
          <ClockIcon className="h-8 w-8 text-sky-900" />
          <h3 className="ml-4 text-[24px] mb-4 text-sky-900">
            Pending prescriptions
          </h3>
        </div>

        <div className="mt-2 max-h-[300px] overflow-y-scroll">
          <div className="flex bg-sky-50 text-xl text-sky-900 rounded-md shadow-md p-4 mb-4 sticky top-0">
            <div className="w-1/5">
              <h4>Patient Name</h4>
            </div>
            <div className="w-1/5">
              <h4>Check-In ID</h4>
            </div>
            <div className="w-1/5">
              <h4>Prescription Name</h4>
            </div>
            <div className="w-2/5">
              <h4>Pharmacy Location</h4>
            </div>
            <div className="w-1/5">
              <h4>Date Sent</h4>
            </div>
          </div>

          {pendingPrescriptions.map(renderPrescriptionRow)}
        </div>
      </div>
      <div className="mt-8 bg-white p-8 rounded shadow-md border border-sky-200">
        <div className="flex align-center">
          <TruckIcon className="h-8 w-8 text-sky-900" />
          <h3 className="ml-4 text-[24px] mb-4 text-sky-900">
            Prescription dropped off
          </h3>
        </div>

        <div className="mt-2 max-h-[300px] overflow-y-scroll">
          <div className="flex bg-sky-50 text-xl text-sky-900 rounded-md shadow-md p-4 mb-4 sticky top-0">
            <div className="w-1/5">
              <h4>Patient Name</h4>
            </div>
            <div className="w-1/5">
              <h4>Check-In ID</h4>
            </div>
            <div className="w-1/5">
              <h4>Prescription Name</h4>
            </div>
            <div className="w-2/5">
              <h4>Pharmacy Location</h4>
            </div>
            <div className="w-1/5">
              <h4>Date Sent</h4>
            </div>
          </div>

          {sentPrescriptions.map(renderPrescriptionRow)}
        </div>
      </div>

      {/* <div className="mt-8 max-h-[300px] overflow-y-scroll">
        <div className="flex justify-between align-center">
          <h3 className="text-[24px]">Prescription dropped off</h3>
        </div>
        <div className="mt-2">
          <div className="flex bg-gray-200 rounded-md shadow-md p-4 mb-4 sticky top-0">
            <div className="w-1/5">
              <h4 className="font-semibold">Patient Name</h4>
            </div>
            <div className="w-1/5">
              <h4 className="font-semibold">Checkin Id</h4>
            </div>
            <div className="w-1/5">
              <h4 className="font-semibold">Prescription Name</h4>
            </div>
            <div className="w-2/5">
              <h4 className="font-semibold">Pharmacy Location</h4>
            </div>
            <div className="w-1/5">
              <h4 className="font-semibold">Date Sent</h4>
            </div>
          </div>

          {sentPrescriptions.map(renderPrescriptionRow)}
        </div>
      </div> */}
    </div>
  );
}
