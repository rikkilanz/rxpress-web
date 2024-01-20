import NavMenu from "./NavMenu"

export default function Dashboard() {
    return (
        <main className="grid grid-cols-4">
            <NavMenu/>
            <div className="bg-indigo-900 col-span-3 text-white">Main container here</div>
        </main>
    )
}