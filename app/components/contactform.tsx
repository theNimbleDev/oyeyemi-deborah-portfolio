'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border border-customPink/50 rounded-lg p-6 space-y-6 bg-card text-foreground'
    >
      <div className='space-y-4'>
        <div>
          <label
            htmlFor='fullName'
            className='block mb-2 text-black dark:text-muted-foreground'
          >
            Full name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            className='w-full px-4 py-2 bg-transparent border border-border rounded-md focus:outline-none focus:border-customPink text-black dark:text-foreground'
            required
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-black dark:text-muted-foreground'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 bg-transparent border border-border rounded-md focus:outline-none focus:border-customPink text-black dark:text-foreground'
            required
          />
        </div>

        <div>
          <label
            htmlFor='message'
            className='block mb-2 text-black dark:text-muted-foreground'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className='w-full px-4 py-2 bg-transparent border border-border rounded-md focus:outline-none focus:border-customPink text-black dark:text-foreground resize-none'
            required
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full text-[20px] font-semibold bg-customPink text-white py-3 rounded-md hover:bg-customPink/55 transition-colors'
      >
        Submit
      </button>
    </form>
  );
}
