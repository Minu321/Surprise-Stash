import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (formData.fullName.length < 3) {
      errors.fullName = 'Full name must be at least 3 characters long';
      isValid = false;
    }

    if (formData.subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (formData.body.length < 3) {
      errors.body = 'Body must be at least 3 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-white-900">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white-900">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="body" className="block mb-2 text-sm font-medium text-white-900">Message</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white h-32"
            ></textarea>
            {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body}</p>}
          </div>

          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;