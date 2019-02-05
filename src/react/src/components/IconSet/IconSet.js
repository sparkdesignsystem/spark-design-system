import React from 'react';

class IconSet extends React.Component {
  constructor(){
    super();
    this.state = {icons: ''};
  }

  componentDidMount() {
    fetch('sprk-icons.svg')
      .then((r) => r.text())
      .then(text  => {
        this.setState({icons: text})
      });
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.icons}} />
    );
  }
}

export default IconSet;