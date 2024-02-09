import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDatePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let timeDifference = 0;
let timerId = null;
let formatDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    currentDateDifference(selectedDates[0]);
  },
};

btnStart.setAttribute('disabled', true);

flatpickr(inputDatePicker, options);

btnStart.addEventListener('click', onBtnStart);

window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && timerId) {
    clearInterval(timerId);

    inputDatePicker.removeAttribute('disabled');
    btnStart.setAttribute('disabled', true);

    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';
    days.textContent = '00';
  }
});

function onBtnStart() {
  timerId = setInterval(startTimer, 1000);
}

function currentDateDifference(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates < currentDate) {
    btnStart.setAttribute('disabled', true);
    iziToast.error({
      message: `Please choose a date in the future`,
      position: 'topRight',
      progressBar: false,
      messageColor: 'white',
    });
    return;
  }

  timeDifference = selectedDates.getTime() - currentDate;
  formatDate = convertMs(timeDifference);

  renderDate(formatDate);
  btnStart.removeAttribute('disabled');
}

function startTimer() {
  btnStart.setAttribute('disabled', true);
  inputDatePicker.setAttribute('disabled', true);

  timeDifference -= 1000;

  if (seconds.textContent <= 0 && minutes.textContent <= 0) {
    iziToast.success({
      message: `Time end`,
      position: 'topRight',
      close: false,
      progressBar: false,
      messageColor: 'white',
    });
    clearInterval(timerId);
  } else {
    formatDate = convertMs(timeDifference);
    renderDate(formatDate);
  }
}

// Rendering date
function renderDate(formatDate) {
  seconds.textContent = formatDate.seconds;
  minutes.textContent = formatDate.minutes;
  hours.textContent = formatDate.hours;
  days.textContent = formatDate.days;
}

function convertMs(ms) {
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
