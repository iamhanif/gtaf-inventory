import Image from 'next/image';
import React from 'react';
import SearchOption from '../SearchOption/SearchOption';
import Vector from '../../public/assets/images/Vector.png';
import user from '../../public/assets/images/user.jpg'
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white border-b border-neutral-3'>
            <div className='flex items-center ml-6 lg:w-sidebar'>
                <Button name="Starbucks" icon={<svg className='pl-px mt-1' width="10" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.59456 5.4382C3.79413 5.71473 4.20587 5.71473 4.40544 5.4382L7.75812 0.792603C7.99677 0.461921 7.76048 0 7.35267 0H0.647327C0.239523 0 0.00323534 0.461921 0.241885 0.792603L3.59456 5.4382Z" fill="#3E3F48" />
                </svg>} />
            </div>
            <SearchOption />

            <div className='flex items-center gap-4 mr-4'>
                <Image src={Vector} alt='bell' />
                <Image src={user} alt='user image' />

                <Button name="John Doe" icon={<svg className='pl-px mt-1' width="10" height="8" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.59456 5.4382C3.79413 5.71473 4.20587 5.71473 4.40544 5.4382L7.75812 0.792603C7.99677 0.461921 7.76048 0 7.35267 0H0.647327C0.239523 0 0.00323534 0.461921 0.241885 0.792603L3.59456 5.4382Z" fill="#3E3F48" />
                </svg>} />
            </div>
        </nav>
    );
};

export default Navbar;