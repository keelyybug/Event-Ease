const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from signup form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first = document.querySelector('#first-signup').value.trim();
    const last = document.querySelector('#last-signup').value.trim();
    
    //Send post request to API endpoint
    if (username && email && password && first && last) {
      console.log(username, email, password, first, last);
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username: username, email: email, password: password, first: first, last: last }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // If signup successful, redirect to dashboard page
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('#signupform')
  .addEventListener('submit', signupFormHandler);