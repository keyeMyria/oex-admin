
import React, { PropTypes } from 'react';
import ArticleHeader from './ArticleHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as ArticleAction from '../../actions/ArticleAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { message, Form, Input, Select, Cascader, InputNumber, DatePicker } from 'antd';
import moment from 'moment';
import { UploadFileToOSS } from '../../core/WS/WSHandler';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function checkedFile(file) {
  const isPic = (file.type === 'image/jpeg' || file.type ===  'image/png' || file.type ===  'image/gif');
  if (!isPic) {
    message.error('图片格式错误!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片请小于2MB!');
  }
  return isPic && isLt2M;
}

@amumu.redux.ConnectStore
// @amumu.decorators.Loading('pc')
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.dispatch(ArticleAction.getCourseList());
    this.props.dispatch(ArticleAction.getYearList({
      entity: 'year',
      order: 'year',
      sort: 'desc',
    }));
    if(this.props.params.id){
      this.props.dispatch(ArticleAction.getArticleInfo({id: this.props.params.id}));
    } else {
      this.clearArticle();
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.articleInfo.get('headImg') !== nextProps.articleInfo.get('headImg') && !this.props.articleInfo.get('headImg')) {
      this.setState({
        headImg: nextProps.articleInfo.get('headImg'),
      });
    }
  }
  /**
   * 回退
   * @param dispatch
   * @private
   */
  _goBackAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.ArticleList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.Article(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    const param = this.props.articleInfo.toJS();
    if(!param.hasVedio){
      param.vedioId = '';
    }
    if(param.type == 2){
      param.score = 0;
    }
    param.option = JSON.stringify({
      A: this.props.articleInfo.get('A'),
      B: this.props.articleInfo.get('B'),
      C: this.props.articleInfo.get('C'),
      D: this.props.articleInfo.get('D'),
      E: this.props.articleInfo.get('E'),
    });
    console.log(param);
    this.whiteFileAction(param);
    // this.props.dispatch(ArticleAction.updateArticleInfo(param));
  }
  clearArticle() {
    this.props.changeAction('ArticleReducer/articleInfo',
    Immutable.fromJS({
      type: '', // 1真题2教材同步
      id: '',
      year: '', // 年份 类型1专有
      chapter: '', // 章节 类型2专有
      course: '', // 学科 类型2专有
      content: '',
      hasVedio: '', // 是否有视频 1有0没有
      option: '', // 选项 json 格式前端定义	string	@mock={A,B,C,D}
      ossUrl: '',
      rightCount: '',
      rightDesc: '', //解析
      rightOption: [], // 正确选项 多个逗号隔开
      sort: '', // 顺序
      status: '', // 0无效1有效
      subjectId: '', // 题目id
      subjectTypes: '', // 题型 ABX	string	@mock=A
      totalCount: '', // 答题总数
      updateTime: '',
      vedioId: '', // 视频id
      score: '', // 分值
    }));
  }
  componentWillUnmount() {
    this.clearArticle();
  }
  whiteFileAction(param) {
    const id = this.props.articleInfo.get('id');
    const ossUrl = this.props.articleInfo.get('ossUrl');
    const filename = id ? `${ossUrl.split('.json')[0].split('/')[ossUrl.split('.json')[0].split('/').length-1]}.json` : 'subjectOss.json';
    var blob = new Blob([JSON.stringify(param)], {type: "application/json;charset=utf-8"});
    // FileSaver.saveAs(blob, "contentOss.json"); //saveAs(blob,filename)
    const result = UploadFileToOSS({
      filename,
      uploadType: id ? 'update' : '',
      file: blob,
    });
    result.then(fileInfo => {
      if (fileInfo.fileURL) {
        this.props.changeAction('ArticleReducer/articleInfo/ossUrl', fileInfo.fileURL);
        this.props.form.setFieldsValue({ossUrl: fileInfo.fileURL});
        // const params = this.props.articleInfo.toJS();
        param.ossUrl = fileInfo.fileURL;
        param.rightOption = param.rightOption.join(',');
        param.id = this.props.articleInfo.get('id');
        param.updateTime = this.props.articleInfo.get('updateTime');
        console.log(param);
        this.props.dispatch(ArticleAction.updateArticleInfo(param));
      } else {
        // 上传失败的图片显示
        console.log('上传失败');
      }
    });
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
    this.props.yearList && this.props.yearList.forEach(item => {
      view.push(
        <Option value={item.get('year')} key={item.get('id')}>{item.get('year')}年</Option>
      );
    });
    return view;
  }
  getCourseData = () => {
    let courseList = this.props.courseList;
    courseList = courseList && courseList.toJS();
    if (courseList && courseList.length) {
      return courseList.map(course => {
        const chapters = course.list;
        const children = chapters.map(item => ({
          value: item.chapter,
          label: item.chapter,
        }));
        return ({
          label: course.course,
          value: course.course,
          children,
        })
      });
    }
  }
  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const formItemLayout1 = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formItemLayout2 = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };
    const formItemLayout3 = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <ArticleHeader
            id={this.props.params.id}
            form={this.props.form}
            editing={this.props.location.query.editing}
            goBackAction={this._goBackAction(this.props.dispatch)}
            goUpdateAction={this._goUpdateAction(this.props.dispatch)}
            updateAction={this._updateAction(this.props.dispatch)}
            // params={this.props.articleInfo.toJS()}
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
                  label="题目ID"
                >
                  {getFieldDecorator('id', {
                    initialValue: this.props.articleInfo.get('id'),
                    })(
                    <text>{this.props.articleInfo.get('id')}</text>
                  )}

                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="更新时间"
                >
                  <text>{this.props.articleInfo.get('updateTime')}</text>
                </FormItem>
              </View>
            </View> : ''}
            {this.props.params.id ?
            <View>
              <View className={ Contentstyles.formHeader } >
                统计
              </View>
              <View className={ Contentstyles.formContent } >
                <FormItem
                  {...formItemLayout}
                  label="全站共答"
                >
                  <text>{this.props.articleInfo.get('totalCount')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="答对人数"
                >
                  <text>{this.props.articleInfo.get('rightCount')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="答错人数"
                >
                  <text>{this.props.articleInfo.get('totalCount') - this.props.articleInfo.get('rightCount')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="正确率"
                >
                  <text>{this.props.articleInfo.get('rightCount') / this.props.articleInfo.get('totalCount')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="被收藏"
                >
                  <text>{this.props.articleInfo.get('collectCount')}</text>
                </FormItem>
              </View>
            </View> : ''}
            <View className={ Contentstyles.formHeader } >
              基本信息
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="真题/教材同步"
                hasFeedback
              >
                {getFieldDecorator('type', {
                  initialValue: this.props.articleInfo.get('type'),
                  rules: [{
                    required: true,
                    message: '请选择真题/教材同步',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/type', e);
                  },
                  })(
                  <Select placeholder="请选择">
                      <Option value={1}>真题</Option>
                      <Option value={2}>教材同步</Option>
                  </Select>
                )}
              </FormItem>
              {getFieldValue('type') === 1 ?
              <FormItem
                {...formItemLayout}
                label="年份"
                hasFeedback
              >
                {getFieldDecorator('year', {
                  initialValue: this.props.articleInfo.get('year'),
                  rules: [{
                    required: true,
                    message: '请选择年份',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/year', e);
                  },
                  })(
                  <Select placeholder="请选择">
                    {this.renderYearsSelect()}
                  </Select>
                )}
              </FormItem> : ''}
              {getFieldValue('type') === 2 ?
              <FormItem
                {...formItemLayout}
                label="学科和章节"
                hasFeedback
              >
                {getFieldDecorator('course', {
                  initialValue: [this.props.articleInfo.get('course'), this.props.articleInfo.get('chapter')],
                  rules: [{
                    required: true,
                    message: '请选择所属学科和章节',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/course', e[0]);
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/chapter', e[1]);
                  },
                  })(
                  <Cascader options={this.getCourseData()} placeholder="请选择" />
                )}
              </FormItem> : '' }
              <FormItem
                {...formItemLayout}
                label="题型"
                hasFeedback
              >
                {getFieldDecorator('subjectTypes', {
                  initialValue: this.props.articleInfo.get('subjectTypes'),
                  rules: [{
                    required: true,
                    message: '请选择题型',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/subjectTypes', e);
                  },
                  })(
                  <Select placeholder="请选择">
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                    <Option value="X">X</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="有无视频"
                hasFeedback
              >
                {getFieldDecorator('hasVedio', {
                  initialValue: this.props.articleInfo.get('hasVedio'),
                  rules: [{
                    required: true,
                    message: '请选择有无视频',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/hasVedio', e);
                  },
                  })(
                  <Select placeholder="请选择">
                    <Option value={1}>有</Option>
                    <Option value={0}>无</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="题号"
              >
                {getFieldDecorator('subjectId', {
                  initialValue: this.props.articleInfo.get('subjectId'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/subjectId', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入题号"
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="序号"
              >
                {getFieldDecorator('sort', {
                  initialValue: this.props.articleInfo.get('sort'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/sort', e);
                  },
                  })(
                  <InputNumber min={1} />
                )}
              </FormItem>
              {
                getFieldValue('type') === 1 ?
                <FormItem
                  {...formItemLayout}
                  label="分值"
                >
                  {getFieldDecorator('score', {
                    initialValue: this.props.articleInfo.get('score'),
                    rules: [{
                      required: true,
                      message: '请输入分值',
                    }],
                    onChange: (e) => {
                      this.props.changeAction(
                      'ArticleReducer/articleInfo/score', e);
                    },
                    })(
                      <Select>
                        <Option value={1}>1</Option>
                        <Option value={1.5}>1.5</Option>
                        <Option value={1.6}>1.6</Option>
                        <Option value={2}>2</Option>
                        <Option value={2.5}>2.5</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={4.5}>4.5</Option>
                        <Option value={5}>5</Option>
                      </Select>
                  )}
                </FormItem> : ''}
            </View>
            <View className={ Contentstyles.formHeader }>
              正文信息
            </View>
            <View className={ Contentstyles.formContent }>
              <FormItem
                {...formItemLayout2}
                label="题干"
                hasFeedback
              >
                {getFieldDecorator('content', {
                  initialValue: this.props.articleInfo.get('content'),
                  rules: [{
                    required: true,
                    message: '请输入题干',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/content', e.target.value);
                  },
                  })(
                  <TextArea
                    placeholder="请输入题干"
                    autosize={{ minRows: 3 }}
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout2}
                label="A"
              >
                {getFieldDecorator('A', {
                  initialValue: this.props.articleInfo.get('A'),
                  rules: [{
                    required: true,
                    message: '请输入A选项',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/A', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入A选项"
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout2}
                label="B"
              >
                {getFieldDecorator('B', {
                  initialValue: this.props.articleInfo.get('B'),
                  rules: [{
                    required: true,
                    message: '请输入B选项',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/B', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入B选项"
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout2}
                label="C"
              >
                {getFieldDecorator('C', {
                  initialValue: this.props.articleInfo.get('C'),
                  rules: [{
                    required: true,
                    message: '请输入C选项',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/C', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入C选项"
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout2}
                label="D"
              >
                {getFieldDecorator('D', {
                  initialValue: this.props.articleInfo.get('D'),
                  rules: [{
                    required: true,
                    message: '请输入D选项',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/D', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入D选项"
                  />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout2}
                label="E"
              >
                {getFieldDecorator('E', {
                  initialValue: this.props.articleInfo.get('E'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/E', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入E选项"
                  />
                )}
              </FormItem>
            </View>
            <View className={ Contentstyles.formHeader }>
              题目解析
            </View>
            <View className={ Contentstyles.formContent }>
              <FormItem
                {...formItemLayout}
                label="正确答案"
                hasFeedback
              >
                {getFieldDecorator('rightOption', {
                  initialValue: this.props.articleInfo.get('rightOption').toJS(),
                  rules: [{
                    required: true,
                    message: '请选择正确答案',
                  }],
                  onChange: (e) => {
                    // console.log(e);
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/rightOption', Immutable.fromJS(e));
                  },
                  })(
                    <Select placeholder="请选择" mode="multiple">
                      <Option value="A">A</Option>
                      <Option value="B">B</Option>
                      <Option value="C">C</Option>
                      <Option value="D">D</Option>
                      <Option value="E">E</Option>
                    </Select>
                )}
              </FormItem>
              {this.props.form.getFieldValue('hasVedio') ?
              <FormItem
                {...formItemLayout2}
                label="视频ID"
              >
                {getFieldDecorator('vedioId', {
                  initialValue: this.props.articleInfo.get('vedioId'),
                  rules: [{
                    // required: this.props.getValue('ArticleReducer/articleInfo/hasVedio') ? true : false,
                    required: true,
                    message: '请填写视频ID或地址',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/vedioId', e.target.value);
                  },
                  })(
                  <Input
                    placeholder="请输入视频id或地址"
                  />
                )}
              </FormItem> : ''}
              <FormItem
                {...formItemLayout2}
                label="解析"
              >
                {getFieldDecorator('rightDesc', {
                  initialValue: this.props.articleInfo.get('rightDesc'),
                  rules: [{
                    required: true,
                    message: '解析',
                  }],
                  onChange: (e) => {
                    this.props.changeAction(
                    'ArticleReducer/articleInfo/rightDesc', e.target.value);
                  },
                  })(
                  <TextArea
                    placeholder="请输入解析，使用&包含的内容将加粗"
                    autosize={{ minRows: 3 }}
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

export default Form.create()(Article);
