import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container sky-bg">
      <h2 className="login-title">🌸 Welcome Back, Femonomics!</h2>
      <p className="quote">"Empowered women empower the world."</p>
      <input type="text" placeholder="Enter username" />
      <input type="password" placeholder="Enter password" />
      <button className="glow-button">Login</button>
    </div>
  );
}

export default Login;
