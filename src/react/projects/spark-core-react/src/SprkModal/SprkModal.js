/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId, noop } from 'lodash';
import SprkSpinner from '../SprkSpinner/SprkSpinner';

import CloseButton from './CloseButton';
import ModalFooter from './ModalFooter';
import Mask from './Mask';

class SprkModal extends Component {
  constructor(props) {
    super(props);
    // Methods that need to access the class definition via `this`
    this.cancel = this.cancel.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('keydown', this.closeOnEsc);
    // window.addEventListener('focusin', this.closeOnClickOutside);
    // window.addEventListener('click', this.closeOnClickOutside);
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  closeOnEsc(e){
    if (e.key == 'Escape' || e.keyCode == 27) {
      this.cancel('escape');
    }
  }

  removeListeners() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  attachListeners() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  cancel(source) {
    console.log(`canceling ${this.props.modalType} modal (comp id: ${this.props.componentID}) because of '${source}'`);
    if (this.props.modalType != 'wait') {
      this.props.cancelClick();
    }
    this.removeListeners();
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      children,
      title,
      modalType,
      confirmText,
      cancelText,
      idString,
      isVisible,
      confirmClick,
      cancelClick,
      componentID,
      heading_id,
      content_id,
      ...rest
    } = this.props;

    
    var isWait = modalType == 'wait';
    // var isInfo = modalType == 'info';
    var isChoice = modalType != 'wait' && modalType != 'info';
      
    if (!isVisible) { return(null); }

    this.attachListeners();
   
    return (
      <div>
        <div
          className={
            classnames(
              'sprk-c-Modal',
              isWait ? 'sprk-c-Modal--wait' : '',
              additionalClasses,
            )}
          role={'dialog'}
          data-id={idString}
          data-analytics={analyticsString}
          tabIndex={'1'}
          aria-labelledby={heading_id}
          aria-modal='true'
          aria-describedby={content_id}
          data-id={idString}
          {...rest}
        >
          <div className="sprk-o-Stack sprk-o-Stack--large">
            <header className="sprk-o-Stack__item sprk-c-Modal__header">
              <h2 className="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
                   id="modalChoiceHeading">
                {title}
              </h2>
              
              {!isWait && <CloseButton clickAction={this.cancel.bind(this, 'closeButton')} />}
            </header>

            <div>
              <div className="sprk-o-Stack__item sprk-c-Modal__body">
                {isWait && <SprkSpinner />}
                <div className="sprk-b-TypeBodyTwo" id="modalChoiceContent">
                  {children}
                </div>
              </div>

              {isChoice && (
                <ModalFooter 
                confirmClick={confirmClick}
                cancelClick={this.cancel.bind(this, 'cancelAction')}
                confirmText={confirmText}
                cancelText={cancelText}
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Make sure to include the mask if the modal is active */}
        <Mask clicked={this.cancel.bind(this, 'mask')}></Mask>
      </div>
    );
  }
};



SprkModal.propTypes = {
  // classes to add to the class of the rendered element
  additionalClasses: PropTypes.string,
  // mapped to data-analytics
  analyticsString: PropTypes.string,
  // incoming children
  children: PropTypes.node,
  // mapped to data-id for testing purposes
  idString: PropTypes.string,
  // decides which button variant to render

  title: PropTypes.string,
  modalType: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  idString: PropTypes.string,
  isVisible: PropTypes.bool,

  confirmClick: PropTypes.func,
  cancelClick: PropTypes.func,
  resolve: PropTypes.func,

  componentID:PropTypes.string,
  heading_id: PropTypes.string,
  content_id: PropTypes.string
};

SprkModal.defaultProps = {
  additionalClasses: '',
  analyticsString: '',
  children: [],
  idString: '',
  title: '',
  modalType: 'default',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  isVisible: false,

  confirmClick: noop,
  cancelClick: noop,

  componentID: uniqueId(),
  // heading_id: `modalHeading__${this.componentID}`,
  // content_id: `modalContent__${this.componentID}`
};

export default SprkModal;

/* Vanilla Template

<button class="sprk-c-Button" data-sprk-modal-trigger="exampleChoiceModal" type="button">
  Open Choice Modal
</button>

<div class="sprk-c-Modal sprk-u-Display--none" role="dialog" tabindex="-1" aria-labelledby="modalChoiceHeading" aria-modal="true" aria-describedby="modalChoiceContent" data-sprk-modal="exampleChoiceModal" data-id="modal-choice-1">
  <div class="sprk-o-Stack sprk-o-Stack--large">
    <header class="sprk-o-Stack__item sprk-c-Modal__header">
      <h2 class="sprk-c-Modal__heading sprk-b-TypeDisplayFour" id="modalChoiceHeading">
        Are you sure?
      </h2>

      <button class="sprk-c-Modal__icon" data-sprk-modal-cancel="exampleChoiceModal" type="button" aria-label="Close Modal">
        <svg class="sprk-c-Icon sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <use xlink:href="#close"></use>
        </svg>
      </button>
    </header>

    <div class="sprk-o-Stack__item sprk-c-Modal__body">
      <p class="sprk-b-TypeBodyTwo" id="modalChoiceContent">
        This is some content that is in a modal. It explains what the modal is for. There will also be a way to close the modal.
      </p>
    </div>

    <footer class="sprk-o-Stack__item">
      <button class="sprk-c-Button sprk-u-mrm">
        Confirm
      </button>

      <button class="sprk-c-Button sprk-c-Button--tertiary" data-sprk-modal-cancel="exampleChoiceModal">
        Cancel
      </button>
    </footer>
  </div>
</div>

<div data-sprk-modal-mask="true" class="sprk-c-ModalMask sprk-u-Display--none" tabindex="-1"></div>

*/

/* Angular template
<div
*ngIf="isVisible"
[ngClass]="{
  'sprk-c-Modal': true,
  'sprk-c-Modal--wait': modalType === 'wait'
}"
role="dialog"
tabindex="1"
[attr.aria-labelledby]="heading_id"
aria-modal="true"
[attr.aria-describedby]="content_id"
[attr.data-id]="idString"
>
<div class="sprk-o-Stack sprk-o-Stack--large">
  <header class="sprk-o-Stack__item sprk-c-Modal__header">
    <h2
      class="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
      [id]="heading_id"
    >
      {{ title }}
    </h2>

    <button
      *ngIf="modalType != 'wait'"
      class="sprk-c-Modal__icon"
      type="button"
      aria-label="Close Modal"
      (click)="closeModal($event)"
    >
      <sprk-icon
        iconType="close"
        additionalClasses="sprk-c-Icon--stroke-current-color"
      ></sprk-icon>
    </button>
  </header>

  <div
    class="sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium"
  >
    <div
      *ngIf="modalType == 'wait'"
      class="sprk-o-Stack__item sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--large sprk-c-Spinner--dark"
    ></div>
    <ng-content></ng-content>
  </div>

  <footer
    *ngIf="modalType === 'choice'"
    class="sprk-o-Stack__item sprk-c-Modal__footer"
  >
    <button
      class="sprk-c-Button sprk-u-mrm"
      [attr.data-analytics]="confirmAnalyticsString"
      (click)="emitConfirmClick($event)"
    >
      {{ confirmText }}
    </button>

    <button
      class="sprk-c-Button sprk-c-Button--tertiary"
      [attr.data-analytics]="cancelAnalyticsString"
      (click)="emitCancelClick($event)"
    >
      {{ cancelText }}
    </button>
  </footer>
</div>
</div>

<div
*ngIf="isVisible"
class="sprk-c-ModalMask"
tabindex="-1"
(click)="closeModal($event)"
></div>
*/