'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(5);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count > 0) {
      setMessage(`You've clicked ${count} time${count !== 1 ? 's' : ''}!`);
    }
    // This effect runs whenever count changes
  }, [count]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
      <p className="mb-4">This is a client-side component example with useEffect.</p>
      <div className="flex flex-col items-center gap-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
        <p>Count: {count}</p>
        {message && <p className="text-green-600">{message}</p>}
      </div>
    </main>
  );
}