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

    this.cancel = this.cancel.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
  }

  closeOnEsc(e){
    if (e.key == 'Escape' || e.keyCode == 27) {
      this.cancel();
    }
  }

  attachListeners() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  removeListeners() {
    window.removeEventListener('keydown', this.closeOnEsc);
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
      componentID,
      heading_id,
      content_id,
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
          tabIndex={'1'}
          aria-labelledby={heading_id}
          aria-modal='true'
          aria-describedby={content_id}
          data-analytics={analyticsString}
          data-id={idString}
          {...rest}
        >
          <div className="sprk-o-Stack sprk-o-Stack--large">
            <header className="sprk-o-Stack__item sprk-c-Modal__header">
              <h2 className="sprk-c-Modal__heading sprk-b-TypeDisplayFour"
                   id={heading_id}>
                {title}
              </h2>

              {!isWait && <CloseButton clickAction={this.cancel.bind(this)} />}
            </header>

            <div>
              <div className="sprk-o-Stack__item sprk-c-Modal__body sprk-o-Stack sprk-o-Stack--medium">
                {isWait &&
                    <SprkSpinner size='large' lightness='dark' additionalClasses='sprk-o-Stack__item'/>
                }
                <div className="sprk-b-TypeBodyTwo" id={content_id}>
                  {children}
                </div>
              </div>

              {isChoice && (
                <ModalFooter
                confirmClick={confirmClick}
                cancelClick={this.cancel.bind(this)}
                confirmText={confirmText}
                cancelText={cancelText}
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
  // h2
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
  // classes to add to the class of the rendered element
  additionalClasses: PropTypes.string,
  // mapped to data-analytics
  analyticsString: PropTypes.string,
  // mapped to data-id for testing purposes
  idString: PropTypes.string,

  // applied to the aria-labelledby attr on the modal. Needs to also be the ID of the thing it labels.
  heading_id: PropTypes.string,
  // applied to the aria-describedby attr on the modal. Needs to also be the ID of the thing it describes.
  content_id: PropTypes.string,

  // not currently used. Needed for aria stuff?
  componentID: PropTypes.string,
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

  componentID: uniqueId(),
  // heading_id: `modalHeading__${this.componentID}`,
  // content_id: `modalContent__${this.componentID}`
};

export default SprkModal;
