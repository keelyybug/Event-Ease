// TODO: make sure all ID's and Classes are referenced correctly in handlebars docs

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from signup form
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const firstName = document.querySelector('#firstName-signup').value.trim();
  const lastName = document.querySelector('#lastName-signup').value.trim();
  const birthdate = document.querySelector('#birthdate-signup').value.trim();
  
  //Send post request to API endpoint
  if (username && email && password && firstName && lastName && birthdate) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, firstName, lastName, birthdate }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If signup successful, redirect to dashboard page
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// ! below are selecting from handlebars doc
document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);