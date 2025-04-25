import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const userName = localStorage.getItem('name');
  const today = new Date().toLocaleDateString();

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>📘 Smart UniAssist</h2>
        <div className="nav-section">
          <h4>ACADEMIC</h4>
          <a href="#">Reminders</a>
          <a href="#">Course Recommendations</a>
          <a href="#">Progress Tracking</a>
          <a href="#">Result Analysis</a>
          <a href="#">Documents</a>
          <a href="#">Career (AI)</a>
          <a href="#">Attendance</a>
        </div>
        <div className="nav-section">
          <h4>ADMINISTRATIVE</h4>
          <a href="#">Admin</a>
          <a href="#">Announcements</a>
        </div>
        <div className="nav-section">
          <h4>SETTINGS</h4>
          <a href="#">Account Settings</a>
          <a href="#">Notifications</a>
        </div>
        <a href="#" className="logout">🚪 Logout</a>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h2>👋 Welcome, {userName}!</h2>
          <span>📅 {today}</span>
        </div>

        <div className="dashboard-banner">
          <h2>Learn, Analyze & Explore!</h2>
          <p>Explore your interests and meet like-minded students by joining clubs.</p>
          <button>Learn More</button>
        </div>

        <section className="enrolled-courses">
          <h3>📚 Enrolled Courses</h3>
          <div className="course-cards">
            <div className="course-card purple">
              <strong>Structured Programming</strong>
              <p>CSE 101 - Mon & Wed<br/>9:00 - 10:30 AM</p>
            </div>
            <div className="course-card yellow">
              <strong>Data Structure Lab</strong>
              <p>CSE 201 - Tue & Thu<br/>1:30 - 3:00 PM</p>
            </div>
            <div className="course-card blue">
              <strong>Computer Architecture</strong>
              <p>CSE 205 - Mon & Sat<br/>11:00 - 12:30 PM</p>
            </div>
            <div className="course-card green">
              <strong>Computer Graphics</strong>
              <p>CSE 435 - Wed<br/>2:00 - 5:00 PM</p>
            </div>
          </div>
        </section>

        <section className="course-summary">
          <h3>📄 Course Summary</h3>
          <table>
            <thead>
              <tr>
                <th>Exam Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Structure Lab</td>
                <td>CSE 201</td>
                <td>Jan 25, 2024</td>
                <td>10:00 AM</td>
                <td>Design Studio A</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>Computer Architecture</td>
                <td>CSE 435</td>
                <td>Feb 5, 2024</td>
                <td>2:00 PM</td>
                <td>Computer Lab 2</td>
                <td><span className="status completed">Completed</span></td>
              </tr>
              <tr>
                <td>Machine Learning</td>
                <td>CSE 438</td>
                <td>Mar 10, 2024</td>
                <td>1:00 PM</td>
                <td>Design Lab 1</td>
                <td><span className="status upcoming">Upcoming</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
