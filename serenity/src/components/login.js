import React, { useState } from 'react';

const Login = ({ onLogin, onSignUpClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    onLogin(username);
  };

  return (
    <div className="sign">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className='bx bxs-user'></i>
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
        <div className="remember">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <button type="button" className="link-button">Forgot password?</button>
        </div>
        <button type="submit" className="button">Login</button>
        <div className="reg-link">
          <p>Don't have an account? <button type="button" className="link-button" onClick={onSignUpClick}>Register</button></p>
        </div>
      </form>
    </div>
  );
};

export default Login;