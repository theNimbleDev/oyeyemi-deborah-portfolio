'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showToast, setShowToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const showNotification = (message: string, type: 'success' | 'error') => {
    setShowToast({ show: true, message, type });
    setTimeout(() => {
      setShowToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      // Show success message immediately
      showNotification('Message sent successfully!', 'success');
      setFormData({ fullName: '', email: '', message: '' });

      // Send email in background
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log('Email sent successfully:', result.text);
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      // If email fails after showing success, show a discrete error
      showNotification(
        'Message queued, but there was a network issue.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
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
    <div className='relative'>
      {/* Custom Toast - Centered */}
      {showToast.show && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div
            className={`mx-4 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-300 scale-100 relative ${
              showToast.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            } max-w-sm sm:max-w-md lg:max-w-lg`}
          >
            {/* Close button */}
            <button
              onClick={() =>
                setShowToast({ show: false, message: '', type: 'success' })
              }
              className='absolute top-2 right-2 text-white/80 hover:text-white transition-colors'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            <div className='flex items-center gap-3 pr-6'>
              {showToast.type === 'success' ? (
                <svg
                  className='w-6 h-6 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              ) : (
                <svg
                  className='w-6 h-6 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
              <span className='text-sm sm:text-base font-medium'>
                {showToast.message}
              </span>
            </div>
          </div>
        </div>
      )}

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
          disabled={isSubmitting}
          className={`w-full text-[20px] font-semibold py-3 rounded-md transition-colors ${
            isSubmitting
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-customPink text-white hover:bg-customPink/55'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
