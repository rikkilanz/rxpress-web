import React from "react";
import {
  pendingPrescriptions,
  sentPrescriptions,
} from "../data/doctorsPrescriptionData";

export default function Prescription() {
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

  return (
    <div className="col-span-3 px-4 overflow-y-scroll">
      <div className="sticky top-0 w-full bg-white">
        <h1 className="text-[48px] font-bold py-10">Prescriptions</h1>
      </div>

      <div className="mt-8">
        <div className="flex justify-between align-center">
          <h3 className="text-[24px]">Prescription Details</h3>
          <button className="bg-primary text-white py-2 px-4 rounded-md">
            New Prescription +
          </button>
        </div>

        <div className="mt-2 max-h-[300px] overflow-y-scroll">
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

          {pendingPrescriptions.map(renderPrescriptionRow)}
        </div>
      </div>

      <div className="mt-8 max-h-[300px] overflow-y-scroll">
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
      </div>
    </div>
  );
}
