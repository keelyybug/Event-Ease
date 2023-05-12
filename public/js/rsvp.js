const rsvpFormHandler = async (event) => {
  event.preventDefault();

  var messageInput = document.getElementById("messageInput").value;

  const response = await fetch(`/api/rsvp/:user_id/:event_id`, {
    method: 'POST',
    body: JSON.stringify({ messageInput: messageInput})
    headers: {
      'Content-Type': 'application/json',
    },
  });
      var messageOutput = document.getElementById("messageOutput");

      messageOutput.textContent = response;

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
.getElementById("rsvpSubmitButton")
  .addEventListener('submit', rsvpFormHandler);

  // document
//!we use the DOMContentLoaded event to ensure that the JavaScript code is executed after the HTML document has been fully loaded.
  // .addEventListener("DOMContentLoaded", function() {
    // Event handler for the submit button
    // var submitButton = document.getElementById("rsvpSubmitButton");
    // submitButton.addEventListener("click", function() {
      // Get the value from the input field

      // var messageInput = document.getElementById("messageInput").value;
        
  //   const response = await fetch(`/api/rsvp/:user_id/:event_id`, {
  //   method: 'POST',
  //   body: JSON.stringify({ message }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
      // Update the output div with the user input


  //     if (response.ok) {
  //       // RSVP success
  //       alert('RSVP submitted successfully!');
  //       // Redirect to a thank you page or any other appropriate page
  //       // document.location.replace('/profile');
  //     } else {
  //       // RSVP failure
  //       alert('Failed to submit RSVP');
  //     }
  //   });
  // });