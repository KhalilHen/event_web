'use client';
import CategoryEvent from './category_event';
import { EventsCard } from './event_card';
// import CreateEvent from './create_event';
import { useRouter } from 'next/navigation';

export default function Event() {
  const router = useRouter();
  const handleRouting = () => {
    router.push('/pages/admin/events/create');
  };

  const createCategory = () => {
    router.push('/pages/admin/event-category');
  };
  return (
    <div>
      {/* Appbar container */}
      <div className='flex flex-col justify-center align-middle'>
        <div className='flex justify-center pt-40'>
          <h1> Event overview page</h1>
        </div>

        {/* Title container */}
        <div className='flex flex-row justify-center pt-40 -space-x-60'>
          <div
            className='flex justify-center space-x-52
        '
          >
            <div className='flex flex-col justify-between h-52'>
              <h1>Current events</h1>
              <EventsCard />
              {/* Here a for each for all existing events */}
            </div>
            <div className='flex flex-col justify-between h-52'>
              <h1> Create new event</h1>
              <button
                type='submit'
                onClick={handleRouting}
                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <span> Create! </span>{' '}
              </button>
            </div>
            <div className='flex flex-col justify-between h-52'>
              <h1>Event category</h1>
              <button
                type='submit'
                onClick={createCategory}
                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <span>Event category</span>
              </button>
            </div>
            <div className='flex flex-col justify-between h-52'>
              <h1>Current category &apos;s </h1>

              <CategoryEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
