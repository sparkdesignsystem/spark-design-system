import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import SprkButtonDocs from './SprkButtonDocs/SprkButtonDocs';
import SprkLinkDocs from './SprkLinkDocs/SprkLinkDocs';
import SprkListDocs from './SprkListDocs/SprkListDocs';
import SprkPromoDocs from './SprkPromoDocs/SprkPromoDocs';
import SprkDividerDocs from './SprkDividerDocs/SprkDividerDocs';
import SprkTableDocs from './SprkTableDocs/SprkTableDocs';
import SprkAlertDocs from './SprkAlertDocs/SprkAlertDocs';
import SprkMastheadDefaultDocs from './SprkMastheadDefaultDocs/SprkMastheadDefaultDocs';
import SprkMastheadExtendedDocs from './SprkMastheadExtendedDocs/SprkMastheadExtendedDocs';
import SprkDropdownDocs from './SprkDropdownDocs/SprkDropdownDocs';
import SprkHighlightBoardDocs from './SprkHighlightBoardDocs/SprkHighlightBoardDocs';
import SprkDictionaryDocs from './SprkDictionaryDocs/SprkDictionaryDocs';
import SprkPaginationDocs from './SprkPaginationDocs/SprkPaginationDocs';
import SprkTabsDocs from './SprkTabsDocs/SprkTabsDocs';
import SprkIconDocs from './SprkIconDocs/SprkIconDocs';
import SprkModalDocs from './SprkModalDocs/SprkModalDocs';
import SprkInputDocs from './SprkInputDocs/SprkInputDocs';
import SprkFooterDocs from './SprkFooterDocs/SprkFooterDocs';
import SprkToggleDocs from './SprkToggleDocs/SprkToggleDocs';
import SprkAccordionDocs from './SprkAccordionDocs/SprkAccordionDocs';
import SprkStackDocs from './SprkStackDocs/SprkStackDocs';
import SprkAwardDocs from './SprkAwardDocs/SprkAwardDocs';
import SprkCardDocs from './SprkCardDocs/SprkCardDocs';
import SprkStepperDocs from './SprkStepperDocs/SprkStepperDocs';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/alert" component={SprkAlertDocs} />
      <Route exact path="/button" component={SprkButtonDocs} />
      <Route exact path="/card" component={SprkCardDocs} />
      <Route exact path="/dictionary" component={SprkDictionaryDocs} />
      <Route exact path="/dividers" component={SprkDividerDocs} />
      <Route exact path="/dropdown" component={SprkDropdownDocs} />
      <Route exact path="/highlightboard" component={SprkHighlightBoardDocs} />
      <Route exact path="/icon" component={SprkIconDocs} />
      <Route path="/input" component={SprkInputDocs} />
      <Route exact path="/link" component={SprkLinkDocs} />
      <Route exact path="/table" component={SprkTableDocs} />
      <Route exact path="/masthead-default" component={SprkMastheadDefaultDocs} />
      <Route exact path="/masthead-extended" component={SprkMastheadExtendedDocs} />
      <Route exact path="/pagination" component={SprkPaginationDocs} />
      <Route exact path="/promos" component={SprkPromoDocs} />
      <Route exact path="/tabs" component={SprkTabsDocs} />
      <Route exact path="/modal" component={SprkModalDocs} />
      <Route exact path="/footer" component={SprkFooterDocs} />
      <Route exact path="/stack" component={SprkStackDocs} />
      <Route exact path="/toggle" component={SprkToggleDocs} />
      <Route exact path="/list" component={SprkListDocs} />
      <Route exact path="/accordion" component={SprkAccordionDocs} />
      <Route exact path="/award" component={SprkAwardDocs} />
      <Route exact path="/stepper" component={SprkStepperDocs} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
