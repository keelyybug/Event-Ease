const rsvpFormHandler = async (event) => {
  event.preventDefault()


  var messageInput = document.getElementById("messageInput").value;

  const url = `/api/rsvp/${event.target.dataset.user}/${event.target.dataset.event}`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ messageInput: messageInput}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // RSVP success
    alert('RSVP submitted successfully!');
    // Redirect to a thank you page or any other appropriate page
    //document.location.replace('/profile');
    location.reload();
  } else {
    // RSVP failure
    alert('Failed to submit RSVP');
  }
}
}

console.log("Loaded");

document
.querySelector("#rsvp-form")
  .addEventListener('submit', rsvpFormHandler);
