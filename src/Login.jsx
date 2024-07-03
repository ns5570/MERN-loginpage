import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showPopup, setShowPopup] = useState(false); // State to control visibility of custom popup
  const [popupMessage, setPopupMessage] = useState(''); // State to hold message for custom popup
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          const userName = email.split('@')[0]; // Extracting user name from email
          navigate('/home');
        } else {
          setPopupMessage('Wrong credentials! Please try again.'); // Set popup message for wrong credentials
          setShowPopup(true); // Show custom popup
        }
      })
      .catch(err => console.log(err));
  };

  const closePopup = () => {
    setShowPopup(false); // Function to close custom popup
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-4 rounded shadow-sm' style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className='text-center mb-4'>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              type='email'
              placeholder='Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-pill'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type={showPassword ? 'text' : 'password'} // Conditional rendering of input type
              placeholder='Password'
              autoComplete='off'
              name='password'
              className='form-control rounded-pill'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-3 form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='showPassword'
              onChange={(e) => setShowPassword(e.target.checked)} // Toggle password visibility
            />
            <label className='form-check-label' htmlFor='showPassword'>Show Password</label>
          </div>
          <button type='submit' className='btn btn-primary btn-block rounded-pill'>
            Log in
          </button>
        </form>
        <p className='text-center mt-3 mb-0'>
          Don't have an account? <Link to="/register" className='link-primary'>Register</Link>
        </p>

        {/* Custom Popup */}
        {showPopup && (
          <div className="custom-popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <p>{popupMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
