import React from "react";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";


export default function PatientDash() {
    return(
        <main className="">
            <div className="text-black text-xl p-5">
                Your Orders
            </div>
            <div className="">
                <div className="">
                    <div className="text-black p-5 flex justify-evenly items-center underline">
                        <h2>Order Id</h2>
                        <h2>Date</h2>
                        <h2>Order Status</h2>
                        <h2>Doctor</h2>
                        <h2>Company</h2>
                        <h2>Subtotal</h2>
                        <h2>Total</h2>
                    </div>
                </div>
                <div className="text-black p-5 flex justify-evenly items-center">
                    <h3>#142341</h3>
                    <h3>Oct 1 2024</h3>
                    <h3>Recieved</h3>
                    <h3>Dr. Blank</h3>
                    <h3>Pharmasave</h3>
                    <h3>$32.10</h3>
                    <h3>$34.20</h3>
                </div>
                <div className="text-black p-5 flex justify-evenly items-center">
                    <h3>#142341</h3>
                    <h3>Oct 1 2024</h3>
                    <h3>Recieved</h3>
                    <h3>Dr. Blank</h3>
                    <h3>Pharmasave</h3>
                    <h3>$32.10</h3>
                    <h3>$34.20</h3>
                </div>
                <div className="text-black p-5 flex justify-evenly items-center">
                    <h3>#142341</h3>
                    <h3>Oct 1 2024</h3>
                    <h3>Recieved</h3>
                    <h3>Dr. Blank</h3>
                    <h3>Pharmasave</h3>
                    <h3>$32.10</h3>
                    <h3>$34.20</h3>
                </div>
                <div className="text-black p-5 flex justify-evenly items-center">
                    <h3>#142341</h3>
                    <h3>Oct 1 2024</h3>
                    <h3>Recieved</h3>
                    <h3>Dr. Blank</h3>
                    <h3>Pharmasave</h3>
                    <h3>$32.10</h3>
                    <h3>$34.20</h3>
                </div>
            </div>
        </main>
    )
}