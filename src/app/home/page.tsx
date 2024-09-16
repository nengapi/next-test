'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";

function HomeContent() {
  const searchParams = useSearchParams();
  const initialCount = parseInt(searchParams.get('count') || '5', 10);
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 0) {
      setMessage(`You've clicked ${count} time${count !== 1 ? 's' : ''}!`);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>Count: {count}</p>
      {message && <p className="text-green-600">{message}</p>}
      <p>Initial count from URL: {initialCount}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
      <p className="mb-4">This is a client-side component example with useEffect.</p>
      <Suspense fallback={<p>Loading...</p>}>
        <HomeContent />
      </Suspense>
    </main>
  );
}