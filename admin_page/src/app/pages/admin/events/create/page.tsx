'use client';
// TODO Fix later that time and date are converted correctly
import receiveFormData from './create_event';
import { useState } from 'react';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    startDate: '',
    endDate: '',
    eventTime: '',
    eventLocation: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      // startDate: new Date(formData.startDate),
      startDate: new Date(formData.startDate).toISOString(), // Converts to ISO string
      // endDate: new Date(formData.endDate),
      endDate: new Date(formData.endDate).toISOString(), // Converts to ISO string
      eventTime: formData.eventTime + ':00', // Append seconds if needed

      // eventTime: parseFloat(formData.eventTime),
    };
    receiveFormData(formattedData);
    // receiveFormData(formattedData as FormData);
  };

  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Create Event</h2>
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
          <label
            htmlFor='eventTime'
            className='block text-sm font-medium text-white'
          >
            Event Time:
          </label>

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
