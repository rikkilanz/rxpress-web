import { useState } from "react";
import NavMenu from "./NavMenu"
import PatientDash from "./PatientDash";
import Main from "./Main";

export default function Dashboard({profileName}) {
    const [profile, setProfile] = useState(profileName);

    return (
        <main className="grid grid-cols-4">
            <NavMenu profile={profile} />
            <div className="col-span-3 text-white">
                <PatientDash />
            </div>
        </main>
    )
}