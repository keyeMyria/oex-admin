/*
 * @flow
 */
import React from 'react';

import { Route, IndexRoute } from 'react-router';

import * as RoutingURL from './core/RoutingURL/RoutingURL';
import RootContainer from './container/RootContainer';
import AppContainer from './container/AppContainer';
import LoginContainer from './container/LoginContainer';
// import ShareContainer from './container/ShareContainer';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';
import AdminList from './components/AdminList';
import AdminInfo from './components/AdminInfo';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ExperienceList from './components/ExperienceList';
import ExperienceListDoctor from './components/ExperienceListDoctor';
import ExperienceListMedicine from './components/ExperienceListMedicine';
import Experience from './components/Experience';
import ExperienceDoctor from './components/ExperienceDoctor';
import ExperienceMedicine from './components/ExperienceMedicine';
import PeopleList from './components/PeopleList';
import People from './components/People';
import Config from './components/Config';
import UserAgreement from './components/UserAgreement';
import AdviceList from './components/AdviceList';
import ExperienceMobile from './components/ExperienceMobile';
import Contact from './components/Contact';

const routes = (
  <Route path={RoutingURL.PrefixURL()} component={RootContainer} >
    <Route path={RoutingURL.App()} component={AppContainer} >
      <IndexRoute component={UserList} />
      <Route path={RoutingURL.UserList()} component={UserList} />
      <Route path={RoutingURL.UserInfo('(:id)')} component={UserInfo} />
      <Route path={RoutingURL.AdminList()} component={AdminList} />
      <Route path={RoutingURL.AdminInfo('(:id)')} component={AdminInfo} />
      {/* <Route path={RoutingURL.ArticleList()} component={ArticleList} />
      <Route path={RoutingURL.Article('(:id)')} component={Article} />
      <Route path={RoutingURL.ExperienceList()} component={ExperienceList} />
      <Route path={RoutingURL.ExperienceListDoctor()} component={ExperienceListDoctor} />
      <Route path={RoutingURL.ExperienceListMedicine()} component={ExperienceListMedicine} />
      <Route path={RoutingURL.Experience('(:id)')} component={Experience} />
      <Route path={RoutingURL.ExperienceDoctor('(:id)')} component={ExperienceDoctor} />
      <Route path={RoutingURL.ExperienceMedicine('(:id)')} component={ExperienceMedicine} />
      <Route path={RoutingURL.PeopleList()} component={PeopleList} />
      <Route path={RoutingURL.People('(:id)')} component={People} />
      <Route path={RoutingURL.AdviceList()} component={AdviceList} />
      <Route path="/config" component={Config} /> */}
    </Route>
    <Route path={RoutingURL.Login()} component={LoginContainer} />
    {/* <Route path="/user-agreement" component={UserAgreement} /> */}
    {/* <Route path="experience-mobile" component={ExperienceMobile} /> */}
    {/* <Route path="/contact" component={Contact} /> */}
    {/* <Route path={RoutingURL.Share()} component={ShareContainer} /> */}
  </Route>
);

export default routes;
