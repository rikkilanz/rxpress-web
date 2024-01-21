import React from "react";
import NavMenu from "./NavMenu";

import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import data from "../data/data.json";
import newOrder from "../data/newOrderData.json";


export default function PatientDash() {
    return(
        <main className="col-span-3">
                <div>
                    <div className="text-primary-300 text-2xl mt-5 ml-4">
                        <h2>Upcoming Orders</h2>
                    </div>  
                        
                    <div className="text-black flex flex-col pb-10 p-10 bg-slate-100">
                        {newOrder.map((item) => (
                                <div className="flex gap-8 items-center" key={item.id}>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Order Id</h2>
                                        <h3>{item.order_id}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Order Status</h2>
                                        <h3>{item.order_status}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Description</h2>
                                        <h3>{item.desc}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Date</h2>
                                        <h3>{item.date}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Quantity</h2>
                                        <h3>{item.qty}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Doctor</h2>
                                        <h3>{item.doctor}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Company</h2>
                                        <h3>{item.company}</h3>
                                    </div>
                                    <div className="m-2">
                                        <h2 className="text-primary underline pb-2">Total</h2>
                                        <h3>{item.total}</h3>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            
            {/* Past Orders Section */}
            <div className="text-primary-300 text-2xl mt-5 ml-4">
                <h1>Your Past Orders</h1>
            </div>

            {/* Filter Section ( May not get to it but if possible would be a nice feature) */}
            <div className="flex justify-center items-center gap-40 mt-10">
                <div>
                    <h2>From:</h2>
                </div>
                <div>
                    <h2>To:</h2>
                </div>
                <div>
                    <button className="bg-blue-400 text-white p-2 rounded-lg">Submit</button>
                </div>
            </div>


            <div>
                <div className="text-black flex flex-col pb-10 p-10 mt-5 bg-slate-100">
                    {data.map((item) => (
                            <div className="flex gap-20 items-center" key={item.id}>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Order Id</h2>
                                    <h3>{item.order_id}</h3>
                                </div>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Order Status</h2>
                                    <h3 className="bg-green-300 rounded-full text-center">{item.order_status}</h3>
                                </div>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Date</h2>
                                    <h3>{item.date}</h3>
                                </div>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Doctor</h2>
                                    <h3>{item.doctor}</h3>
                                </div>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Company</h2>
                                    <h3>{item.company}</h3>
                                </div>
                                <div className="m-2">
                                    <h2 className="text-primary underline pb-2">Total</h2>
                                    <h3>{item.total}</h3>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Upcoming Order Section */}
                    
            </div>
        </main>
    );
}