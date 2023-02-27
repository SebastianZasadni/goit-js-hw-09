function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const colorName = document.querySelector('.color-name');
colorName.style.color = "black";
let timerId = 0;

buttonStart.addEventListener('click', () => {
        buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
                body.style.backgroundColor = getRandomHexColor();
                colorName.innerHTML = body.style.backgroundColor;
      }, 1000);
});

buttonStop.addEventListener('click', () => {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);

});

