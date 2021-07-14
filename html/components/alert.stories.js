import { useEffect } from '@storybook/client-api';
import { alerts } from './alerts';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Alert',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    docs: { iframeHeight: 120 },
    info: `
${markdownDocumentationLinkBuilder('alert')}
- \`role=”alert”\` is required so that
assistive technologies can inform
the user that their attention is needed.
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
      role="alert"
      data-sprk-alert="container"
      data-id="alert-info-1"
      data-analytics="object.action.event"
    >
      <div class="sprk-c-Alert__content">
        <svg
          class="
            sprk-c-Alert__icon
            sprk-c-Icon sprk-c-Icon--xl
            sprk-c-Icon--filled sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 64 64" aria-hidden="true" >
          <use xlink:href="#bell-filled"></use>
        </svg>
        <p class="sprk-c-Alert__text"> This is important information.</p>
      </div>
      <button class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true">
            <use xlink:href="#close"></use>
          </svg>
      </button>
    </div>
  `;
};

info.story = {
  parameters: {
    jest: ['alerts'],
  },
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
        <svg
          class="
            sprk-c-Alert__icon
            sprk-c-Icon
            sprk-c-Icon--filled
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#check-mark-filled"></use>
        </svg>
        <p class="sprk-c-Alert__text">
          This is a success message.
        </p>
      </div>
      <button
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </div>
  `;
};

success.story = {
  parameters: {
    jest: ['alerts'],
  },
};

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
        <svg
          class="
            sprk-c-Alert__icon
            sprk-c-Icon
            sprk-c-Icon--filled
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#exclamation-filled"></use>
        </svg>
        <p class="sprk-c-Alert__text">
          This is a failure message to alert that
          something was not successful.
        </p>
      </div>
      <button
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        data-sprk-alert="dismiss"
      >
        <svg
          class="
            sprk-c-Icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </div>
  `;
};

fail.story = {
  parameters: {
    jest: ['alerts'],
  },
};

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
          class="
            sprk-c-Alert__icon
            sprk-c-Icon
            sprk-c-Icon--filled
            sprk-c-Icon--filled-current-color
          "
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use xlink:href="#check-mark-filled"></use>
        </svg>
        <p class="sprk-c-Alert__text">
          This Success Alert has no dismiss button.
        </p>
      </div>
    </div>
  `;
};

noDismissButton.story = {
  parameters: {
    jest: ['alerts'],
  },
};
