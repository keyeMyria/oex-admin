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
import AuthList from './components/AuthList';
import AuthInfo from './components/AuthInfo';
import CoinFlow from './components/CoinFlow';
import UserFlow from './components/UserFlow';
import UserAssets from './components/UserAssets';
import BonusList from './components/BonusList';
import Bonus from './components/Bonus';
import AreaList from './components/AreaList';
import AreaInfo from './components/AreaInfo';
import PairList from './components/PairList';
import PairInfo from './components/PairInfo';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import CurrencyInfoList from './components/CurrencyInfoList';
import MSCurrencyList from './components/MSCurrencyList';
import CurrencyConfigList from './components/CurrencyConfigList';
import Experience from './components/Experience';
import ExperienceDoctor from './components/ExperienceDoctor';
import ExperienceMedicine from './components/ExperienceMedicine';
import WorkOrder from './components/WorkOrder';
import WorkOrders from './components/WorkOrders';
import NoticeInfo from './components/NoticeInfo';
import NoticeList from './components/NoticeList';
import NoticeTypeInfo from './components/NoticeTypeInfo';
import NoticeTypeList from './components/NoticeTypeList';
import RewardList from './components/RewardList';
import Statistics from './components/Statistics';
import Config from './components/Config';
import UserAgreement from './components/UserAgreement';
import AddressList from './components/AddressList';
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
      <Route path={RoutingURL.AuthList()} component={AuthList} />
      <Route path={RoutingURL.AuthInfo('(:id)')} component={AuthInfo} />
      <Route path={RoutingURL.CoinFlow()} component={CoinFlow} />
      <Route path={RoutingURL.BonusList()} component={BonusList} />
      <Route path={RoutingURL.UserFlow()} component={UserFlow} />
      <Route path={RoutingURL.UserAssets()} component={UserAssets} />
      <Route path={RoutingURL.Bonus('(:id)')} component={Bonus} />
      <Route path={RoutingURL.AreaList()} component={AreaList} />
      <Route path={RoutingURL.AreaInfo('(:id)')} component={AreaInfo} />
      <Route path={RoutingURL.PairList()} component={PairList} />
      <Route path={RoutingURL.PairInfo('(:id)')} component={PairInfo} />
      <Route path={RoutingURL.CoinList()} component={CurrencyInfoList} />
      <Route path={RoutingURL.MSCurrencyList()} component={MSCurrencyList} />
      <Route path={RoutingURL.CurrencyConfigList()} component={CurrencyConfigList} />
      <Route path={RoutingURL.Experience('(:id)')} component={Experience} />
      <Route path={RoutingURL.ExperienceDoctor('(:id)')} component={ExperienceDoctor} />
      <Route path={RoutingURL.ExperienceMedicine('(:id)')} component={ExperienceMedicine} />
      <Route path={RoutingURL.AddressList()} component={AddressList} />
      <Route path={RoutingURL.WorkOrders()} component={WorkOrders} />
      <Route path={RoutingURL.WorkOrder('(:id)')} component={WorkOrder} />
      <Route path={RoutingURL.NoticeList()} component={NoticeList} />
      <Route path={RoutingURL.NoticeInfo('(:id)')} component={NoticeInfo} />
      <Route path={RoutingURL.NoticeTypeList()} component={NoticeTypeList} />
      <Route path={RoutingURL.NoticeTypeInfo('(:id)')} component={NoticeTypeInfo} />
      <Route path={RoutingURL.RewardList()} component={RewardList} />
      <Route path={RoutingURL.Statistics()} component={Statistics} />
      <Route path="/config" component={Config} />
    </Route>
    <Route path={RoutingURL.Login()} component={LoginContainer} />
    {/* <Route path="/user-agreement" component={UserAgreement} /> */}
    {/* <Route path="experience-mobile" component={ExperienceMobile} /> */}
    {/* <Route path="/contact" component={Contact} /> */}
    {/* <Route path={RoutingURL.Share()} component={ShareContainer} /> */}
  </Route>
);

export default routes;
