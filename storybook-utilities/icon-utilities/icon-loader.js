const request = new XMLHttpRequest();
request.open('GET', 'https://spark-assets.netlify.app/spark-icons.svg');
request.send();
// eslint-disable-next-line func-names
request.onload = function () {
  document.querySelector('#sprk-icons').innerHTML = this.response;
  let event;
  if (typeof Event === 'function') {
    event = new Event('sprk-icons-loaded');
  } else {
    event = document.createEvent('Event');
    event.initEvent('sprk-icons-loaded', true, true);
  }

  window.dispatchEvent(event);
};
