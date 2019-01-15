import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SparkButtonDocs from './SparkButtonDocs/SparkButtonDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SparkButtonDocs} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
