import React from 'react';
import { Link } from 'react-router-dom'
import './HomePage.css';


function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Smart UniAssist</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Smart UniAssist</h2>
        <p>Your AI-powered academic and hostel assistant for a smarter, more organized university life.</p>
        <button>Get Started</button>
      </section>

      <section className="details">
        <div>
          <h3>AI Academic Planner</h3>
          <p>Manage your schedule, exams, grades, and assignments with intelligent reminders and progress tracking.</p>
        </div>
        <div>
          <h3>Hostel Management</h3>
          <p>Smart room matching, attendance tracking, meal bookings, bill payments, and complaint handling — all in one place.</p>
        </div>
        <div>
          <h3>Resource Hub</h3>
          <p>Access libraries, study materials, announcements, and community groups to enhance your university experience.</p>
        </div>
      </section>

      <section id="about">
        <h2>About Smart UniAssist</h2>
        <p>Smart UniAssist is a comprehensive platform designed to simplify student life. From managing academic tasks and hostel facilities to providing AI-powered recommendations and a connected student community, we ensure students stay organized, informed, and engaged.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: mhrobin471@gmail.com</p>
        <p>Phone: +880-1781879276</p>
        <p>Address: Khilkhet, Dhaka, Bangladesh</p>
      </section>

      <footer>
        <p>&copy; 2025 Smart UniAssist. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
