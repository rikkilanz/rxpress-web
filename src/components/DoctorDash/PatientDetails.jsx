import { useLocation, NavLink } from 'react-router-dom';

export default function PatientDetails() {
    let location = useLocation();
    let { patientDetails } = location.state;
    
    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
            <div className='mb-8'>
                <NavLink to="/doctor-patients" className="text-xl text-sky-600">{`Patients > `}</NavLink><span className='text-xl'>{patientDetails.name}</span>
            </div>
            <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <h3 className="text-lg font-semibold">Selected Patient:</h3>
                <div className='flex items-center'>
                    <h3 className='mr-4 text-sky-900'>Name:</h3>
                    <p>{patientDetails.name}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Date of birth:</h3>
                    <p>{patientDetails.dob}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Phone Number:</h3>
                    <p>{patientDetails.phoneNumber}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Address:</h3>
                    <p>{patientDetails.address}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Email:</h3>
                    <p>{patientDetails.email}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Preferred Pharmacy:</h3>
                    <p>{patientDetails.preferredPharmacyLocation}</p>
                </div>
            </div>
        </div>
    )
}