import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SparkButtonDocs from './SparkButtonDocs/SparkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkDividerDocs from './SprkDividerDocs/SprkDividerDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SparkButtonDocs} />
          <Route exact path="/links" component={SprkLinkDocs} />
          <Route exact path="/dividers" component={SprkDividerDocs} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
