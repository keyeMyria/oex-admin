
import React, { PropTypes } from 'react';
import AuthInfoHeader from './AuthInfoHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as UserAction from '../../actions/UserAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class AuthInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
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
    dispatch(push(RoutingURL.AuthList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.AuthInfo(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    if (this.props.roleInfo.get('id')) {
      this.props.dispatch(UserAction.updateRole(this.props.roleInfo.toJS()));
    } else {
        this.props.dispatch(UserAction.addRole(this.props.roleInfo.toJS()));
    }

  }
  clearArticle() {
    this.props.changeAction('UserReducer/roleInfo',
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
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <AuthInfoHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.userInfo.toJS()}
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
                label="用户名"
                hasFeedback
              >
                {getFieldDecorator('userName', {
                  initialValue: this.props.roleInfo.get('userName'),
                  rules: [{
                    required: true,
                    message: '请输入用户名',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/userName', e.target.value);
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
                  initialValue: this.props.roleInfo.get('passWord'),
                  rules: [{
                    required: true,
                    message: '请输入密码',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/passWord', e.target.value);
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
                  initialValue: this.props.roleInfo.get('var1'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/var1', e.target.value);
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

export default Form.create()(AuthInfo);
