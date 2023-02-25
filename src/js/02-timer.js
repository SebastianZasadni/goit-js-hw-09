const flatpickr = require("flatpickr");;
import flatpickr from "flatpickr";

const convertMs = ms => {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  const spanDays = document.querySelector('[data-days]');
  const spanHours = document.querySelector('[data-hours]');
  const spanMinutes = document.querySelector('[data-minutes]');
  const spanSeconds = document.querySelector('[data-seconds]');
  const startButton = document.querySelector('button');
  const dateInput = document.querySelector('#datetime-picker');
  startButton.disabled = "true";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
      onClose(selectedDates) {
        const selectedDate = new Date(selectedDates);

        if (selectedDate.getTime() < options.defaultDate.getTime() ){
            startButton.disabled = "true";
            alert('Please choose a date in the future');
        }
        else{
            startButton.disabled = null;
                    };                                               
      },
      onOpen(selectedDates){
                    console.log('otwarte');
        },
    };

const fp = flatpickr("#datetime-picker", options);

startButton.addEventListener('click', () => {
    dateInput.disabled = "true";
    startButton.disabled = "true";
    timerId = setInterval(() => {
    let timeLeft = new Date(fp.selectedDates).getTime() - new Date().getTime();
    timeLeft = convertMs(timeLeft);
    spanDays.textContent = timeLeft.days;
    spanHours.textContent = timeLeft.hours;
    spanMinutes.textContent = timeLeft.minutes;
    spanSeconds.textContent = timeLeft.seconds;
             }, 1000);
    fp.destroy();
})


