import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import FormExamples from './FormExamples/FormExamples';
import SprkTextInputDocs from './SprkTextInputDocs/SprkTextInputDocs';
import SprkSelectionInputDocs from './SprkSelectionInput/SprkSelectionInput';

const SprkInputDocs = () => (
  <CentralColumnLayout>
    <ul className="drizzle-b-List drizzle-b-List--bare sprk-u-mbl">
      <li><Link className="drizzle-b-Link" to="/input/text-input">Text Input</Link></li>
      <li><Link className="drizzle-b-Link" to="/input/selection-input">Selection Input</Link></li>
      <li><Link className="drizzle-b-Link" to="/input/forms">Form Examples</Link></li>
    </ul>
    <Route path="/input/forms" component={FormExamples} />
    <Route path="/input/text-input" component={SprkTextInputDocs} />
    <Route path="/input/selection-input" component={SprkSelectionInputDocs} />
  </CentralColumnLayout>
);

export default SprkInputDocs;
