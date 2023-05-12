const rsvpFormHandler = async (event) => {
  event.preventDefault();

  const message = document.querySelector('#rsvpMessage').value.trim();

  if (message) {
    console.log(message);
  const response = await fetch(`/api/rsvp`, {
    method: 'POST',
    body: JSON.stringify({ message: message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // RSVP success
    alert('RSVP submitted successfully!');
    // Redirect to a thank you page or any other appropriate page
    document.location.replace('/profile');
  } else {
    // RSVP failure
    alert('Failed to submit RSVP');
  }
}
}

document
  .querySelector('#rsvpForm')
  .addEventListener('submit', rsvpFormHandler);
