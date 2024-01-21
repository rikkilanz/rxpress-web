import React from "react";
import NavMenu from "./NavMenu";

import { stockImage5 } from "../assets";

export default function PatientDoctor() {
    return (
        <div className="p-10">
            <div className="bg-slate-100 p-8">
                <img src={stockImage5} alt="Headshot of Doctor" className="w-[120px] h-[120px] rounded-full"/>
                <div className="flex flex-col pt-5">
                    <h2 className="text-3xl font-bold text-primary-300">Dr. Blank</h2>
                    <h3 className="text-xl pt-4">Renaissance Medical Group</h3>
                </div>
                <div>
                    <h3 className="text-center mt-5 font-bold text-xl text-primary">Contact</h3>
                </div>
                <div className="flex justify-between mt-6">
                    <div className="hover:text-primary-300 cursor-pointer font-semibold">
                        <button>Email</button>
                    </div>
                    <div className="hover:text-primary-300 cursor-pointer font-semibold">
                        <h3>Call</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}