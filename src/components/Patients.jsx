import { NavLink } from "react-router-dom";

const cols = [
    "Name", "DOB", "Phone Number", "See More"
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
    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8">
            <div>
                <h1 className="text-xl text-sky-600 mb-8">Patients</h1>
            </div>
            <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <div className="flex justify-between mb-8">
                    <div>
                        <img src="" alt="" />
                        <span>Filters</span>
                    </div>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input name="search" type="text" />
                    </div>
                </div>
                <div className="flex justify-between bg-sky-50">
                    {cols.map((col, i) => (
                        <span key={col} className={`text-xl text-sky-900 p-2`}>{col}</span>
                    ))}
                </div>
                {patients.map((patient) => (
                    <div key={patient.name} className="flex justify-between">
                        {cols.map((col) => (
                            <div key={col} >
                            <span className="py-2">
                                {col === "Phone Number" ? patient.phoneNumber : patient[col.toLowerCase()]}
                            </span>
                            <NavLink to={`/patient/${patient.id}`}>
                            Details
                            </NavLink>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                
            </div>
        </div>
    )
}