
import * as AdviceListAction from '../actions/AdviceListAction';
import Immutable from 'immutable';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  adviceList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  searchData: Immutable.Map({
    id: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
    entity: 'advice',
  }),
});

const getAdviceListHandler = new ActionHandler.handleAction(AdviceListAction.GET_ADVICE_LIST)
  .success((state, action) => {
    return state.setIn(['adviceList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['adviceList', 'total'], Immutable.fromJS(action.data.totalRow))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNumber))
      .set('isFetching', false).set('errMsg', '');
  });

export default ActionHandler.handleActions(
  [
    getAdviceListHandler,
  ],
  defaultState,
  /^AdviceListReducer\//
);
