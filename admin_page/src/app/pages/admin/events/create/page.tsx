'use client';
// TODO Fix later that time and date are converted correctly
import receiveFormData from './create_event';
import retrieveCategories from './retrieve_category';
import { useEffect, useState } from 'react';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    startDate: '',
    endDate: '',
    eventTime: '',
    eventLocation: '',
    eventCategory: '',
    eventStatus: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const data = await retrieveCategories();
      if (data) {
        setCategories(
          data.map((category: { title: string }) => category.title)
        );
      }
    }
    fetchCategories();
  }, []);

   

  // const [status, setStatus] = useState<string[]>([]);

  // useEffect(() => {
  //   async function fetchCategories() {
  //     const data = await retrieveCategories();
  //     if (data) {
  //       setCategories(
  //         data.map((category: { title: string }) => category.title)
  //       );
  //     }
  //   }
  //   fetchCategories();
  // }, []);


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement 
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  if( e.target.files && e.target.files[0]) {

    setImageFile(e.target.files[0]);
    } else {

      setImageFile(null);
    }
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  try {
    const formattedData = {
      eventName: formData.eventName,
      eventDescription: formData.eventDescription,
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
      eventLocation: formData.eventLocation,
      eventCategory: formData.eventCategory,
    };

    await receiveFormData(formattedData, imageFile);
    //reset
    setFormData({
      eventName: '',
      eventDescription: '',
      startDate: '',
      endDate: '',
      eventTime: '',
      eventLocation: '',
      eventCategory: '',
      eventStatus: '',
    });
    setImageFile(null);
    
    alert('Event created successfully!');
    
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed to create event');
  }
};
    


  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Create Event</h2>
      {error &&  (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">

{error}
        </div>
      )}
      <form className='space-y-4' onSubmit={handleSubmit}>
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
            value={formData.eventName}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>

        <div>
          <label
            htmlFor='eventCategory'
            className='block text-sm font-medium text-white'
          >
            Event Category:
          </label>
          <select
            id='eventCategory'
            name='eventCategory'
            required
            value={formData.eventCategory}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          >
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor='eventImage'
            className='block text-sm font-medium text-white'
          >
            Event Image:
          </label>
          <input
            type='file'
            id='eventImage'
            name='eventImage'
        
            // value={formData.eventName}
            onChange={handleImageChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
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
            value={formData.eventDescription}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          ></textarea>
        </div>

        <div>
          <label
            htmlFor='start-date'
            className='block text-sm font-medium text-white'
          >
            Start Date:
          </label>
          <input
            type='date'
            id='start-date'
            name='startDate'
            required
            value={formData.startDate}
            onChange={handleChange}
            className='mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        <div>
          <label
            htmlFor='end-date'
            className='block text-sm font-medium text-white'
          >
            End Date:
          </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            required
            value={formData.endDate}
            onChange={handleChange}
            className='mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        <div>
          {/* <label
            htmlFor='eventTime'
            className='block text-sm font-medium text-white'
          >
            Event Time:
          </label> */}

          {/* <input
              type='time'
              id='eventTime'
              name='eventTime'
              required
              value={formData.eventTime}
              onChange={handleChange}
              className='mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
            /> */}
        </div>
        <div>
          <label
            htmlFor='eventLocation'
            className='block text-sm font-medium text-white'
          >
            Event Location:
          </label>
          <input
            type='text'
            id='eventLocation'
            name='eventLocation'
            required
            value={formData.eventLocation}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>
        {/* <div>
        <select
            id='eventStatus'
            name='eventStatus'
            required
            value={formData.eventCategory}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          >
            <option value=''>Select a event Status</option>
            {status.map((status) => (
              <option key={status} value={status}>
                {status}  
              </option>
            ))}
          </select>
        </div> */}

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
