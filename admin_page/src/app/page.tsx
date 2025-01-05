// import { createClient as _createClient } from '@supabase/supabase-js';

export default function Home() {


  // const signIn = async () => {
  //   'use server'
  // }
  // const supabase = createClient()
  //     const { error, data } = await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //       options: {
  //         redirectTo: `${origin}/auth/callback`,
  //       },
  //     });
  
 
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='flex flex-col gap-4 items-center sm:items-start'>
          <form className='flex flex-col gap-4 w-full max-w-xs'>
            <h1 className='text-2xl font-bold text-center  p-14  pl-3.5'>
              Login
            </h1>

            <input
              type='email'
              placeholder='Email'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <input
              type='password'
              placeholder='Password'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
