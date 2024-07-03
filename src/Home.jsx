import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand"> Connect App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">Settings</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Feeds Section */}
          <div className="col-lg-8">
            <div className="card shadow-sm rounded-lg mb-4">
              <div className="card-header bg-white border-bottom-0">
                <h5 className="card-title mb-0">Feeds</h5>
              </div>
              <div className="card-body">
                <div className="feed-item mb-3">
                  <div className="feed-header">
                    <strong>Username</strong> tweeted:
                  </div>
                  <div className="feed-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
                {/* More feed items can be added dynamically */}
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="col-lg-4">
            <div className="card shadow-sm rounded-lg mb-4">
              <div className="card-header bg-white border-bottom-0">
                <h5 className="card-title mb-0">Profile</h5>
              </div>
              <div className="card-body">
                <p className="card-text">User information and activity can go here.</p>
                <Link to="/edit-profile" className="btn btn-outline-primary rounded-pill">Edit Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
