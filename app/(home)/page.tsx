import HeroSection from '@/presentation/pages/home/items/HeroSection';
import FeaturesSection from '@/presentation/pages/home/items/FeaturesSection';
import ProductList from '@/presentation/pages/home/items/ProductList';
import { fetchProducts } from '@/lib/graphql';
import { Product } from '@/types/product';

// ISR: Revalidate every 5 minutes for fresh product data
export const revalidate = 300;

export default async function Home() {
  const products = await fetchProductsSSR();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <HeroSection />
        <ProductList products={products} />
        <FeaturesSection />
      </div>
    </div>
  );
}

const fetchProductsSSR = async () => {
  const { data } = await fetchProducts();
  return data.products as Product[];
};
