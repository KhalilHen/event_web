'use client'
// import retrieveEvents(0 from './retrieve_events.tsx';
import retrieveEvents from './retrieve_events';

export default function Event() {
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

              {/* Here a for each for all existing events */}
            </div>
            <div className='flex flex-col justify-between h-52'>
              <h1> Create new event</h1>
            </div>
            <div className='flex flex-col justify-between h-52'>
              <h1>Event category</h1>
              <button
                type='submit'
                onClick={retrieveEvents}
                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <span>Event category</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
