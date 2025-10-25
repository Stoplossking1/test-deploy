import { Suspense } from 'react';

async function getHealthStatus() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/health`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      return { status: 'error', message: 'API unavailable' };
    }
    
    return await res.json();
  } catch (error) {
    return { status: 'error', message: 'Failed to connect to API' };
  }
}

async function HealthStatus() {
  const health = await getHealthStatus();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-2">API Status</h2>
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${health.status === 'error' ? 'bg-red-500' : 'bg-green-500'}`} />
        <span className="text-gray-700">
          {health.status === 'error' ? health.message : 'Connected'}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
            Hello World
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Welcome to your Next.js + FastAPI application
          </p>
          
          <Suspense fallback={
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          }>
            <HealthStatus />
          </Suspense>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Getting Started</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Frontend running on Next.js 14 with App Router</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Backend powered by FastAPI with PostgreSQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span>Health check endpoint available at /api/health</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}