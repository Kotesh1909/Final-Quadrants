import React from 'react';
import { FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt, FaTimes } from 'react-icons/fa';

function Sidebar({ sidebarToggle, setSidebarToggle }) {

    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 z-50 lg-block`}>

            <button className='lg:hidden absolute top-4 right-4 text-white text-xl' onClick={() => setSidebarToggle(true)}>
                <FaTimes />
            </button>

            <div className='my-2 mb-4'>
                <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
            </div>

            <hr />

            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href='#' className='px-3'>
                        <FaHome className='inline-block w-6 h-6 mr-2 -m-2' />
                        Home
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href='#' className='px-3'>
                        <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -m-2' />
                        Blogs
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href='#' className='px-3'>
                        <FaPoll className='inline-block w-6 h-6 mr-2 -m-2' />
                        Reports
                    </a>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href='#' className='px-3'>
                        <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -m-2' />
                        Inbox
                    </a>
                </li>




            </ul>



        </div>
    );
}
export default Sidebar;