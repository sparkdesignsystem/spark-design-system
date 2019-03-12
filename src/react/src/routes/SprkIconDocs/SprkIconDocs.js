/* global window document */
import React from 'react';
import { SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkIconDocs extends React.Component {
  constructor() {
    super();
    this.state = {
      symbols: [],
    };
    this.buildSymbolIds = this.buildSymbolIds.bind(this);
  }

  componentDidMount() {
    window.addEventListener('icons-loaded', this.buildSymbolIds);
  }

  componentWillUnmount() {
    window.removeEventListener('icons-loaded', this.buildSymbolIds);
  }

  buildSymbolIds() {
    const symbols = document.querySelectorAll('symbol');
    const ids = [];
    symbols.forEach(item => {
      ids.push(item.getAttribute('id'));
    });
    this.setState({
      symbols: ids,
    });
    return ids;
  }

  render() {
    const { symbols } = this.state;
    return (
      <CentralColumnLayout>
        {symbols.map(symbol => (
          <ExampleContainer heading={symbol} key={symbol}>
            <SprkIcon iconName={symbol} />
            <SprkIcon iconName={symbol} additionalClasses="sprk-c-Icon--l" />
          </ExampleContainer>
        ))}
      </CentralColumnLayout>
    );
  }
}

export default SprkIconDocs;
