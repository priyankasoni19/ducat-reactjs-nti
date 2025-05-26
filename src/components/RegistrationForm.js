import React, { useState } from 'react';

const RegistrationForm = () => {
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
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="registration-form">
      <h1>Online Registration Form</h1>
      <p>Register online today and take the first step towards success!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Email Address</h3>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Phone Number</h3>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Course</h3>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        <div className="form-section">
          <h3>Branch</h3>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            <option value="Main Campus">Main Campus</option>
            <option value="North Campus">North Campus</option>
            <option value="South Campus">South Campus</option>
          </select>
        </div>

        <div className="form-section">
          <h2>Address</h2>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>City</h3>
          <input
            type="text"
            name="city"
            placeholder="Enter City Name"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Country</h3>
          <input
            type="text"
            name="country"
            placeholder="Enter Country Name"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Zipcode</h3>
          <input
            type="text"
            name="zipcode"
            placeholder="Enter ZIP Code"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-section">
          <h3>Amount</h3>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;