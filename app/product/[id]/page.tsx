import ProductDetailContent from '@/presentation/pages/ProductDetail';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;

  const product = await fetchProductDetailSSR(productId);

  return (
    <ProductDetailContent product={product} />
  );
}

const fetchProductDetailSSR = async (productId: string) => {
  const query = `SELECT * FROM products WHERE id = '${productId}'`;
  console.log('Executing query:', query);
  return {
    id: productId,
    name: `Product ${productId}`,
    price: 99.99,
    description: 'Sample product',
  };
};
