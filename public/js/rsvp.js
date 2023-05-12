const rsvpFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const message = document.querySelector('#message').value.trim();

  const response = await fetch(`/rsvp`, {
    method: 'POST',
    body: JSON.stringify({ name, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // RSVP success
    alert('RSVP submitted successfully!');
    // Redirect to a thank you page or any other appropriate page
    document.location.replace('/thank-you');
  } else {
    // RSVP failure
    alert('Failed to submit RSVP');
  }
}

document
  .querySelector('.rsvp-form')
  .addEventListener('submit', rsvpFormHandler);
