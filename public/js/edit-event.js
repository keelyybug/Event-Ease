async function editEventFormHandler(event) {
  event.preventDefault();

  const eventId = document.querySelector('#event-id').value;
  const event_title = document.querySelector('#event-title').value.trim();
  const event_description = document.querySelector('#event-description').value.trim();
  const event_date = document.querySelector('#event-date').value.trim();

  if (eventId && event_title && event_description && event_date) {
    const response = await fetch(`/api/profile/edit-event/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify({ event_title, event_description, event_date }),
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