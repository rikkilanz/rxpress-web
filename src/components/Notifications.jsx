import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  CheckCircleIcon,
  ArrowLeftIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export default function Notifications({ acceptedScreenFlow }) {
  const [acceptedScreen, setAcceptedScreen] = useState(null);
  const [declineScreen, setDeclineScreen] = useState(null);

  return (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8">
      <div className="rounded-lg bg-white shadow-md border border-sky-200">
        <h1 className="mb-4 text-sm pt-5 px-5">
          Dr. Blank has written a prescription for:
        </h1>
        <h2 className="text-xl text-primary font-semibold mb-4 px-5">
          Amoxicillin
        </h2>
        <h3 className="text-sm mb-4 px-5">100 mg, 2 times daily for 7 days</h3>

        <div className="flex justify-between text-center rounded-b-xl">
          <div
            className="basis-[50%] py-2 px-6 bg-gray-50 hover:bg-gray-100 hover:text-primary hover:cursor-pointer"
            onClick={() => {
              setAcceptedScreen(false);
            }}
          >
            Decline
          </div>
          <div
            className="basis-[50%] py-2 px-6 bg-primary text-white hover:bg-primary-300 hover:cursor-pointer"
            onClick={() => {
              setAcceptedScreen(true);
            }}
          >
            Accept
          </div>
        </div>
      </div>
      {acceptedScreen && (
        <div className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center">
          <div className="bg-white px-6 py-8 flex justify-center items-center flex-col rounded-md">
            <CheckCircleIcon className="w-16 text-primary mb-4" />
            <h3 className="mb-5 font-bold">Prescription Accepted!</h3>
            <p className="mb-5">
              The prescription is now being reviewed by your local pharmacy.
            </p>
            <NavLink
              className="bg-primary text-white py-2 px-4 rounded-md flex items-center"
              to="/"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <p className="ml-2">Back to Home Page</p>
            </NavLink>
          </div>
        </div>
      )}
      {acceptedScreen === false && (
        <div className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center ]">
          <div className="bg-white p-5 min-w-[300px] text-center">
            <h3 className="text-xl mb-8">Are you sure?</h3>
            <div className="flex flex-row justify-center items-center gap-4">
              <NavLink
                to="/"
                className="text-center hover:text-primary bg-gray-300 text-white py-2 px-4 rounded-md"
              >
                Cancel
              </NavLink>
              <button
                className="bg-primary text-white py-2 px-4 rounded-md"
                onClick={() => {
                  setDeclineScreen(true);
                  setAcceptedScreen(null);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {declineScreen && (
        <div
          onClick={() => setDeclineScreen(null)}
          className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center"
        >
          <div className="bg-white p-5 flex items-center flex-col">
            <XCircleIcon className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="mb-5">You have declined you're prescription.</h3>
            <NavLink
              className="bg-primary text-white py-2 px-4 rounded-md flex items-center"
              to="/"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <p className="ml-2">Back to Home Page</p>
            </NavLink>
          </div>
        </div>
      )}
      {!declineScreen && <NavLink to="/notifications" />}
    </div>
  );
}
