import React from 'react';
import CartDisplay from '@/presentation/components/Cart/CartDisplay';
import Link from 'next/link';

const Navbar = () => {

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },

        {
            label: 'Products',
            href: '/products'
        },

        {
            label: 'About',
            href: '/about'
        },

        {
            label: 'Contact',
            href: '/contact'
        }
    ]

    return (
        <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40'>
            <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <div className='bg-blue-600 text-white p-2 rounded-lg'>
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                            />
                        </svg>
                    </div>
                    <h1 className='text-2xl font-bold text-gray-900'>StyleStore</h1>
                </div>

                <nav className='hidden md:flex items-center space-x-6'>
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className='text-gray-700 hover:text-blue-600 transition-colors'
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <CartDisplay />
            </div>
        </header>
    )
}

export default Navbar;
