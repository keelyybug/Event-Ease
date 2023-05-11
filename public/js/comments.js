const commentsFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
  
    const response = await fetch(`/comments`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      // RSVP success
      alert('Comment submitted successfully!');
    } else {
      // Comment failure
      alert('Failed to submit comment');
    }
  }
  
  document
    .querySelector('.comments-form')
    .addEventListener('submit', commentsFormHandler);
  