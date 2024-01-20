import { useState } from "react";
import NavMenu from "./NavMenu"

export default function Dashboard({profileName}) {
    const [profile, setProfile] = useState(profileName);

    return (
        <main className="grid grid-cols-4">
            <NavMenu profile={profile} />
            <div className="bg-indigo-900 col-span-3 text-white">Main container here</div>
        </main>
    )
}