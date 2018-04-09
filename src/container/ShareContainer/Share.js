
import React, { PropTypes } from 'react';
import DownLoadTop from './DownLoadTop';
import ShareHeader from './ShareHeader';
import ShareContent from './ShareContent';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as styles from './style.css';
import * as ArticleAction from '../../actions/ArticleAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { dispatch } from '../../index';
import moment from 'moment';
import 'moment/locale/zh-cn';
const logo = require('../../assets/images/logo.png');

moment.locale('zh-cn');
@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired,
    articleInfo: PropTypes.instanceOf(Immutable.Map).isRequired,
    getValue: PropTypes.func,
    dispatch: PropTypes.func,
    changeAction: PropTypes.func,
    form: PropTypes.any,
  };
  componentWillMount() {
    // dispatch(ArticleAction.getShareArticleInfo({informationId: this.props.params.id}));
  }
  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {
  }

  render() {
    const informationTime = moment(this.props.articleInfo.get('informationTime')).fromNow().replace(/\s+/g,"");
    return (
      <View>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <DownLoadTop />
        <View className={styles.articlePageWrapper}>
          <ShareHeader
            avator={this.props.articleInfo.get('avator')}
            author={this.props.articleInfo.get('author')}
            informationTime={informationTime}
          />
          <ShareContent
            subTitle={this.props.articleInfo.get('subTitle')}
            content={this.props.articleInfo.get('content')}
          />
        </View>
        {/* <View className={styles.articlePageWrapper}>

        </View> */}
      </View>
    );
  }
}

export default Share;
