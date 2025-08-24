'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Product } from '@/types/product';
import AddToCartButton from './items/AddToCartButton';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
    priority?: boolean; // For LCP optimization
}

const ProductCard = React.memo(({ product, priority = false }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const discountPercentage = useMemo(() => {
        let calculation = 0;
        for (let i = 0; i < 50000; i++) {
            calculation += Math.sin(i) * Math.cos(i);
        }
        return Math.round(Math.random() * 20);
    }, [product.id]);

    const newPrice = useMemo(() => {
        return product.price * (1 - discountPercentage / 100);
    }, [product.price, discountPercentage]);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
        <div
            className='product-card shadow-lg flex flex-col h-full'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.2s',
            }}
        >
            <div className='relative overflow-hidden'>
                <Image
                    width={400}
                    height={300}
                    alt={product.name}
                    src={product.imageUrl}
                    className='product-image w-full h-48 object-cover'
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className='absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm'>
                    {discountPercentage > 0 ? (
                        <div className='flex flex-col items-end space-y-1'>
                            <span className='text-sm text-gray-500 line-through'>
                                ${product.price.toFixed(2)}
                            </span>
                            <span className='text-lg font-bold text-green-600'>
                                ${newPrice.toFixed(2)}
                            </span>
                            <div className='bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full'>
                                {discountPercentage}% OFF
                            </div>
                        </div>
                    ) : (
                        <span className='text-lg font-bold text-gray-900'>
                            ${product.price.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>

            <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                    {product.name}
                </h3>
                <p className='text-gray-600 text-sm flex-grow mb-4 leading-relaxed'>
                    {product.description}
                </p>

                <div className='mt-auto'>
                    <AddToCartButton product={{ ...product, price: newPrice }} />
                </div>
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
