import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showFulfilledMessage(delay) {
  iziToast.success({
    title: 'Success',
    message: `✅ Fulfilled promise in ${delay}ms`,
  });
}

function showRejectedMessage(delay) {
  iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${delay}ms`,
  });
}

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = this.elements['delay'].value;
  const state = this.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      showFulfilledMessage(delay);
    })
    .catch(delay => {
      showRejectedMessage(delay);
    });
});
