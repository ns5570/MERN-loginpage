import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-4 rounded shadow-sm' style={{ maxWidth: '400px', width: '100%', color: '#000' }}>
        <h2 className='text-center mb-4'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type='text'
              placeholder='Enter name'
              autoComplete='off'
              name='name'
              className='form-control rounded-pill'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter email'
              autoComplete='off'
              name='email'
              className='form-control rounded-pill'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter password'
              autoComplete='off'
              name='password'
              className='form-control rounded-pill'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success btn-block rounded-pill'>
            Register
          </button>
        </form>
        <p className='text-center mt-3 mb-0'>
          Already have an account? <Link to="/login" className='link-primary'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
