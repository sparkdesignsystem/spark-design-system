import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkPromoDocs from './SprkPromoDocs/SprkPromoDocs';
import SprkDividerDocs from './SprkDividerDocs/SprkDividerDocs';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkHighlightBoardDocs from './SprkHighlightBoardDocs/SprkHighlightBoardDocs';
import SprkDictionaryDocs from './SprkDictionaryDocs/SprkDictionaryDocs';
import SprkTabsDocs from './SprkTabsDocs/SprkTabsDocs';
import NotFound from './NotFound/NotFound';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/buttons" component={SprkButtonDocs} />
          <Route exact path="/links" component={SprkLinkDocs} />
          <Route exact path="/promos" component={SprkPromoDocs} />
          <Route exact path="/dividers" component={SprkDividerDocs} />
          <Route exact path="/alerts" component={SprkAlertDocs} />
          <Route exact path="/highlightboard" component={SprkHighlightBoardDocs} />
          <Route exact path="/dictionary" component={SprkDictionaryDocs} />
          <Route exact path="/tabs" component={SprkTabsDocs} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
