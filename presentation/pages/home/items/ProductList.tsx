'use client';

import ProductCard from '@/presentation/components/ProductCard';
import React, { useState, useEffect, useMemo } from 'react'
import { Product } from '@/types/product';

interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products = [] }: ProductListProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const filteredAndSortedProducts = useMemo(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filtered.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }, [products, searchTerm]);


    const LoadingSkeleton = () => (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='bg-white rounded-lg shadow-sm p-4 animate-pulse'>
                    <div className='w-full h-48 bg-gray-200 rounded-lg mb-4'></div>
                    <div className='h-4 bg-gray-200 rounded mb-2'></div>
                    <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
                    <div className='h-6 bg-gray-200 rounded w-1/2'></div>
                </div>
            ))}
        </div>
    );

    return (
        <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Featured Products
            </h2>
            <div className='mb-4'>
                <input
                    type='text'
                    placeholder='Search products...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    disabled={isLoading}
                />
            </div>

            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {filteredAndSortedProducts.length > 0 ? (
                        filteredAndSortedProducts.map((product: Product, index) => (
                            <ProductCard key={product.id || index} product={product} />
                        ))
                    ) : (
                        <div className='col-span-full text-center py-8'>
                            <p className='text-gray-500 text-lg'>No products found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProductList;
