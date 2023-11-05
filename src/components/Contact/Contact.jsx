import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update state when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Just print to console for now
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-6 sm:p-2 p-6">
      <h1 className="text-3xl">Contact</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input 
          type="text" 
          name="name"
          required
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange} 
          className="p-2 border rounded"
        />
        <input 
          type="email" 
          name="email"
          required
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <textarea 
          name="message" 
          required
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange} 
          rows="4" 
          className="p-2 border rounded"
        ></textarea>
        <button type="submit" className="p-2 bg-color-a text-white rounded hover:bg-color-c hover:text-black transition-all">
          Submit
        </button>
      </form>
      <div>
        Or contact me at <a className="text-color-d font-bold hover:text-color-b transition-all" href="mailto:contact@alexbi.shop">contact@alexbi.shop</a>
      </div>
    </div>
  );
};

export default Contact;
