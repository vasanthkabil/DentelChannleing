


import React, { useState } from 'react';

const Login = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        },
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Login</h2>
      <p>
        You are not registered? Please <a href="/register">register</a>
      </p>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" required />

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; 
