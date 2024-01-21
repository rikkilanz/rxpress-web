import React from "react";
import NavMenu from "../NavMenu";

import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import data from "../../data/data.json";


export default function PatientDash() {
    return(
        <main className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
            <div>
                <h1 className="text-xl text-sky-600 mb-8">Prescriptions</h1>
            </div>
            <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <div className="flex justify-center items-center gap-40">
                <div>
                    <h2>From: </h2>
                </div>
                <div>
                    <h2>To:</h2>
                </div>
                <div>
                    <button className="bg-blue-400 text-white p-2 rounded-lg">Submit</button>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="text-black p-5 flex justify-evenly items-center underline">
                        {/* {data.map((item) => (
                            <div key={item.id}>
                                <h2>{item.order_id}</h2>
                            </div>
                        ))} */}
                        <h2>Order Id</h2>
                        <h2>Date</h2>
                        <h2>Order Status</h2>
                        <h2>Doctor</h2>
                        <h2>Company</h2>
                        <h2>Subtotal</h2>
                        <h2>Total</h2>
                    </div>
                </div>

                <div className="text-black flex-col justify-center">
                    {data.map((item) => (
                            <div className="flex justify-evenly p-5" key={item.id}>
                                <h3>{item.order_id}</h3>
                                <h3>{item.date}</h3>
                                <h3>{item.order_status}</h3>
                                <h3>{item.doctor}</h3>
                                <h3>{item.company}</h3>
                                <h3>{item.subtotal}</h3>
                                <h3>{item.total}</h3>
                            </div>
                        ))}
                </div>
            </div>
            </div>
        </main>
    );
}