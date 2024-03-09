import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    return (
        <Dropdown />
    );
}

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    function removetoken() {
        localStorage.removeItem('token');
        navigate('/signin')
    }

    return (
        <div>
            <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" type="button" onClick={toggleDropdown}>Menu</button>

            <div id="dropdownInformation" className={`z-10 ${isOpen ? 'fixed' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                <div className="px-4 py-3 text-sm text-gray-900 ">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-yellow-100 ">Profile</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-yellow-100  ">Library</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" onClick={removetoken} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400">Sign out</a>
                </div>
            </div>
        </div>
    );
}
