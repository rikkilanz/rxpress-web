import { useState } from "react";

const clinicNames = [
    "Harmony Health Clinic",
    "Serenity Medical Center",
    "Vitality Care Clinic",
    "Tranquil Wellness Hub",
    "Apex Healing Center",
    "Horizon Family Clinic",
    "Renaissance Medical Group",
    "Pinnacle Care Associates",
    "Radiant Life Wellness Clinic",
    "Zenith Health Solutions"
];

const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * clinicNames.length);
    return clinicNames[randomIndex];
};

export default function Dashboard() {
    return (
        <main className="bg-sky-50/75 col-span-3 py-16 px-8">
            <div className="mb-8">
                <h1 className="text-sky-900 text-2xl">Good afternoon, {getRandomName()}</h1>
            </div>
            <div className="p-8 bg-white shadow-md border border-sky-200 rounded">
                What do you want to do today?
            </div>
        </main>
    )
}