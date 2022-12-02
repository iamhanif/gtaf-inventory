import Link from 'next/link';
import React, { useState } from 'react';
import dashboardImg from '../../public/assets/images/dashboard.svg'
import inventoryImg from '../../public/assets/images/inventory.svg'
import documentsImg from '../../public/assets/images/documents.svg'
import settingsImg from '../../public/assets/images/settings.svg'
import Image from 'next/image';


const Sidebar = () => {
    const [options, setOptions] = useState([
        {
            label: 'Dashboard',
            value: 'dashboard',
            icon: dashboardImg
        },
        {
            label: 'Inventory',
            value: 'inventory',
            icon: inventoryImg
        },
        {
            label: 'Documents',
            value: 'documents',
            icon: documentsImg
        },
        {
            label: 'Settings',
            value: 'settings',
            icon: settingsImg
        },
    ])

    return (
        <ul className='hidden md:flex flex-col pt-8 px-6 border-r border-neutral-3 h-full lg:w-sidebar'>
            {
                options && options.length && options.map((option, idx) => <li className='px-3 py-2.5 hover:bg-white hover:text-primary-2 rounded-md' key={option.value + idx}>
                    <Link className='w-full items-center flex gap-2.5' href={`/${option.value}`}>
                        <span className='w-6'>
                            <Image src={option.icon} alt={option.value} />
                        </span>
                        <p className='w-full hidden lg:block'>{option.label}</p>
                    </Link>
                </li>)
            }
        </ul>
    );
};

export default Sidebar;