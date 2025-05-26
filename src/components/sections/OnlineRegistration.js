import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    branch: '',
    address: '',
    city: '',
    country: '',
    zipcode: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    // You can add your backend API call or further logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Online Registration Form</h2>
      <p className="text-center text-gray-500 mb-4">
        Register online today and take the first step towards success!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="course"
            placeholder="Select Course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="branch"
            placeholder="Select Branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <textarea
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="city"
            placeholder="Enter City Name"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="country"
            placeholder="Enter Country Name"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            name="zipcode"
            placeholder="Enter ZIP Code"
            value={formData.zipcode}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
