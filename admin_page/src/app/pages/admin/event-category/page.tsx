'use client';
// TODO Fix later that time and date are converted correctly
import { useState } from 'react';
import createCategory from './create_category';
export default function CategoryForm() {
  const [formData, setFormData] = useState({
    categoryTitle: '',
    categoryDescription: '',
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
      // categoryTitle: formData.categoryTitle,
      // categoryDescription: formData.categoryDescription,
    };
    createCategory(formattedData);
    // receiveFormData(formattedData as FormData);
  };

  return (
    <div className='max-w-lg mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Create Event Category</h2>
      <form className='space-y-4 ' onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='categoryTitle'
            className='block text-sm font-medium text-white'
          >
            Category Title:
          </label>
          <input
            type='text'
            id='categoryTitle'
            name='categoryTitle'
            required
            value={formData.categoryTitle}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          />
        </div>

        <div>
          <label
            htmlFor='categoryDescription'
            className='block text-sm font-medium text-white'
          >
            Category Description:
          </label>
          <textarea
            id='categoryDescription'
            name='categoryDescription'
            required
            value={formData.categoryDescription}
            onChange={handleChange}
            className='mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2'
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Create Event Category
        </button>
      </form>
    </div>
  );
}
