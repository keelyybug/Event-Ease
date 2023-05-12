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
<<<<<<< HEAD
  .querySelector('#delete')
=======
  .querySelector('.edit-event-form')
>>>>>>> 4e63be114b9be50a3045701bef62ddc007462a0b
  .addEventListener('click', delButtonHandler);
