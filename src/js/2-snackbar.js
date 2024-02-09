import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const btn = document.querySelector('button');
btn.addEventListener('click', onSubmitBtn);

function onSubmitBtn(e) {
  e.preventDefault();

  let delay = Number(form.delay.value);

  createPromise(delay)
    .then(({ delay }) => {
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
    .catch(({ delay }) => {
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
}

function createPromise(delay) {
  const obj = { delay };
  const onResolve = form.state.value === 'fulfilled';

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
}
