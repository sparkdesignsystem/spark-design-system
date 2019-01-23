import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkPromoDocs from './SprkPromoDocs/SprkPromoDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SprkButtonDocs} />
          <Route exact path="/links" component={SprkLinkDocs} />
          <Route exact path="/promos" component={SprkPromoDocs} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
