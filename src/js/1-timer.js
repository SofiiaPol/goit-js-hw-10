import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let timerMiliseconds;
let setIntervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate < currentDate) {
      iziToast.error({
        title: 'Error',
        message: `Please choose a data in the future`,
      });
    } else {
      timerMiliseconds = userSelectedDate - currentDate;
      startButton.removeAttribute('disabled');
    }
  },
};

const onStartButtonClick = () => {
  startButton.setAttribute('disabled', '');
  datetimePicker.setAttribute('disabled', '');
  setIntervalId = setInterval(updateTimer, 1000);
};

const fp = flatpickr(datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerView({ days, hours, minutes, seconds }) {
  dataDays.innerHTML = String(days).padStart(2, '0');
  dataHours.innerHTML = String(hours).padStart(2, '0');
  dataMinutes.innerHTML = String(minutes).padStart(2, '0');
  dataSeconds.innerHTML = String(seconds).padStart(2, '0');
}

function updateTimer() {
  let timerObject = convertMs(timerMiliseconds);
  updateTimerView(timerObject);
  timerMiliseconds = timerMiliseconds - 1000;
  if (timerMiliseconds <= 0) {
    clearInterval(setIntervalId);
    datetimePicker.removeAttribute('disabled');
  }
}

startButton.addEventListener('click', onStartButtonClick);
