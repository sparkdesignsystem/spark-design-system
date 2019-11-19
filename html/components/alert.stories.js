import { useEffect } from '@storybook/client-api';
import { alerts } from './alerts';

export default {
  title: 'Components/Alert',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/alert)
    `,
  },
};

export const info = () => {
  useEffect(() => {
    alerts();
  }, []);

  return `
    <div
      class="sprk-c-Alert sprk-c-Alert--info"
      role="alert" data-sprk-alert="container"
      data-id="alert-info-1" data-analytics="object.action.event"
    >
      <div class="sprk-c-Alert__content">
        <svg
          class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color"
          viewBox="0 0 64 64" aria-hidden="true" >
          <use xlink:href="#bell"></use>
        </svg>
        <p class="sprk-c-Alert__text"> This is an informational alert.</p>
      </div>
      <button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" > <use xlink:href="#close"></use> </svg>
      </button>
    </div>
  `;
};

export const success = () => {
  useEffect(() => {
    alerts();
  });

  return `
    <div
      class="sprk-c-Alert sprk-c-Alert--success"
      role="alert"
      data-sprk-alert="container"
      data-id="alert-success-1"
      data-analytics="object.action.event"
    >
      <div class="sprk-c-Alert__content">
        <svg class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 512 512" aria-hidden="true" >
          <use xlink:href="#check-mark"></use>
        </svg>
        <p class="sprk-c-Alert__text">
          This is a success alert.
        </p>
      </div>
      <button
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" >
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </div>
  `
}

export const fail = () => {
  useEffect(() => {
    alerts();
  });

  return `
    <div
      class="sprk-c-Alert sprk-c-Alert--fail"
      role="alert"
      data-sprk-alert="container"
      data-id="alert-fail-1"
      data-analytics="object.action.event"
    >
      <div class="sprk-c-Alert__content">
        <svg class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color" viewBox="0 0 576 512" aria-hidden="true" >
          <use xlink:href="#exclamation"></use>
        </svg>
        <p class="sprk-c-Alert__text"> This is a failure alert.</p>
      </div>
      <button
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" >
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </div>
  `
}

export const noDismissButton = () => {
  useEffect(() => {
    alerts();
  });

  return `
    <div
      class="sprk-c-Alert sprk-c-Alert--success"
      role="alert"
      data-sprk-alert="container"
      data-id="alert-no-dismiss"
      data-analytics="alert-no-dismiss-analytics"
    >
      <div class="sprk-c-Alert__content">
        <svg
          class="sprk-c-Alert__icon sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <use xlink:href="#check-mark"></use>
        </svg>
        <p class="sprk-c-Alert__text">
          This success alert has no dismiss button.
        </p>
      </div>
    </div>
  `
}
