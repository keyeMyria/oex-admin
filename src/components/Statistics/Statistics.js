
import React, { PropTypes } from 'react';
import StatisticsHeader from './StatisticsHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as StatisticsAction from '../../actions/StatisticsAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired,
    statistics: PropTypes.instanceOf(Immutable.Map).isRequired,
    getValue: PropTypes.func,
    dispatch: PropTypes.func,
    changeAction: PropTypes.func,
  };
  componentWillMount() {
    this.props.dispatch(StatisticsAction.getStatisticsInfo({id: this.props.params.id}));
  }

  clearArticle() {
    this.props.changeAction('UserReducer/userInfo',
    Immutable.fromJS({
      id: '',
      userName: '',
      passWord: '',
      var1: '',
    }));
  }
  componentWillUnmount() {
    this.clearArticle();
  }
  render() {
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <StatisticsHeader/>
        </View>
        <View className={ Contentstyles.contentContainer }>

        </View>
      </View>
    );
  }
}

export default Form.create()(Statistics);
