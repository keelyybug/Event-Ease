const delButtonHandler = async (event) => {
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
};

document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('delete-btn')) {
    delButtonHandler(event);
  }
});