import Notiflix from 'notiflix';

function createPromise(position, delayStep) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayStep}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayStep}ms`);
  }
};

const form = document.querySelector('form');

const handleSubmit= (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
    let i = 0;
    let position = parseInt(delay.value);
    let delayStep = parseInt(step.value);
        timerId = setInterval(() => {
        if (i < amount.value){
        i += 1;
        createPromise(position, delayStep);
        position += delayStep;         
        }
        else{
        clearInterval(timerId);
        }
        }, step.value);
 
    
 };
form.addEventListener('submit', handleSubmit);


  
