import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkModalModule } from './sprk-modal.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkModalComponent } from './sprk-modal.component';

export default {
  title: 'Components|Modals',
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
};

const modules = {
  imports: [
    SprkModalModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkModalComponent,
    }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="choiceVisible"
      title="Are you sure?"
      (hide)="toggleChoiceModal($event)"
      modalType="choice"
      idString="modal-choice-1"
      (confirmClick)="confirmClick($event)"
    >
      This is some modal content.
    </sprk-modal>
  `,
  props: {
    choiceVisible: true,
    toggleChoiceModal: (event: any) => {
      event.preventDefault();
      alert('cancel click');
    },
    confirmClick: (event: any) => {
      event.preventDefault();
      alert('confirm');
    },
  },
});

defaultStory.story = {
  name: 'Default',
};

export const info = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="infoVisible"
      title="For Your Information"
      (hide)="toggleInfoModal($event)"
      modalType="info"
      idString="modal-info-1"
    >
      This is some content that is in a Modal.
      It explains what the Modal is for.
      There will also be a way to close the modal.
    </sprk-modal>
  `,
  props: {
    infoVisible: true,
    toggleInfoModal: (event: any) => {
      event.preventDefault();
      alert('cancel click');
    },
  },
});

export const wait = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Please wait..."
      modalType="wait"
      idString="modal-wait-1"
    >
      This type of modal can't be closed by the
      user.
    </sprk-modal>
  `,
  props: {
    waitVisible: true,
  },
});
