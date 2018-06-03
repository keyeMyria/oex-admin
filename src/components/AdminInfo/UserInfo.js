
import React, { PropTypes } from 'react';
import UserInfoHeader from './UserInfoHeader';
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
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
  }
  componentWillReceiveProps(nextProps) {}
  /**
   * 回退
   * @param dispatch
   * @private
   */
  _goBackAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.UserList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.UserInfo(id, true)));
  }
  _updateAction = (dispatch) => () => {
    if (this.props.userInfo.get('id')) {
      this.props.dispatch(UserAction.updateUserInfo(this.props.userInfo.toJS()));
    } else {
      this.props.dispatch(UserAction.addUserInfo(this.props.userInfo.toJS()));
    }
  }
  clearArticle() {
    this.props.changeAction('AdminReducer/userInfo',
    Immutable.fromJS({
      id: '',
      user_name: '',
      pass_word: '',
      email: '',
      mobile: '',
      role: ''
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
          <UserInfoHeader
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
                {getFieldDecorator('user_name', {
                  initialValue: this.props.userInfo.get('user_name'),
                  rules: [{
                    required: true,
                    message: '请输入用户名',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'AdminReducer/userInfo/user_name', e.target.value);
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
                {getFieldDecorator('pass_word', {
                  initialValue: this.props.userInfo.get('pass_word'),
                  rules: [{
                    required: true,
                    message: '请输入密码',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'AdminReducer/userInfo/pass_word', e.target.value);
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
                label="邮箱"
                hasFeedback
              >
                {getFieldDecorator('email', {
                  initialValue: this.props.userInfo.get('email'),
                  rules: [{
                    required: true,
                    message: '请输入邮箱',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'AdminReducer/userInfo/email', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入邮箱"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="手机号"
                hasFeedback
              >
                {getFieldDecorator('mobile', {
                  initialValue: this.props.userInfo.get('mobile'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'AdminReducer/userInfo/mobile', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入手机号"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="角色ID"
                hasFeedback
              >
                {getFieldDecorator('role', {
                  initialValue: this.props.userInfo.get('role'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'AdminReducer/userInfo/role', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入角色ID"
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

export default Form.create()(UserInfo);
