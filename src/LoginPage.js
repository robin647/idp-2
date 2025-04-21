import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // login button click handler
  const handleLogin = (e) => {
    e.preventDefault();

    // POST request to backend API
    fetch('https://uniassist.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentId, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          // token localStorage e store kora
          localStorage.setItem('token', data.token);
          alert('Login Successful!');
          navigate('/dashboard'); // dashboard e pathabe
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login to Smart UniAssist</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
