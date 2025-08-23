import Link from 'next/link';
import React from 'react'

const Footer = () => {

    const footerParts = [
        {
            header: 'SHOP',
            links: [
                {
                    label: 'All Products',
                    href: '/products'
                },
                {
                    label: 'New Arrivals',
                    href: '/new-arrivals'
                },
                {
                    label: 'Sale',
                    href: '/sale'
                }
            ]
        },
        {
            header: 'SUPPORT',
            links: [
                {
                    label: 'Contact Us',
                    href: '/contact'
                },
                {
                    label: 'Shipping Info',
                    href: '/shipping-info'
                },
                {
                    label: 'Returns',
                    href: '/returns'
                }
            ]
        },
        {
            header: 'CONNECT',
            links: [
                {
                    label: 'Newsletter',
                    href: '/newsletter'
                },
                {
                    label: 'Social Media',
                    href: '/social-media'
                }
            ]
        },

    ]

    return (
        <footer className='bg-gray-900 text-white py-8 mt-16'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>StyleStore</h3>
                        <p className='text-gray-400'>
                            Your destination for premium fashion and lifestyle products.
                        </p>
                    </div>

                    {footerParts.map((part) => (
                        <div key={part.header}>
                            <h4 className='text-sm font-semibold mb-3 text-gray-300'>
                                {part.header}
                            </h4>
                            <ul className='space-y-2 text-sm text-gray-400'>
                                {part.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className='hover:text-white transition-colors'>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <div className='border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm'>
                    <p>&copy; 2024 StyleStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
