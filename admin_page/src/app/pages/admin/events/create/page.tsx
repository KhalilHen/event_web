export default function CreateEvent() {
  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Create Event</h2>
      <form className='space-y-4 '>
        <div>
          <label
            htmlFor='eventName'
            className='block text-sm font-medium text-white'
          >
            Event Title:
          </label>
          <input
            type='text'
            id='eventName'
            name='eventName'
            required
            className='mt-1 block w-full border text-black  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>

        <div>
          <label
            htmlFor='eventDescription'
            className='block text-sm font-medium text-white'
          >
            Event Description:
          </label>
          <textarea
            id='eventDescription'
            name='eventDescription'
            required
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          ></textarea>
        </div>

        {/* <div>
          <label
            htmlFor='status'
            className='block text-sm font-medium text-white'
          >
            Status:
          </label>
          <textarea
            id='status'
            name='status'
            // required
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          ></textarea>
        </div>
        <div>
          <label
            htmlFor='Status'
            className='block text-sm font-medium text-white'
          >
            Status:
          </label>
          <input
            type='enum'
            id='status'
            name='status'
            // required
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div> */}
        <div>
          <label
            htmlFor='start-date'
            className='block text-sm font-medium text-white'
          >
            start-date:
          </label>
          <input
            type='date'
            id='start-date'
            name='start-date'
            required
            className='mt-1 block w-full  text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        <div>
          <label
            htmlFor='end-date'
            className='block text-sm font-medium text-white'
          >
            end-date:
          </label>
          <input
            type='date'
            id='end-date'
            name='end-date'
            required
            className='mt-1 block w-full  text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        <div>
          <label
            htmlFor='eventTime'
            className='block text-sm font-medium text-white'
          >
            Event Time:
          </label>
          <input
            type='time'
            id='eventTime'
            name='eventTime'
            required
            className='mt-1 block w-full  text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        <div>
          <label
            htmlFor='eventLocation'
            className='block text-sm font-medium text-white '
          >
            Event Location:
          </label>
          <input
            type='text'
            id='eventLocation'
            name='eventLocation'
            required
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
