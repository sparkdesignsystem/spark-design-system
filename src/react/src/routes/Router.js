import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import NotFound from './NotFound/NotFound';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkDictionaryDocs from './SprkDictionaryDocs/SprkDictionaryDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SprkButtonDocs} />
          <Route exact path="/links" component={SprkLinkDocs} />
          <Route exact path="/alerts" component={SprkAlertDocs} />
          <Route exact path="/dictionary" component={SprkDictionaryDocs} />
          <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
