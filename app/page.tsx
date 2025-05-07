import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Property Management App</h1>
      <p className="mb-6">Welcome to our property management platform</p>
      
      <Link 
        href="/tenant/dashboard" 
        className="px-6 py-3 bg-[#1a2c42] text-white rounded-lg font-medium"
      >
        Go to Dashboard
      </Link>

      <Link 
        href="/tenant/PropertySearch" 
        className="px-6 py-3 bg-[#1a2c42] text-white rounded-lg font-medium"
      >
        Go to Property Search
      </Link>
    </div>
  );
}
