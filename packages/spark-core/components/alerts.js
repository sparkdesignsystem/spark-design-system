import getElements from '../utilities/getElements';

const dismissAlert = (alert) => {
  alert.classList.add('sprk-u-Display--none');
};

// Add event listeners to alerts
const alerts = () => {
  getElements('[data-sprk-alert="container"]', (alert) => {
    // Search inside alert for dismiss button
    const dismissElement = alert.querySelector('[data-sprk-alert="dismiss"]');
    // Add click listener to dismiss button if it exists
    if (dismissElement !== null) {
      dismissElement.addEventListener('click', () => {
        dismissAlert(alert);
      });
    }
  });
};

export { alerts, dismissAlert };
