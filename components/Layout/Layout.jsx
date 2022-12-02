import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className='bg-neutral-2 h-screen'>
            <Navbar />
            <div className='h-body flex'>
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;