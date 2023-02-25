import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

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
  const timer = document.querySelector('.timer');
  timer.style.display = "flex";
  timer.style.marginTop = "20px";
  timer.style.gap = "10px";
  timer.style.fontSize = "40px";
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
            Notiflix.Report.failure('Please choose a date in the future');
        }
        else{
            startButton.disabled = null;
                    };                                               
      },
          };
const fp = flatpickr("#datetime-picker", options);
startButton.addEventListener('click', () => {
    dateInput.disabled = "true";
    startButton.disabled = "true";
        timerId = setInterval(() => {
    let timeLeft = new Date(fp.selectedDates).getTime() - new Date().getTime();
    timeLeft = convertMs(timeLeft);
    
    if(timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds < 10){
        Notiflix.Loading.arrows();                     
    };
    
    if(timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0){
        clearInterval(timerId);
            Notiflix.Notify.success('Your time was up!');
            Notiflix.Loading.remove();
    }

    fp.destroy(); 

    const addLeadingZero = value => {
        if (value < 10 && value > 0){
            return "0" + value;
        }
        else if(value === 0){
            return "00";
        }
        else{
            return value;
        }
    } 
    spanDays.textContent = addLeadingZero(timeLeft.days);
    spanHours.textContent = addLeadingZero(timeLeft.hours);
    spanMinutes.textContent = addLeadingZero(timeLeft.minutes);
    spanSeconds.textContent = addLeadingZero(timeLeft.seconds);
             }, 1000);    
});


