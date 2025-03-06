import React, { useState } from 'react';
import './signin.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // For now, just log the credentials. Replace this with backend integration later.
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="signin-page">
      <h1 className="signin-title">Sign In</h1>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="signin-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="signin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="signin-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="signin-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
