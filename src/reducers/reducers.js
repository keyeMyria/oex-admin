import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 引入各reducers
import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import ArticleReducer from './ArticleReducer';
import ShareReducer from './ShareReducer';
import ExperienceReducer from './ExperienceReducer';
import PeopleReducer from './PeopleReducer';
import ConfigReducer from './ConfigReducer';
import AdviceListReducer from './AdviceListReducer';


// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  LoginReducer,
  UserReducer,
  ArticleReducer,
  ShareReducer,
  ExperienceReducer,
  PeopleReducer,
  ConfigReducer,
  AdviceListReducer,
});

export default appReducers;
