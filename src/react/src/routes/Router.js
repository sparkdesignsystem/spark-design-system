import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import NotFound from './NotFound/NotFound';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkMastheadDefaultDocs from './SprkMastheadDefaultDocs/SprkMastheadDefaultDocs';
import SprkMastheadExtendedDocs from './SprkMastheadExtendedDocs/SprkMastheadExtendedDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/alerts" component={SprkAlertDocs} />
          <Route exact path="/buttons" component={SprkButtonDocs} />
          <Route exact path="/links" component={SprkLinkDocs} />
          <Route exact path="/masthead-default" component={SprkMastheadDefaultDocs} />
          <Route exact path="/masthead-extended" component={SprkMastheadExtendedDocs} />
          <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
