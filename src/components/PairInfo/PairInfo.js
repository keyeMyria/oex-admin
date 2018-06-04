
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
import { Form, Input, Select } from 'antd';
const Option = Select.Option;

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class PairInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
      this.props.dispatch(TradeAction.getPairInfo({id: this.props.params.id}));
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
            <View className={ Contentstyles.formHeader } >
              基本信息
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="交易区id"
                hasFeedback
              >
                {getFieldDecorator('zoneId', {
                  initialValue: this.props.pairInfo.get('zoneId'),
                  rules: [{
                    required: true,
                    message: '请输入交易区id',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/zoneId', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入交易区id"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易状态"
                hasFeedback
              >
                {getFieldDecorator('status', {
                  initialValue: this.props.pairInfo.get('status'),
                  rules: [{
                    required: true,
                    message: '请选择交易状态',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/status', e);
                  },
                  })(
                    <Select>
                      <Option value="1">开</Option>
                      <Option value="0">关</Option>
                    </Select>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易最大数量	"
                hasFeedback
              >
                {getFieldDecorator('maxAmountLimit', {
                  initialValue: this.props.pairInfo.get('maxAmountLimit'),
                  rules: [{
                    required: true,
                    message: '请输入交易最大数量',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/maxAmountLimit', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入交易最大数量"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易最小数量"
                hasFeedback
              >
                {getFieldDecorator('minAmountLimit', {
                  initialValue: this.props.pairInfo.get('minAmountLimit'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/minAmountLimit', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入交易最小数量"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="手续费率"
                hasFeedback
              >
                {getFieldDecorator('rate', {
                  initialValue: this.props.pairInfo.get('rate'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/rate', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入手续费率"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易币种id"
                hasFeedback
              >
                {getFieldDecorator('tradeCoinId', {
                  initialValue: this.props.pairInfo.get('tradeCoinId'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/pairInfo/tradeCoinId', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入交易币种id"
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
