import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const cols = ["Name", "Address", "Phone Number", "Details"];

const pharmacies = [
    { id: 1, name: "WellCare Pharmacy", address: "321 Elm Street, City", phoneNumber: "555-123-4567" },
    { id: 2, name: "MediLink Pharmacy", address: "456 Oakwood Avenue, Towns", phoneNumber: "555-987-6543" },
    { id: 3, name: "Healthy Living Pharmacy", address: "789 Maple Road, Villa", phoneNumber: "555-234-5678" },
    { id: 4, name: "QuickCure Pharmacy", address: "101 Pine Lane, Hamlet", phoneNumber: "555-876-5432" },
    { id: 5, name: "VitaWell Pharmacy", address: "202 Cedar Drive, Suburbia", phoneNumber: "555-345-6789" },
    { id: 6, name: "PillPoint Pharmacy", address: "303 Birch Court, Countryside", phoneNumber: "555-654-3210" },
    { id: 7, name: "Sunset Pharmacy", address: "404 Pinecrest Road, Metropolis", phoneNumber: "555-432-1098" },
    { id: 8, name: "CaringHands Pharmacy", address: "505 Oak Circle, Harmonyville", phoneNumber: "555-210-9876" },
    { id: 9, name: "SwiftScript Pharmacy", address: "606 Walnut Avenue, Peakville", phoneNumber: "555-789-0123" },
    { id: 10, name: "PharmaWell Pharmacy", address: "707 Maple Lane, Tranquility", phoneNumber: "555-901-2345" },
];

export default function Pharmacies() {

    const [pharmaciesList, setPharmaciesList] = useState(pharmacies);
    const [searchValue, setSearchValue] = useState("");

    const findPharmacy = () => {
        let newList = pharmacies.filter((pharmacies) =>
        pharmacies.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setPharmaciesList(newList);
    };
    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
            <div>
                <h1 className="text-sky-600 text-[48px] font-bold">Pharmacies</h1>
            </div>
            <div className="mt-8 bg-white p-8 rounded shadow-md border border-sky-200">
                <div className="flex justify-between mb-8 bg-gray-50 border border-gray-200 p-4 rounded">
                    <div className="flex items-center">
                        <FunnelIcon className="w-6 h-6 mr-2 text-gray-400" />
                        <span className="text-gray-700">Filters</span>
                    </div>
                    <div className="relative">
                        <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        name="search"
                        type="text"
                        placeholder="Search"
                        className="p-2 pl-12"
                        />
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-4 top-2" />
                        <span
                        onClick={() => findPharmacy()}
                        className="p-2 bg-sky-600 text-white h-full"
                        >
                        Search
                        </span>
                    </div>
                    </div>
                    <div className="flex justify-between bg-sky-50 rounded-md shadow-md p-4 mb-4">
                    {cols.map((col, i) => (
                        <span
                        key={col}
                        className={`${i === 2 ? "ml-4" : ""} ${
                            i === 1 ? "ml-10" : ""
                        } text-sm uppercase text-sky-900`}
                        >
                        {col}
                        </span>
                    ))}
                    </div>
                    <div className="">
                    {pharmaciesList.map((pharmacy) => (
                        <div key={pharmacy.name} className="flex justify-between rounded-md shadow-md px-4 py-8 mb-6">
                        {cols.map((col) => (
                            <div key={col} className="py-4">
                            <span>
                                {col === "Phone Number"
                                ? pharmacy.phoneNumber
                                : pharmacy[col.toLowerCase()]}
                            </span>
                            {col === "Details" && (
                                <NavLink
                                to={`/pharmacy/${pharmacy.id}`}
                                state={{ pharmacyDetails: pharmacy }}
                                className="ml-2 font-medium text-sky-600"
                                >
                                See more
                                </NavLink>
                            )}
                            </div>
                        ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}