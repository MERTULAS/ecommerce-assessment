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
            {/* Mobile Layout - 2 rows */}
            <div className='md:hidden'>
                {/* Mobile Top Row: Logo + Hamburger */}
                <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
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
                        <h1 className='text-xl font-bold text-gray-900'>StyleStore</h1>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className='relative'>
                        <input type='checkbox' id='mobile-menu-toggle' className='hidden peer' />
                        <label 
                            htmlFor='mobile-menu-toggle' 
                            className='flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                            aria-label='Toggle mobile menu'
                        >
                            <svg
                                className='w-6 h-6 text-gray-700'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </label>
                        
                        {/* Mobile Navigation Dropdown */}
                        <nav className='absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-200 z-50'>
                            <div className='py-2'>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className='block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors'
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Mobile Bottom Row: Cart */}
                <div className='container mx-auto px-4 pb-3 flex justify-end'>
                    <CartDisplay />
                </div>
            </div>

            {/* Desktop Layout - Single row */}
            <div className='hidden md:block'>
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

                    {/* Desktop Navigation */}
                    <nav className='flex items-center space-x-6'>
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

                    {/* Desktop Cart */}
                    <CartDisplay />
                </div>
            </div>


        </header>
    )
}

export default Navbar;
