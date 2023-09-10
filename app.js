document.addEventListener('DOMContentLoaded', function() {
  // Function to get current day of the week
  function getCurrentDay() {
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const today = new Date();
      return day[today.getDay()];
  }

   // Function to get current UTC time in milliseconds
   function getCurrentUTCTime() {
    return new Date().getTime();
}

// Update elements with data-testid attributes
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDay();
document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});