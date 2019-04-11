/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash';
import SprkSpinner from '../SprkSpinner/SprkSpinner';

import CloseButton from './CloseButton';
import ModalFooter from './ModalFooter';
import Mask from './Mask';

class SprkModal extends Component {
  constructor(props) {
    super(props);

    this.closeButtonRef = React.createRef();
    this.footerRef = React.createRef();
    this.containerRef = React.createRef();

    this.cancel = this.cancel.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.setInternalFocus = this.setInternalFocus.bind(this);
    this.setExternalFocus = this.setExternalFocus.bind(this);
    this.handleKeyEvents = this.handleKeyEvents.bind(this);
    this.getFocusableEls = this.getFocusableEls.bind(this);
    this.isTabPressed = this.isTabPressed.bind(this);
    this.isEscPressed = this.isEscPressed.bind(this);
    this.focusFirstEl = this.focusFirstEl.bind(this);
    this.isActiveElement = this.isActiveElement.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    // if it's closed now and going to be open
    if (!this.props.isVisible && nextProps.isVisible) {
      // save the element with focus so we can apply it later.
      this.focusTarget = document.activeElement;
    }

    return true;
  }

  componentDidMount() {
    // set focus in case the modal is open by default
    this.setInternalFocus();
  }

  componentDidUpdate(prevProps) {
    // if it was closed and now its open, set the internal focus
    if (this.props.isVisible && !prevProps.isVisible)
      this.setInternalFocus();

    // if it was open and now its closed, set the external focus
    if (prevProps.isVisible && !this.props.isVisible)
      this.setExternalFocus();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  cancel() {
    if (this.props.variant != 'wait') {
      this.props.cancelClick();
    }
    this.removeListeners();
  }

  setExternalFocus() {
    // only if the modal is closed
    if (!this.props.isVisible){
      // if the flag says to do it
      if (this.props.shouldReturnFocusOnClose){
        if (this.props.onCloseFocusTarget){
          this.props.onCloseFocusTarget.focus();
        } else {
          this.focusTarget.focus();
        }
      }
    }
  }

  setInternalFocus() {
    if (this.props.isVisible){
      switch (this.props.variant){
        case "choice":
          // focus the confirm button
          this.footerRef.current.focusConfirm();
          break;
        case "info":
          // focus the close button
          this.closeButtonRef.current.focusButton();
          break;
        case "wait":
          // focus the whole modal
          this.containerRef.current.focus();
          break;
        default:
          // focus the whole modal
          this.containerRef.current.focus();
          break;
      }
    }
  }

  // Get all focusable elements in a container
  getFocusableEls (container) {
    const focusEls = container.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    return focusEls;
  };

  isTabPressed (e) { return e.key === 'Tab' || e.keyCode === 9; }
  isEscPressed (e) { return e.key === 'Escape' || e.keyCode === 27; }

  // Focus first element in a container
  focusFirstEl (container) {
    const focusEls = getFocusableEls(container);
    if (focusEls.length > 0) {
      focusEls[0].focus();
    }
  };

  // Check if passed in element is the currently active element
  isActiveElement ( element ) { return document.activeElement === element; }

  handleKeyEvents (e) {
    // Return if there is no open modal
    if (!this.props.isVisible) { return; }

    const focusableEls = this.getFocusableEls(this.containerRef.current);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    switch (true) {
      case this.isEscPressed(e):
        if (!this.props.variant == 'wait') {
          e.preventDefault();
          this.cancel();
          console.log("closing because of escape key")
        }
        break;
      case this.isTabPressed(e) && e.shiftKey:
        if (this.props.variant=='wait') {
          e.preventDefault();
          this.containerRef.current.focus();
          console.log("focusing modal from tab key + shift")
        } else if (this.isActiveElement(firstFocusableEl)) {
          e.preventDefault();
          lastFocusableEl.focus();
          console.log("on first el, so focusing last el from tab key + shift")
        } else {
          console.log("unaltered tab backward");
        }
        break;
      case this.isTabPressed(e):
        if (this.props.variant=='wait') {
          e.preventDefault();
          this.containerRef.current.focus();
          console.log("focusing modal from tab key");
        } else if (this.isActiveElement(lastFocusableEl)) {
          e.preventDefault();
          firstFocusableEl.focus();
          console.log("on last el, so focusing first el from tab key")
        } else {
          console.log("unaltered tab forward")
        }
        break;
      default:
        break;
    }
  };

  attachListeners() {
    console.log("attaching listener");
    window.addEventListener('keydown', this.handleKeyEvents);
  }

  removeListeners() {
    window.removeEventListener('keydown', this.handleKeyEvents);
  }

  render() {
    const {
      additionalClasses,
      analyticsString,
      children,
      title,
      variant,
      confirmText,
      cancelText,
      idString,
      isVisible,
      confirmClick,
      cancelClick,
      shouldReturnFocusOnClose,
      onCloseFocusTarget,
      ...rest
    } = this.props;

    var isWait = variant == 'wait';
    var isChoice = variant == 'choice';

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
          tabIndex={'0'}
          aria-modal='true'
          aria-labelledby="modalHeading"
          aria-describedby="modalContent"
          data-analytics={analyticsString}
          data-id={idString}
          ref={this.containerRef}
          {...rest}
        >
          <div className="sprk-o-Stack sprk-o-Stack--large">
            <header className="sprk-o-Stack__item sprk-c-Modal__header">
              <h2 className="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
                   id="modalHeading">
                {title}
              </h2>

              {!isWait && <CloseButton clickAction={this.cancel.bind(this)} ref={this.closeButtonRef} />}
            </header>

            <div>
              <div className="sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium" id="modalContent">
                {isWait &&
                    <SprkSpinner size='large' lightness='dark' additionalClasses='sprk-o-Stack__item'/>
                }
                <div className="sprk-b-TypeBodyTwo">
                  {children}
                </div>
              </div>

              {isChoice && (
                <ModalFooter
                confirmClick={confirmClick}
                cancelClick={this.cancel.bind(this)}
                confirmText={confirmText}
                cancelText={cancelText}
                ref={this.footerRef}
                />
              )}
            </div>
          </div>
        </div>

        <Mask clicked={this.cancel.bind(this)}></Mask>
      </div>
    );
  }
};



SprkModal.propTypes = {
  // incoming children, body of the modal
  children: PropTypes.node,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['wait', 'info', 'choice']),
  // text of confirm CTA in choice modal
  confirmText: PropTypes.string,
  // text of cancel CTA in choice modal
  cancelText: PropTypes.string,
  // component renders as null if false
  isVisible: PropTypes.bool,
  // event for the confirm CTA in choice modal
  confirmClick: PropTypes.func,
  // called by internal cancel function. Triggered by the cancel CTA in choice modal, clicking the X, clicking the Mask, or pressing Escape
  cancelClick: PropTypes.func,
  // whether or not to automatically set focus on the last element that had focus
  shouldReturnFocusOnClose: PropTypes.bool,
  // target for focus on close
  onCloseFocusTarget: PropTypes.node,
  // classes to add to the class of the rendered element
  additionalClasses: PropTypes.string,
  // mapped to data-analytics
  analyticsString: PropTypes.string,
  // mapped to data-id for testing purposes
  idString: PropTypes.string,
};

SprkModal.defaultProps = {
  additionalClasses: null,
  analyticsString: null,
  children: [],
  idString: null,
  title: '',
  variant: 'choice',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  // Modals are typically hidden until invoked
  isVisible: false,
  confirmClick: noop,
  cancelClick: noop,
  shouldReturnFocusOnClose: true,
  onCloseFocusTarget: null,
};

export default SprkModal;
