import { SprkButtonModule } from './sprk-button.module';

export default { title: 'Components|Button' };

const modules = {
  imports: [SprkButtonModule],
};

export const primary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      data-id="button-1"
      sprkButton
    >
      Button
    </button>
  `,
});

export const spinning = () => ({
  moduleMetadata: modules,
  template: `
    <button
      data-id="button-1"
      sprkButton
      [isSpinning]="true"
    >
      Button
    </button>
  `,
});
