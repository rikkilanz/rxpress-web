import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { patientData } from "../../data/patientData";

const cols = ["Name", "DOB", "Phone Number", "Details"];

export default function Patients() {
  const [patientList, setPatientList] = useState(patientData);
  const [searchValue, setSearchValue] = useState("");

  const findPatient = () => {
    let newList = patientData.filter((patient) =>
      patient.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPatientList(newList);
  };

  return (
    <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
      <div>
        <h1 className="text-sky-600 mb-8 text-[48px] font-bold">Patients</h1>
      </div>
      <div className="bg-white p-8 rounded shadow-md border border-sky-200">
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
              onClick={() => findPatient()}
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
          {patientList.map((patient) => (
            <div key={patient.name} className="flex justify-between rounded-md shadow-md px-4 py-8 mb-6">
              {cols.map((col) => (
                <div key={col} className="py-4">
                  <span>
                    {col === "Phone Number"
                      ? patient.phoneNumber
                      : patient[col.toLowerCase()]}
                  </span>
                  {col === "Details" && (
                    <NavLink
                      to={`/patient/${patient.id}`}
                      state={{ patientDetails: patient }}
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
  );
}
