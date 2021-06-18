import React from 'react';
import SprkCheckboxGroup from './SprkCheckbox/SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckboxItem from './SprkCheckbox/SprkCheckboxItem/SprkCheckboxItem';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkInput from './SprkInput/SprkInput';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';

class SprkCheckboxRecreate extends React.Component {
  constructor(props) {
    super(props);
    // this.checkboxClick = this.checkboxClick.bind(this);
    this.checkboxRef = React.createRef();
    this.inputRef = React.createRef();
    this.state = {
      error: false,
      checkboxRefCheck: [],
    };
  }

  render() {
    const { error, checkboxRefCheck } = this.state;
    const checkboxClick = () => {
      // console.log('error', error);
      // console.log('checkbox Ref state', checkboxRefCheck);
        console.log('inputRef', this.inputRef);
        console.log('checkboxRef', this.checkboxRef);
      // if (checkboxRefCheck !== this.checkboxRef.current.id) {
      //   console.log('REF IS NOT PERSISTING, BUT NEEDS TO');
      //   console.log('checkboxRef', this.checkboxRef.current.id);
      // }

      this.setState((prevState) => ({
        error: !prevState.error,
        checkboxRefCheck: this.checkboxRef.current.id,
      }));
    };
    return (
      <>
        <ul>
          <li>
            When state changes, it causes a re-render, and the ref changes.
          </li>
          <li>
            Even after removing `SprkCheckboxGroup`, problem still exists.
          </li>
        </ul>
        <SprkCheckboxItem
          forwardedRef={this.checkboxRef}
          onClick={checkboxClick}
        >
          Checkbox Item 1
        </SprkCheckboxItem>
        <SprkInputContainer>
          <SprkInput id="1" type="text" forwardedRef={this.inputRef} />
        </SprkInputContainer>
      </>
    );
  }
}

export default SprkCheckboxRecreate;
