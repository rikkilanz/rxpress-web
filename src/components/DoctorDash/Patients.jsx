import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const cols = [
    "Name", "DOB", "Phone Number", "Details"
];

const patients = [
    { id: 1, name: "John Doe", dob: "1990-05-15", phoneNumber: "123-456-7890" },
    { id: 2, name: "Jane Lee", dob: "1985-08-22", phoneNumber: "987-654-3210" },
    { id: 3, name: "Bob Ross", dob: "1978-12-10", phoneNumber: "555-123-4567" },
    { id: 4, name: "Alice Tan", dob: "1992-03-18", phoneNumber: "789-012-3456" },
    { id: 5, name: "Sam King", dob: "1980-09-25", phoneNumber: "321-987-6543" },
    { id: 6, name: "Eva Chen", dob: "1987-06-30", phoneNumber: "456-789-0123" },
    { id: 7, name: "Jim Park", dob: "1995-11-08", phoneNumber: "234-567-8901" },
    { id: 8, name: "Lisa Kim", dob: "1983-02-14", phoneNumber: "876-543-2109" },
    { id: 9, name: "Alex Tan", dob: "1976-07-05", phoneNumber: "109-876-5432" },
    { id: 10, name: "Grace Wu", dob: "1998-04-20", phoneNumber: "543-210-9876" },
];


export default function Patients() {

    const [patientList, setPatientList] = useState(patients);
    const [searchValue, setSearchValue] = useState("");

    const findPatient = () => {
        let newList = patients.filter((patient) => patient.name.toLowerCase().includes(searchValue.toLowerCase()));
        setPatientList(newList);
    };

    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
            <div>
                <h1 className="text-xl text-sky-600 mb-8">Patients</h1>
            </div>
            <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <div className="flex justify-between mb-8 bg-gray-50 border border-gray-200 p-4 rounded">
                    <div className="flex items-center">
                        <FunnelIcon className="w-6 h-6 mr-2 text-gray-400"/>
                        <span className="text-gray-700">Filters</span>
                    </div>
                    <div className="relative">
                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} name="search" type="text" placeholder="Search" className="p-2 pl-12" />
                        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-4 top-2"/>
                        <span onClick={() => findPatient()} className="p-2 bg-sky-600 text-white h-full">Search</span>
                    </div>
                </div>
                <div className="flex justify-between bg-sky-50 p-2">
                    {cols.map((col, i) => (
                        <span key={col} className={`${i === 2 ? "ml-4" : ""} ${i === 1 ? "ml-10" : ""} text-xl text-sky-900`}>{col}</span>
                    ))}
                </div>
                <div className="p-2">
                    {patientList.map((patient) => (
                        <div key={patient.name} className="flex justify-between mt-4">
                            {cols.map((col) => (
                                <div key={col}  className="py-4">
                                <span>
                                    {col === "Phone Number" ? patient.phoneNumber : patient[col.toLowerCase()]}
                                </span>
                                {col === "Details" &&
                                    <NavLink to={`/doctor-patient/${patient.id}`} state={{ patientDetails: patient }} className="ml-2 font-medium text-sky-600">
                                        See more
                                    </NavLink>
                                }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}