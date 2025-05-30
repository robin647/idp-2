import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentId: '',
    password: ''
  });

  const navigate = useNavigate();

  // form input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // signup form submit handler
  const handleSignup = (e) => {
    e.preventDefault();

    // POST request to backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        if (data.message === 'Signup successful') {
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Signup error:', error);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Gmail Address"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
