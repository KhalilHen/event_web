'use client';
import { useState } from 'react';
// import { supabase } from '../lib/supabaseClient';
// import { supabase } from '@lib/supabaseClient';
import { supabase } from '../../lib/supabaseClient';
export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage(null);
      alert('Login successful!');
    }
  };

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='flex flex-col gap-4 items-center sm:items-start'>
          <form
            onSubmit={handleLogin}
            className='flex flex-col gap-4 w-full max-w-xs'
          >
            <h1 className='text-2xl font-bold text-center p-14 pl-3.5'>
              Login
            </h1>

            {errorMessage && (
              <p className='text-red-500 text-center'>{errorMessage}</p>
            )}

            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button
              type='submit'
              className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
