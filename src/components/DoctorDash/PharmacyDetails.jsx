import { useLocation, NavLink } from 'react-router-dom';

export default function PharmacyDetails() {
    let location = useLocation();
    let { pharmacyDetails } = location.state;
    
    return (
        <div className="bg-sky-50/75 col-span-3 py-16 px-8 overflow-y-scroll">
            <div className='mb-8'>
                <NavLink to="/doctor-pharmacies" className="text-xl text-sky-600">{`Pharmacies > `}</NavLink><span className='text-xl'>{pharmacyDetails.name}</span>
            </div>
            <div className="bg-white p-8 rounded shadow-md border border-sky-200">
                <h3 className="text-lg font-semibold">Selected Pharmacy:</h3>
                <div className='flex items-center'>
                    <h3 className='mr-4 text-sky-900'>Name:</h3>
                    <p>{pharmacyDetails.name}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Address:</h3>
                    <p>{pharmacyDetails.address}</p>
                </div>
                <div className='flex'>
                    <h3 className='mr-4 text-sky-900'>Phone Number:</h3>
                    <p>{pharmacyDetails.phoneNumber}</p>
                </div>
                <div className='my-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.74115026769!2d-123.24712432289135!3d49.26235197138986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672c904a3638b%3A0xd6d59b6858bb223f!2sLife%20Sciences%20Institute!5e0!3m2!1sen!2sca!4v1705863028092!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}