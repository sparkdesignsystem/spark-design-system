import getElements from '../utilities/getElements';

const dismissAlert = (alert) => {
  alert.classList.add('sprk-c-Alert--is-hidden');
};

const bindUIEvents = (element) => {
  // Search inside alert for dismiss button
  const dismissElement = element.querySelector('[data-sprk-alert="dismiss"]');
  // Add click listener to dismiss button if it exists
  if (dismissElement !== null) {
    dismissElement.addEventListener('click', () => {
      dismissAlert(element);
    });
  }
};

const alerts = () => {
  getElements('[data-sprk-alert="container"]', bindUIEvents);
};

export { alerts, dismissAlert, bindUIEvents };
