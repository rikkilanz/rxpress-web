import React from "react";
import { stockImage5 } from "../assets";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const doctors = [
  {
    id: 1,
    name: "Dr. Blank",
    location: "Renaissance Medical Group",
    email: "dr.blank@example.com",
    phone: "555-1234",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Dr. Smith",
    location: "City Medical Center",
    email: "dr.smith@example.com",
    phone: "555-5678",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Dr. Johnson",
    location: "Community Health Clinic",
    email: "dr.johnson@example.com",
    phone: "555-8765",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function PatientDoctor() {
  return (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll p-8">
      <h1 className="text-sky-600 text-[48px] font-bold mb-8">Your Doctors</h1>
      <div className="flex gap-x-4">
        {doctors.map((doctor) => (
          <div className="bg-white p-8 rounded shadow-md border border-sky-200 basis-[30%] justify-between flex items-center flex-col text-center">
            <img
              src={doctor.image}
              alt="Headshot of Doctor"
              className="w-[120px] h-[120px] rounded-full object-cover"
            />
            <div className="flex flex-col pt-5">
              <h2 className="text-3xl font-bold text-primary-300">
                {doctor.name}
              </h2>
              <h3 className="text-xl pt-4">{doctor.location}</h3>
            </div>
            <div className="flex justify-between mt-6 w-full">
            <div className="hover:text-primary-300 cursor-pointer font-semibold">
                <button className="flex">
                  <EnvelopeIcon className="h-6 w-6" />
                  <p className="ml-2">Email</p>
                </button>
              </div>
              <div className="hover:text-primary-300 cursor-pointer font-semibold">
                <button className="flex">
                  <PhoneIcon className="h-6 w-6" />
                  <p className="ml-2">Call</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
