import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(e) {
  let delay = Number(form.delay.value);

  createPromise(delay)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: delay,
        position: 'topRight',
        icon: '',
        close: false,
        progressBar: false,
        messageColor: 'white',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        timeout: delay,
        position: 'topRight',
        icon: '',
        close: false,
        progressBar: false,
        messageColor: 'white',
      });
    });
  e.preventDefault();
}

function createPromise(delay) {
  const isFulfilledState = form.state.value === 'fulfilled';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilledState) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
