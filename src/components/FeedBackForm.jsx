import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FeedBackForm = () => {

  const [formData , setFormData] =  useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    formData.push(data)
    reset()
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Feedback Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              {...register('first_name', { required: 'First name is required' })}
              id="first-name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm">{errors.first_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              {...register('last_name', { required: 'Last name is required' })}
              id="last-name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm">{errors.last_name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              {...register('address', { required: 'Address is required' })}
              id="address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Number
            </label>
            <input
              type="number"
              {...register('number', { required: 'Phone number is required' })}
              id="number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <ul>
        submitted Data 
        {formData.map((ele)=>{
            return <>
            <div className='flex flex-col gap-5'>
            <div className='border  border-green-500'>
            <li>{ele.first_name}</li>
            <li>{ele.last_name}</li>
            <li>{ele.address}</li>
            <li>{ele.email}</li>
            <li>{ele.number}</li>
            </div>

            </div>
            </>
        })}
       
      </ul>
    </div>
  );
};

export default FeedBackForm;
