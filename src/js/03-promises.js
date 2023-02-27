import Notiflix from 'notiflix';

const createPromise = (position, delayStep) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  if (shouldResolve) {
    resolve("success value");
  } else {
    reject("error");
  }
})
};

const form = document.querySelector('form');

const handleSubmit= (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  
    let i = 0;
    let position = parseInt(amount.value);
    let delayStep = parseInt(step.value);
    let firstDelay = parseInt(delay.value);
        
         
    timerIdMain = setInterval(() => {
      createPromise(position, firstDelay)
            .then(user => Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${firstDelay}ms`))
            .catch(error => Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${firstDelay}ms`));
            i += 1;
            timerIdSecond = setInterval(() => {
              if (i < position){
                i += 1;
                createPromise(position, delayStep)
                .then(user => Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${firstDelay}ms`))
                .catch(error => Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${firstDelay}ms`));
                firstDelay += delayStep;}             
             else{
                clearInterval(timerIdSecond);}
                  }, delayStep);
            clearInterval(timerIdMain);
    }, firstDelay);
               
 };
form.addEventListener('submit', handleSubmit);

