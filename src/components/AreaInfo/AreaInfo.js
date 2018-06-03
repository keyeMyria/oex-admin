
import React, { PropTypes } from 'react';
import AreaInfoHeader from './AreaInfoHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as TradeAction from '../../actions/TradeAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input, Select  } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class AreaInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
      this.props.dispatch(TradeAction.getAreaInfo({id: this.props.params.id}));
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
    dispatch(push(RoutingURL.AreaList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.AreaInfo(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    console.log(this.props.areaInfo.toJS());
    this.props.dispatch(TradeAction.updateArea(this.props.areaInfo.toJS()));
  }
  clearArticle() {
    this.props.changeAction('TradeReducer/areaInfo',
    Immutable.fromJS({
      id: '',
      zoneName: '',
      zoneSort: '',
      zoneSwitch: '',
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
          <AreaInfoHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.areaInfo.toJS()}
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
                label="交易区名称"
                hasFeedback
              >
                {getFieldDecorator('zoneName', {
                  initialValue: this.props.areaInfo.get('zoneName'),
                  rules: [{
                    required: true,
                    message: '请输入交易区名称',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/areaInfo/zoneName', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入交易区名称"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易区展示序号"
                hasFeedback
              >
                {getFieldDecorator('zoneSort', {
                  initialValue: this.props.areaInfo.get('zoneSort'),
                  rules: [{
                    required: true,
                    message: '交易区展示序号',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/areaInfo/zoneSort', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="交易区展示序号"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="交易区展示开关"
                hasFeedback
              >
                {getFieldDecorator('zoneSwitch', {
                  initialValue: this.props.areaInfo.get('zoneSwitch'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'TradeReducer/areaInfo/zoneSwitch', e.target.value);
                  },
                  })(
                    <Select>
                      <Option value="1">开</Option>
                      <Option value="0">关</Option>
                    </Select>
                )}
              </FormItem>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default Form.create()(AreaInfo);
