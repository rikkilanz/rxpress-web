import { useState } from "react";

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

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * doctorNames.length);
  return doctorNames[randomIndex];
};

export default function DoctorDashboard() {
  return (
    <main className="bg-sky-50/75 col-span-3 py-16 px-8">
      <div className="mb-8">
        <h1 className="text-sky-900 text-2xl font-playfair">
          <span className="font-bold">Good afternoon,</span> <br />
          <span className="text-4xl">{getRandomName()}</span>
        </h1>
      </div>
      <div className="p-8 bg-white shadow-md border border-sky-200 rounded">
        What do you want to do today?
      </div>
    </main>
  );
}
