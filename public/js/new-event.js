const newFormHandler = async (event) => {
  event.preventDefault();

  const event_title = document.querySelector('#event-title').value.trim();
  const event_description = document.querySelector('#event-description').value.trim();
  const event_date = document.querySelector('#event-date').value.trim();

  if (event_title && event_description && event_date) {
    console.log(event_title, event_description, event_date);
    const response = await fetch(`/api/profile/event`, {
      method: 'POST',
      body: JSON.stringify({ event_title: event_title, event_description: event_description, event_date: event_date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create event');
    }
  }
};

document
  .querySelector('#createbtn')
  .addEventListener('click', newFormHandler);