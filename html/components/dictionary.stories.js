import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dictionary',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('dictionary')}
    `,
    docs: { iframeHeight: 500 },
  },
};

export const defaultStory = () =>
  `
  <div
    class="sprk-c-Dictionary sprk-b-TypeBodyTwo"
    data-id="dictionary-1"
  >
  <dl class="sprk-c-Dictionary__keyvaluepairs">
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Email Address</dt>
      <dd class="
        sprk-c-Dictionary__value">sparkdesignsystem@rocketmortgage.com</dd>
    </div>
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Mailing Address</dt>
      <dd class="
        sprk-c-Dictionary__value">123 Main Street, Detroit, MI, 48216</dd>
    </div>
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Home Phone</dt>
      <dd class="sprk-c-Dictionary__value">(123) 456-7890</dd>
    </div>
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Cell Phone</dt>
      <dd class="sprk-c-Dictionary__value">(098) 765-4321</dd>
    </div>
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Work Phone</dt>
      <dd class="sprk-c-Dictionary__value">(555) 555-5555</dd>
    </div>
    <div class="sprk-c-Dictionary__keyvaluepair">
      <dt class="
        sprk-c-Dictionary__key
        sprk-b-Label
        sprk-b-Label--no-input">Work Extension</dt>
      <dd class="sprk-c-Dictionary__value">55555</dd>
    </div>
  </dl>
</div>`;

defaultStory.story = {
  name: 'Default',
};

export const striped = () => `
    <div
     class="sprk-c-Dictionary sprk-c-Dictionary--striped"
     data-id="dictionary-2"
    >
      <dl class="sprk-c-Dictionary__keyvaluepairs">
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Email Address</dt>
          <dd class="
            sprk-c-Dictionary__value">sparkdesignsystem@rocketmortgage.com</dd>
        </div>
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Mailing Address</dt>
          <dd class="
            sprk-c-Dictionary__value">123 Main Street, Detroit, MI, 48216</dd>
        </div>
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Home Phone</dt>
          <dd class="sprk-c-Dictionary__value">(123) 456-7890</dd>
        </div>
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Cell Phone</dt>
          <dd class="sprk-c-Dictionary__value">(098) 765-4321</dd>
        </div>
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Work Phone</dt>
          <dd class="sprk-c-Dictionary__value">(555) 555-5555</dd>
        </div>
        <div class="sprk-c-Dictionary__keyvaluepair">
          <dt class="
            sprk-c-Dictionary__key
            sprk-b-Label
            sprk-b-Label--no-input">Work Extension</dt>
          <dd class="sprk-c-Dictionary__value">55555</dd>
        </div>
      </dl>
    </div>
  `;

striped.story = {
  name: 'Striped',
};
