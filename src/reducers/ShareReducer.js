
import * as ShareAction from '../actions/ShareAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  articleInfo: Immutable.Map({
    id: '',
    column: '',
    author: '王小花',
    avator: 'http://img2.imgtn.bdimg.com/it/u=1931101239,1911099953&fm=27&gp=0.jpg',
    title: '长租公寓第三方服务平台该怎么做？ 平安好房用金融+科技赋能',
    updateTime: '',
    informationTime: '2017-11-19 23:00:00',
    tags: '',
    headImg: '',
    subTitle: '平安好房将采取S2B2C模式，通过金融+科技（系统）+信息平台的打造，在平台汇聚长租品牌公寓，为租房人群提供服务。',
    contentOss: '',
    content: Immutable.List([
      Immutable.Map({
        type: 1,
        content: '11月16日，由房东东与平安好房联合主办的2017中国品牌长租公寓CEO年会在上海举行。平安好房总经理钟惠馨在大会主题发言中指出，平安好房将采取S2B2C模式，通过金融+科技（系统）+信息平台的打造，在平台汇聚长租品牌公寓，为租房人群提供服务。',
      }),
      Immutable.Map({
        type: 2,
        content: '打造租房严选平台',
      }),
      Immutable.Map({
        type: 3,
        content: 'http://img.sc115.com/uploads/sc/jpgs/05/xpic6813_sc115.com.jpg',
      }),
    ])
  }),
});

const getShareArticleInfoHandler = new ActionHandler.handleAction(ShareAction.GET_SHARE_ARTICLEINFO)
    .success((state, action) => {
      return state.set('userInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

export default ActionHandler.handleActions(
  [
    getShareArticleInfoHandler,
  ],
  defaultState,
  /^ShareReducer\//
);
