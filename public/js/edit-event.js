async function editEventFormHandler(event) {
  event.preventDefault();

  const eventId = document.querySelector('#event-id').value;
  const eventName = document.querySelector('#event-title').value.trim();
  const eventDescription = document.querySelector('#event-description').value.trim();
  const eventDate = document.querySelector('#event-date').value.trim();

  if (eventId && eventName && eventDate && eventDescription) {
    const response = await fetch(`/edit-event/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify({ eventName, eventDescription, eventDate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response);
    if (response.ok) {
      // Event successfully edited
      alert('Event edited successfully!');
      // Redirect to a relevant page
      document.location.href = '/profile';
    } else {
      // Edit event failed
      alert('Failed to edit event');
    }
  }
}

document
  .querySelector('.edit-event-form').addEventListener('submit', editEventFormHandler);