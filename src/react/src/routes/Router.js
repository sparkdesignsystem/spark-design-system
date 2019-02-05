import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkDividerDocs from './SprkDividerDocs/SprkDividerDocs';
import NotFound from './NotFound/NotFound';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkMastheadDefaultDocs from './SprkMastheadDefaultDocs/SprkMastheadDefaultDocs';
import SprkMastheadExtendedDocs from './SprkMastheadExtendedDocs/SprkMastheadExtendedDocs';
import SprkDropdownDocs from './SprkDropdownDocs/SprkDropdownDocs';
import SprkDictionaryDocs from './SprkDictionaryDocs/SprkDictionaryDocs';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/alert" component={SprkAlertDocs} />
      <Route exact path="/button" component={SprkButtonDocs} />
      <Route exact path="/dropdown" component={SprkDropdownDocs} />
      <Route exact path="/link" component={SprkLinkDocs} />
      <Route exact path="/dividers" component={SprkDividerDocs} />
      <Route exact path="/masthead-default" component={SprkMastheadDefaultDocs} />
      <Route exact path="/masthead-extended" component={SprkMastheadExtendedDocs} />
      <Route exact path="/dictionary" component={SprkDictionaryDocs} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
