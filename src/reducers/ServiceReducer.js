import * as ServiceAction from '../actions/ServiceAction';
import * as ExperienceAction from '../actions/ExperienceAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  workOrders: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  workOrder: Immutable.Map({
  }),
  searchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getWorkOrdersHandler = new ActionHandler.handleAction(ServiceAction.GET_WORK_ORDERS)
  .success((state, action) => {
    return state.setIn(['workOrders', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['workOrders', 'total'], Immutable.fromJS(action.data.totalRow))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNumber))
      .set('isFetching', false).set('errMsg', '');
  });



const getWorkOrderHandler = new ActionHandler.handleAction(ServiceAction.GET_WORK_ORDER_INFO)
    .success((state, action) => {
      return state.set('workOrder', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

// const updateArticleHandler = new ActionHandler.handleAction(ArticleAction.UPDATE_ARTICLEINFO);
// const deleteArticleHandler = new ActionHandler.handleAction(ArticleAction.DELETE_ARTICLEINFO);

export default ActionHandler.handleActions(
  [
    getWorkOrdersHandler,
    getWorkOrderHandler,
  ],
  defaultState,
  /^ServiceReducer\//
);
