'use client';

import { Product } from '@/types/product';
import { useCart } from '@/presentation/components/CartContext';
import React from 'react';

interface AddToCartButtonProps {
    product: Product;
}

const AddToCartButton = React.memo(({ product }: AddToCartButtonProps) => {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(product)}
            className='add-to-cart-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg outline-none'
        >
            Add to Cart
        </button>
    )
})

AddToCartButton.displayName = 'AddToCartButton';

export default AddToCartButton;
