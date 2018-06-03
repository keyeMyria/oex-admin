import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import LoginReducer from './LoginReducer';
import AdminReducer from './AdminReducer';



import UserReducer from './UserReducer';
import ArticleReducer from './ArticleReducer';
import ShareReducer from './ShareReducer';
import ExperienceReducer from './ExperienceReducer';
import ConfigReducer from './ConfigReducer';
import AdviceListReducer from './AdviceListReducer';
import BonusReducer from './BonusReducer';
import ServiceReducer from './ServiceReducer';
import TradeReducer from './TradeReducer';
import OperateReducer from './OperateReducer';
import RewardReducer from './RewardReducer';
import StatisticsReducer from './StatisticsReducer';
import CurrencyReducer from './CurrencyReducer';
import FlowReducer from './FlowReducer';
import UserAssetsReducer from './UserAssetsReducer';



// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  LoginReducer,
  AdminReducer,
  UserReducer,
  ArticleReducer,
  ShareReducer,
  ExperienceReducer,
  ConfigReducer,
  AdviceListReducer,
  BonusReducer,
  ServiceReducer,
  TradeReducer,
  OperateReducer,
  RewardReducer,
  StatisticsReducer,
  CurrencyReducer,
  FlowReducer,
  UserAssetsReducer,
});

export default appReducers;
