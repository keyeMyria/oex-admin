
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
                label="角色名"
                hasFeedback
              >
                {getFieldDecorator('role_name', {
                  initialValue: this.props.roleInfo.get('role_name'),
                  rules: [{
                    required: true,
                    message: '请输入角色名',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/role_name', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入角色名"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="描述"
                hasFeedback
              >
                {getFieldDecorator('description', {
                  initialValue: this.props.roleInfo.get('description'),
                  rules: [{
                    required: true,
                    message: '请输入描述',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/description', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入描述"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="权限值"
                hasFeedback
              >
                {getFieldDecorator('privileges', {
                  initialValue: this.props.roleInfo.get('privileges'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/roleInfo/privileges', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入权限值"
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
