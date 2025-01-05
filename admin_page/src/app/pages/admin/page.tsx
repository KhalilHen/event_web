'use client';

import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const handleViewEvents = () => {
    router.push('/pages/admin/events');
  };

  return (
    <div>
      {/* Appbar container */}
      <div className='flex flex-col justify-center align-middle'>
        <div className='flex justify-center pt-40'>
          <h1> Admin page</h1>
        </div>
      </div>

      {/* Title container */}
      <div className='flex flex-row justify-center pt-40 -space-x-60'>
        <div
          className='flex justify-center space-x-52
        '
        >
          <div className='flex flex-col justify-between h-52'>
            <h1>Events</h1>

            <button
              type='submit'
              className=' w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onClick={handleViewEvents}
            >
              <span>View events</span>
            </button>
          </div>
          <div className='flex flex-col justify-between h-52'>
            <h1>Event category</h1>
            <button
              type='submit'
              className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <span>Event category</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
