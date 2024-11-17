import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="contact-container my-8">
      <h1 className="text-center text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-center mb-4">Have a question? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
