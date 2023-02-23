function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = 0;

buttonStart.addEventListener('click', () => {
        buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
                body.style.backgroundColor = getRandomHexColor();
      }, 1000);
});

buttonStop.addEventListener('click', () => {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);

});

