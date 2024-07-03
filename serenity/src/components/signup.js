import React, { useState } from 'react';

const SignUp = ({ onSignUp, onLoginClick }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle sign up logic
      onSignUp(username);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="sign">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <i className='bx bx-user'></i>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className='bx bxs-envelope'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Repeat password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <i className='bx bxs-lock'></i>
        </div>
        <button type="submit" className="button">Register</button>
        <div className="reg-link">
          <p>Have an account? <button type="button" className="link-button" onClick={onLoginClick}>Login</button></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;