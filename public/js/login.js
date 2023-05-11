// TODO: make sure all ID's and Classes are referenced correctly in handlebars docs

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      // alert(response.statusText);
      console.log("error");
    }
  }
};

// ! below are selecting from handlebars doc
document
.querySelector('#loginform')
.addEventListener('submit', loginFormHandler);

