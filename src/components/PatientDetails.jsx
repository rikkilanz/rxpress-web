export default function PatientDetails({patientId}) {
    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8">
            <p className="text-sky-900">Patient id: {patientId}</p>
        </div>
    )
}