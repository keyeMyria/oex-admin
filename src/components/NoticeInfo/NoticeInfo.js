
import React, { PropTypes } from 'react';
import NoticeInfoHeader from './NoticeInfoHeader';
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
class NoticeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if(this.props.params.id){
      this.props.dispatch(OperateAction.getNoticeInfo({id: this.props.params.id}));
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
    console.log(this.props.noticeInfo.toJS());
    if(this.props.noticeInfo.get('id')) {
      this.props.dispatch(OperateAction.updateNoticeInfo(this.props.noticeInfo.toJS()));
    } else {
      this.props.dispatch(OperateAction.addNoticeInfo(this.props.noticeInfo.toJS()));
    }

  }
  clearArticle() {
    this.props.changeAction('OperateReducer/noticeInfo',
    Immutable.fromJS({
      id: '',
      img: 'jjjjj'
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
          <NoticeInfoHeader
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
                label="标题"
                hasFeedback
              >
                {getFieldDecorator('title', {
                  initialValue: this.props.noticeInfo.get('title'),
                  rules: [{
                    required: true,
                    message: '请输入标题',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeInfo/title', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入标题"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="类型"
                hasFeedback
              >
                {getFieldDecorator('type_id', {
                  initialValue: this.props.noticeInfo.get('type_id'),
                  rules: [{
                    required: true,
                    message: '请输入类型',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeInfo/type_id', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入类型"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="语言"
                hasFeedback
              >
                {getFieldDecorator('n_language', {
                  initialValue: this.props.noticeInfo.get('n_language'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeInfo/n_language', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入语言"
                    />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="内容"
                hasFeedback
              >
                {getFieldDecorator('content', {
                  initialValue: this.props.noticeInfo.get('content'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/noticeInfo/content', e.target.value);
                  },
                  })(
                    <Input
                      placeholder="请输入内容"
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

export default Form.create()(NoticeInfo);
