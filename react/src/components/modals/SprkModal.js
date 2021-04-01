/* eslint-disable prefer-template */
/* global window */
/* global document */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/uniqueId';
import noop from 'lodash/noop';
import SprkSpinner from '../spinners/SprkSpinner';
import CloseButton from './CloseButton';
import ModalFooter from './ModalFooter';
import Mask from './Mask';

class SprkModal extends Component {
  static isTabPressed(e) {
    return e.key === 'Tab' || e.keyCode === 9;
  }

  static isEscPressed(e) {
    return e.key === 'Escape' || e.keyCode === 27;
  }

  static isActiveElement(elementRef) {
    return document.activeElement === elementRef;
  }

  constructor(props) {
    super(props);

    this.aria_id = uniqueId();
    this.closeButtonRef = React.createRef();
    this.footerRef = React.createRef();
    this.containerRef = React.createRef();

    this.cancel = this.cancel.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.setInternalFocus = this.setInternalFocus.bind(this);
    this.setExternalFocus = this.setExternalFocus.bind(this);
    this.handleKeyEvents = this.handleKeyEvents.bind(this);
  }

  componentDidMount() {
    // set focus in case the modal is open by default
    this.setInternalFocus();
  }

  shouldComponentUpdate(nextProps) {
    const { isVisible } = this.props;

    // if it's closed now and going to be open
    if (!isVisible && nextProps.isVisible) {
      // save the element with focus so we can apply it later.
      this.focusTarget = document.activeElement;
    }

    return true;
  }

