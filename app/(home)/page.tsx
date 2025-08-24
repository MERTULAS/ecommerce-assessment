import HeroSection from '@/presentation/pages/Home/items/HeroSection';
import FeaturesSection from '@/presentation/pages/Home/items/FeaturesSection';
import ProductList from '@/presentation/pages/Home/items/ProductList';
import { fetchProducts } from '@/lib/graphql';
import { Product } from '@/types/product';
import ReloadPageCTA from '@/presentation/pages/Home/items/ReloadPageCTA';

// ISR: Revalidate every 5 minutes for fresh product data
export const revalidate = 300;

export default async function Home() {
  const { products, error } = await fetchProductsSSR();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <HeroSection />
        {error ? (
          <div className='text-center py-8'>
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
              <p className='font-bold'>Error Loading Products</p>
              <p>{error}</p>
            </div>
            <ReloadPageCTA />
          </div>
        ) : (
          <ProductList products={products} />
        )}
        <FeaturesSection />
      </div>
    </div>
  );
}

const fetchProductsSSR = async (): Promise<{ products: Product[], error: string | null }> => {
  const result = await fetchProducts();
  let error = null;
  let products: Product[] = [];
  if (result.error) {
    error = result.error.message;
  } else if (result.data) {
    products = result.data.products;
  }
  return { products, error };
};
