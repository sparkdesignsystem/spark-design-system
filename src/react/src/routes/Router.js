import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SparkButtonDocs from './SparkButtonDocs/SparkButtonDocs';
import SparkDictionaryDocs from './SparkDictionaryDocs/SparkDictionaryDocs';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SparkButtonDocs} />
          <Route exact path="/dictionary" component={SparkDictionaryDocs} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
