document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkomt dat het formulier wordt verzonden

    var date = document.getElementById('date').value;
    var confirmationMessage = document.getElementById('confirmation-message');

    if (date) {
        confirmationMessage.textContent = 'Je hebt succesvol een datum geboekt: ' + date;
    } else {
        confirmationMessage.textContent = 'Selecteer een datum voordat je boekt.';
    }
});