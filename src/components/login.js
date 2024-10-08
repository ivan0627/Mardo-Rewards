import React, { useState } from 'react';
import '../styles/login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome to Mardo Rewards</h1>
        <h2>Sign in</h2>
        

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your username or email address</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@coupa.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter your Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
            />
          </div>
          <a href="#" className="forgot-password">Forgot Password</a>
          <button type="submit" className="signin-button">Sign in</button>
        </form>

        <p className="signup-link">
          No Account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;