import { useState } from "react";
import { NavLink } from "react-router-dom";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";


export default function Notifications({acceptedScreenFlow}) {

    const [acceptedScreen, setAcceptedScreen] = useState(null);
    const [declineScreen, setDeclineScreen] = useState(null);

    return (
        <div className="p-5">
            
            <div className="bg-slate-100 p-5 rounded-lg">
                <h1 className="mb-4 text-sm">Dr. Blank has written a prescription for:</h1>
                <h2 className="text-xl text-primary font-semibold mb-4">Amoxicillin</h2>
                <h3 className="text-sm mb-4">100 mg, 2 times daily for 7 days</h3>

                <div className="flex justify-between">

                    <div>
                        <button 
                            onClick={() => {
                               setAcceptedScreen(true);
                        }}>Accept
                        </button>
                    </div>


                    <div>
                        <button 
                            onClick={() => {
                                setAcceptedScreen(false)
                        }}>Decline
                        </button>
                    </div>
                </div>

            </div>
            { acceptedScreen && ( 
                <div className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center">
                    <div className="bg-white p-5">
                        <CheckCircleIcon className="w-16 text-green-400"/>
                        <h3 className="mb-5 font-bold">Prescription Accepted!</h3>
                        <p className="mb-5">The prescription is now being reviewed by your local pharmacy.</p>
                        <NavLink className="font-italic" to="/">Back to Home Page</NavLink>
                    </div>
                </div>
            )} : { acceptedScreen === false && (
                <div className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center">
                    <div className="bg-white p-5">
                        <h3>Are you sure?</h3>
                        <div className="flex flex-col justify-center gap-4">
                            <button className="mt-4" onClick={() => {
                                    setDeclineScreen(true)
                                    setAcceptedScreen(null)

                                }}>Yes
                            </button>
                            <NavLink to="/" className="text-center">
                                Cancel
                            </NavLink>
                        </div>
                    </div>
                </div>
            )} : { declineScreen &&  (
                <div onClick={() => setDeclineScreen(null)} className="absolute h-screen w-screen bg-gray-500 bg-opacity-50 top-0 left-0 flex items-center justify-center">
                    <div className="bg-white p-5">
                        <h3>You have declined you're prescription.</h3>
                    </div>
                </div>
            )} : { !declineScreen && (
                <NavLink
                    to="/notifications"         
                />
            )}
        </div>
    );
}