  componentDidUpdate(prevProps) {
    const { isVisible } = this.props;

    // if it was closed and now its open, set the internal focus
    if (isVisible && !prevProps.isVisible) {
      this.setInternalFocus();
    }

    // if it was open and now its closed, set the external focus
    if (prevProps.isVisible && !isVisible) {
      this.setExternalFocus();
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  static getFocusableEls(containerRef) {
    const focusEls = containerRef.querySelectorAll(
      'a[href], area[href],' +
        'input:not([disabled]),' +
        'select:not([disabled]),' +
        'textarea:not([disabled]),' +
        'button:not([disabled]), [tabindex="0"]',
    );
    return focusEls;
  }

  setExternalFocus() {
    const { isVisible, shouldReturnFocusOnClose } = this.props;

    // only if the modal is closed
    if (!isVisible) {
      // only if the flag says to do it
      if (shouldReturnFocusOnClose && this.focusTarget) {
        this.focusTarget.focus();
      }
    }
  }

  setInternalFocus() {
    const { isVisible, variant } = this.props;

    if (isVisible) {
      switch (variant) {
        case 'choice':
          // focus the confirm button
          if (this.footerRef.current) {
            this.footerRef.current.focusConfirm();
          }
          break;
        case 'info':
          // focus the close button
          if (this.closeButtonRef.current) {
            this.closeButtonRef.current.focusButton();
          }
          break;
        case 'wait':
          // focus the whole modal
          if (this.containerRef.current) {
            this.containerRef.current.focus();
          }
          break;
        default:
          // focus the whole modal
          if (this.containerRef.current) {
            this.containerRef.current.focus();
          }
          break;
      }
    }
  }

  cancel() {
    const { variant, cancelClick } = this.props;

    if (variant !== 'wait') {
      cancelClick();
    }

    this.removeListeners();
  }

  handleKeyEvents(e) {
    const { isVisible, variant } = this.props;

    // Return if there is no open modal
    if (!isVisible) {
      return;
    }

    const focusableEls = this.getFocusableEls(this.containerRef.current);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    if (this.isEscPressed(e)) {
      // Cannot use Esc to close Wait Modals
      if (variant !== 'wait') {
        e.preventDefault();
        this.cancel();
      }
    }
    if (this.isTabPressed(e)) {
      if (variant === 'wait') {
        e.preventDefault();
        // Wait modals only ever focus the modal container
        this.containerRef.current.focus();
      } else if (e.shiftKey) {
        if (this.isActiveElement(firstFocusableEl)) {
          // underflow to the end
          e.preventDefault();
          lastFocusableEl.focus();
        }
      } else if (this.isActiveElement(lastFocusableEl)) {
        // overflow to the beginning
        e.preventDefault();
        firstFocusableEl.focus();
      }
    }
  }

  attachListeners() {
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
      closeIcon,
      closeAnalyticsString,
      maskAnalyticsString,
      confirmAnalyticsString,
      cancelAnalyticsString,
      ...rest
    } = this.props;

    if (!isVisible) {
      return null;
    }

    const isWait = variant === 'wait';
    const isChoice = variant === 'choice';

    this.attachListeners();

    return (
      <>
        <div
          className={classnames(
            'sprk-c-Modal',
            { 'sprk-c-Modal--wait': isWait },
            additionalClasses,
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={'modalHeading_' + this.aria_id}
          aria-describedby={'modalContent_' + this.aria_id}
          data-analytics={analyticsString}
          data-id={idString}
          ref={this.containerRef}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex="0"
          {...rest}
        >
          <div className="sprk-o-Stack sprk-o-Stack--large">
            <header className="sprk-o-Stack__item sprk-c-Modal__header">
              <h2
                className="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
                id={'modalHeading_' + this.aria_id}
              >
                {title}
              </h2>

              {!isWait && (
                <CloseButton
                  clickAction={this.cancel}
                  ref={this.closeButtonRef}
                  iconName={closeIcon}
                  analyticsString={closeAnalyticsString}
                />
              )}
            </header>

            <div
              className={classnames('sprk-o-Stack__item sprk-c-Modal__body', {
                'sprk-o-Stack sprk-o-Stack--medium': isWait,
              })}
              id={'modalContent_' + this.aria_id}
            >
              {isWait && (
                <SprkSpinner
                  size="large"
                  additionalClasses="
                      sprk-o-Stack__item
                      sprk-c-Spinner--primary
                    "
                />
              )}
              <div className="sprk-b-TypeBodyTwo sprk-c-Modal__content">
                {children}
              </div>
            </div>

            {isChoice && (
              <ModalFooter
                confirmClick={confirmClick}
                cancelClick={this.cancel}
                confirmText={confirmText}
                cancelText={cancelText}
                ref={this.footerRef}
                confirmAnalyticsString={confirmAnalyticsString}
                cancelAnalyticsString={cancelAnalyticsString}
              />
            )}
          </div>
        </div>

        <Mask clicked={this.cancel} analyticsString={maskAnalyticsString} />
      </>
    );
  }
}

SprkModal.propTypes = {
  /** Content to render inside modal. */
  children: PropTypes.node,
  /** The modal heading text. */
  title: PropTypes.string,
  /** Determines style of modal to render. */
  variant: PropTypes.oneOf(['wait', 'info', 'choice']),
  /** Text to render on the confirmation button. */
  confirmText: PropTypes.string,
  /** Text to render on the cancel button. */
  cancelText: PropTypes.string,
  /** Sets whether the modal is displayed. */
  isVisible: PropTypes.bool,
  /** The function that runs when confirm choice is clicked. */
  confirmClick: PropTypes.func,
  /**
   * The function that runs when the cancel choice is clicked.
   * Cancel choices include clicking the x icon, Mask, or pressing Esc.
   */
  cancelClick: PropTypes.func,
  /**
   * 	If true, focus will automatically be returned
   * to the last-focused item when the modal is closed.
   */
  shouldReturnFocusOnClose: PropTypes.bool,
  /**
   * A space-separated string of classes to add
   * to the outermost container of the component.
   */
  additionalClasses: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  analyticsString: PropTypes.string,
  /**
   * Assigned to the `data-id` attribute serving
   * as a unique selector for automated tools.
   */
  idString: PropTypes.string,
  // TODO: Actually give this a default
  /**
   * The icon name to use for the close button
   * in the modal. Defaults to "close".
   */
  closeIcon: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  closeAnalyticsString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute serving
   * as a unique selector for outside libraries to capture data.
   */
  maskAnalyticsString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  confirmAnalyticsString: PropTypes.string,
  /**
   * Assigned to the `data-analytics` attribute
   * serving as a unique selector for outside libraries to capture data.
   */
  cancelAnalyticsString: PropTypes.string,
};

SprkModal.defaultProps = {
  variant: 'choice',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  /** Sets whether the modal is displayed. */
  isVisible: false,
  confirmClick: noop,
  cancelClick: noop,
  shouldReturnFocusOnClose: true,
};

export default SprkModal;
