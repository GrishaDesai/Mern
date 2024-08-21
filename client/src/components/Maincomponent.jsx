import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Maincomponent() {
    return (
        // <div className="flex-1 p-6 bg-gray-100">
        //     <Outlet />
        // </div>
        <>
            <div>
                <Navbar />
            </div>
            <div className='flex'>
                <div style={{ width: "17%" }}>
                    <Sidebar />
                </div>
                <div style={{width:"83%"}}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
