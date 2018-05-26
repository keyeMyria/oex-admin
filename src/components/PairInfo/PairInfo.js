
import React, { PropTypes } from 'react';
import PairInfoHeader from './PairInfoHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as TradeAction from '../../actions/TradeAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class PairInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired,
    pairInfo: PropTypes.instanceOf(Immutable.Map).isRequired,
    courseList: PropTypes.array.isRequired,
    getValue: PropTypes.func,
    dispatch: PropTypes.func,
    changeAction: PropTypes.func,
    form: PropTypes.any,
  };
  componentWillMount() {
    if(this.props.params.id){
      // this.props.dispatch(TradeAction.getPairInfo({id: this.props.params.id}));
    } else {
      this.clearArticle();
    }
  }
  componentWillReceiveProps(nextProps) {}
  /**
   * 回退
   * @param dispatch
   * @private
   */
  _goBackAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.PairList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.PairInfo(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    console.log(this.props.pairInfo.toJS());
    this.props.dispatch(TradeAction.updatePair(this.props.pairInfo.toJS()));
  }
  clearArticle() {
    this.props.changeAction('TradeReducer/pairInfo',
    Immutable.fromJS({
      id: '',
      pairName: '',
      passWord: '',
      var1: '',
    }));
  }
  componentWillUnmount() {
    this.clearArticle();
  }
  renderSelect(list, value) {
    const view = [];
    if(list.size) {
      const newList = list.toJS();
      newList.map((item, index) => {
        view.push(
          <Option value={item['id']} key={index}>{item[value]}</Option>
        );
      })
    }
    return view;
  }
  renderYearsSelect() {
    const view = [];
    for(let i = 1988; i <= 2017; i++ ) {
      view.push(
        <Option value={i} key={i}>{i}年</Option>
      );
    }
    return view;
  }
  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <PairInfoHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.pairInfo.toJS()}
            params={this.props.form.getFieldsValue()}
          />
        </View>
        <View className={ Contentstyles.contentContainer }>
          <Form

            className={ Contentstyles.contentBox }
          >
            {this.props.params.id ?
            <View>
              <View className={ Contentstyles.formHeader } >
                系统信息
              </View>
              <View className={ Contentstyles.formContent } >
                <FormItem
                  {...formItemLayout}
                  label="账号ID"
                >
                  {getFieldDecorator('id', {
                    initialValue: this.props.pairInfo.get('id'),
                    })(
                    <text>{this.props.pairInfo.get('id')}</text>
                  )}

                </FormItem>
              </View>
            </View> : ''}
            <View className={ Contentstyles.formHeader } >
              基本信息
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="用户名"
                hasFeedback
              >
                {getFieldDecorator('pairName', {
                  initialValue: this.props.pairInfo.get('pairName'),
                  rules: [{
                    required: true,
                    message: '请输入用户名',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/pairName', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入用户名"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
              >
                {getFieldDecorator('passWord', {
                  initialValue: this.props.pairInfo.get('passWord'),
                  rules: [{
                    required: true,
                    message: '请输入密码',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/passWord', e.target.value);
                  },
                  })(
                    <Input
                      type="password"
                      placeholder="请输入密码"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="真实姓名"
                hasFeedback
              >
                {getFieldDecorator('var1', {
                  initialValue: this.props.pairInfo.get('var1'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/var1', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入真实姓名"
                    />
                )}
              </FormItem>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default Form.create()(PairInfo);
