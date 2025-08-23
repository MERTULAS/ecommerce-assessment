import React from 'react'
import { ProductDetail } from '@/types/product';

interface ProductDetailProps {
  product: ProductDetail;
}

const ProductDetailContent = ({ product }: ProductDetailProps) => {
  return (
    <div className='p-8'>
      {product && (
        <>
          <h1
            className='text-3xl mb-4'
            dangerouslySetInnerHTML={{
              __html: product.name,
            }}
          />
          <p>ID: {product.id}</p>
          <p>Price: ${product.price}</p>
        </>
      )}
    </div>
  )
}

export default ProductDetailContent;
