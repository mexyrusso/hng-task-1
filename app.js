document.addEventListener('DOMContentLoaded', function() {
  // Function to get current day of the week
  function getCurrentDay() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date();
      return days(today.getDay());
  }

   // Function to get current UTC time in milliseconds
   function getCurrentUTCTime() {
    return new Date().getTime();
}

// Update elements with data-testid attributes
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDay();
document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});