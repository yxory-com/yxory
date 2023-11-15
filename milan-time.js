  // Set initial placeholder value for the city to 00:00:00 AM
  function setInitialPlaceholder() {
    var timeElement = document.getElementById('time-milan');
    if (timeElement) {
      timeElement.innerHTML = '00:00:00 AM';
    }
  }

  function updateTimes() {
    var timeElement = document.getElementById('time-milan');
    if (timeElement) {
      // Get the current time in the specified timezone
      var time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Rome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      // Update the div with the current time
      timeElement.innerHTML = time;
    }
  }

  // Update the time every second
  setInterval(updateTimes, 1000);

  // Set the initial placeholder and update the times with a delay after the page loads
  document.addEventListener('DOMContentLoaded', function() {
    setInitialPlaceholder();
    // Delay the updateTimes function by 0.5 seconds to allow the placeholder to show up
    setTimeout(updateTimes, 500);
  });
