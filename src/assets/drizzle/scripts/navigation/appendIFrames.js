/* global document */
const appendIFrames = (frames) => {
  Array.from(frames).forEach((container) => {
    const src = container.getAttribute('data-drizzle-append-iframe');
    const iframe = document.createElement('iframe');
    iframe.addEventListener('load', () => {
      container.classList.add('is-loaded');
    });
    iframe.setAttribute('src', src);
    container.appendChild(iframe);
  });
};

export { appendIFrames as default };
