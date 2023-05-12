const delButtonHandler = async (event) => {
    // const id = event.target.getAttribute('event');
    console.log('hello');
    const id = event.target.dataset.id;
    const response = await fetch(`/edit-event/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete event');
    }
  }
;

document

  .querySelector('#delete')

  .addEventListener('click', delButtonHandler);
