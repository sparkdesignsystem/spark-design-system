import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import SprkErrorContainer from '../SprkErrorContainer/SprkErrorContainer';

class SprkSelectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
    };
  }

  render() {
    const { additionalClasses, groupLabel } = this.props;
    const { id } = this.state;
    return (
      <div className={classNames('sprk-b-InputContainer', additionalClasses)}>
        <fieldset className="sprk-b-Fieldset">
          <legend className="sprk-b-Legend">
            <p className="sprk-b-Label">{ groupLabel }</p>
          </legend>
          <div className="sprk-b-SelectionContainer">
            <input
              id="checkbox-normal-1"
              data-id="checkbox-normal-1"
              type="checkbox"
              aria-describedby="checkbox-normal--error-container"
            />
            <label htmlFor="checkbox-normal-1" className="sprk-b-Label sprk-b-Label--inline">Checkbox Item 1</label>
          </div>
          <div className="sprk-b-SelectionContainer">
            <input
              id="checkbox-normal-2"
              data-id="checkbox-normal-2"
              type="checkbox"
              aria-describedby="checkbox-normal--error-container"
            />
            <label htmlFor="checkbox-normal-2" className="sprk-b-Label sprk-b-Label--inline">Checkbox Item 2</label>
          </div>
          <div className="sprk-b-SelectionContainer">
            <input
              id="checkbox-normal-3"
              data-id="checkbox-normal-3"
              type="checkbox"
              aria-describedby="checkbox-normal--error-container"
            />
            <label htmlFor="checkbox-normal-3" className="sprk-b-Label sprk-b-Label--inline">Checkbox Item 3</label>
          </div>
        </fieldset>
        <SprkErrorContainer id={`errorcontainer-${id}`} />
      </div>
    );
  }
}

SprkSelectionContainer.propTypes = {
  additionalClasses: PropTypes.string,
  groupLabel: PropTypes.string,
};

SprkSelectionContainer.defaultProps = {
  additionalClasses: '',
  groupLabel: '',
};

export default SprkSelectionContainer;
