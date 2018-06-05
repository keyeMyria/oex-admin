
import React, { PropTypes } from 'react';
import WorkOrderHeader from './WorkOrderHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as ServiceAction from '../../actions/ServiceAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class WorkOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
      this.props.dispatch(ServiceAction.getWorkOrderInfo({id: this.props.params.id}));
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
    dispatch(push(RoutingURL.WorkOrders()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.WorkOrder(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    console.log(this.props.workOrder.toJS());
    this.props.dispatch(ServiceAction.updateUser(this.props.workOrder.toJS()));
  }
  clearArticle() {
    this.props.changeAction('ServiceReducer/workOrder',
    Immutable.fromJS({
      id: '',
      userName: '',
      passWord: '',
      var1: '',
    }));
  }
  changeGongDan (status) {
    const params = {
      desc_json: this.props.workOrder.get('desc_json'),
      id: this.props.workOrder.get('id'),
      status,
      title: this.props.workOrder.get('title'),
    }
    this.props.dispatch(ServiceAction.replyWorkOrder(params));
  }
  componentWillUnmount() {
    this.clearArticle();
  }
  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
      const statusType = { 0: '已撤销', 1: '未反馈', 2: '已反馈', 3: '已关闭' };
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <WorkOrderHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.workOrder.toJS()}
            params={this.props.form.getFieldsValue()}
          />
        </View>
        <View className={ Contentstyles.contentContainer }>
          <Form
            className={ Contentstyles.contentBox }
          >
            <View className={ Contentstyles.formHeader } >
              工单信息
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="工单ID"
                hasFeedback
              >
                <span>{this.props.workOrder.get('id')}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="标题"
                hasFeedback
              >
                <span>{this.props.workOrder.get('title')}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="用户ID"
                hasFeedback
              >
                <span>{this.props.workOrder.get('user_id')}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="电话"
                hasFeedback
              >
                <span>{this.props.workOrder.get('phone')}</span>
              </FormItem>
              { this.props.workOrder.get('status') !== 0 ?
              <FormItem
                {...formItemLayout}
                label="描述"
                hasFeedback
              >
                <span>{this.props.workOrder.get('desc_json')}</span>
              </FormItem> : <div /> }
              <FormItem
                {...formItemLayout}
                label="状态"
                hasFeedback
              >
                <span>{this.props.workOrder.get('status') !== null && statusType[this.props.workOrder.get('status')+1]}</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="类型"
                hasFeedback
              >
                <span>{statusType[this.props.workOrder.get('style')]}</span>
              </FormItem>
              { this.props.workOrder.get('status') === 0 ?
              <div>
                <FormItem
                  {...formItemLayout}
                  label="回复内容"
                  hasFeedback
                >
                  {getFieldDecorator('var1', {
                    initialValue: this.props.workOrder.get('var1'),
                    onChange: (e) => {
                      this.props.changeAction(
                      'ServiceReducer/workOrder/desc_json', e.target.value);
                    },
                    })(
                      <Input
                        placeholder="请输入回复内容"
                      />
                  )}
                </FormItem>
                <Button
                  type="primary"
                  style={{ marginRight: '20px'}}
                  onClick={ () => { this.changeGongDan(1) } }
                >
                  回复工单
                </Button>
                <Button
                  type="primary"
                  onClick={ () => { this.changeGongDan(2) } }
                >
                  关闭工单
                </Button>
              </div>: <div /> }
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default Form.create()(WorkOrder);
