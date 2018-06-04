
import React, { PropTypes } from 'react';
import NoticeTypeInfoHeader from './NoticeTypeInfoHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as OperateAction from '../../actions/OperateAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class NoticeTypeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
      // this.props.dispatch(OperateAction.getNoticeInfo({id: this.props.params.id}));
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
    dispatch(push(RoutingURL.NoticeList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.NoticeInfo(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    if (this.props.noticeTypeInfo.get('id')) {
      this.props.dispatch(OperateAction.updateNoticeTypeInfo(this.props.noticeTypeInfo.toJS()));
    } else {
      this.props.dispatch(OperateAction.addNoticeTypeInfo(this.props.noticeTypeInfo.toJS()));
    }

  }
  clearArticle() {
    this.props.changeAction('OperateReducer/noticeTypeInfo',
    Immutable.fromJS({
      img: '',
      n_language: '',
      name: '',
      url: ''
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
          <NoticeTypeInfoHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.noticeInfo.toJS()}
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
                label="公告图片"
                hasFeedback
              >
                {getFieldDecorator('img', {
                  initialValue: this.props.noticeTypeInfo.get('img'),
                  rules: [{
                    required: true,
                    message: '请输入公告图片url',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeTypeInfo/img', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入用户名"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="语言"
                hasFeedback
              >
                {getFieldDecorator('n_language', {
                  initialValue: this.props.noticeTypeInfo.get('n_language'),
                  rules: [{
                    required: true,
                    message: '语言',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeTypeInfo/n_language', e.target.value);
                  },
                  })(
                    <Input
                      type="password"
                      placeholder="请输入语言"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="公告类型名称"
                hasFeedback
              >
                {getFieldDecorator('name', {
                  initialValue: this.props.noticeTypeInfo.get('name'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeTypeInfo/name', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入公告类型名称"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="公告url"
                hasFeedback
              >
                {getFieldDecorator('url', {
                  initialValue: this.props.noticeTypeInfo.get('url'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeTypeInfo/url', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入公告url"
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

export default Form.create()(NoticeTypeInfo);
