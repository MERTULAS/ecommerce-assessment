import CommentsContent from '@/presentation/pages/Search/items/CommentsContent';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;

  return (
    <div className='p-8'>
      <h1 className='text-3xl mb-4'>Search Results</h1>

      <div className='mb-4 p-4 bg-gray-100'>
        You searched for: <strong>{q}</strong>
      </div>

      <CommentsContent />
    </div>
  );
};
