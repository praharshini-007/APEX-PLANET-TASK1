function showDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Format date & time
    document.getElementById('dateTime').innerText = "Current Date & Time: " + dateTimeString;
  }
  