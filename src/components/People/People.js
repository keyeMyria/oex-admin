import React, { PropTypes } from 'react';
import PeopleHeader from './PeopleHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as ArticleAction from '../../actions/ArticleAction';
import * as PeopleAction from '../../actions/PeopleAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { message, Form, Input, Select, Cascader, InputNumber, DatePicker, Table } from 'antd';
import moment from 'moment';
import { UploadFileToOSS } from '../../core/WS/WSHandler';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

@amumu.redux.ConnectStore
@amumu.decorators.Loading('pc')
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired,
    articleInfo: PropTypes.instanceOf(Immutable.Map).isRequired,
    courseList: PropTypes.array.isRequired,
    getValue: PropTypes.func,
    dispatch: PropTypes.func,
    changeAction: PropTypes.func,
    form: PropTypes.any,
  };
  componentWillMount() {
    this.props.dispatch(PeopleAction.getPeopleInfo({id: this.props.params.id}));
    // if(this.props.params.id){
    //   this.props.dispatch(ArticleAction.getArticleInfo({id: this.props.params.id}));
    // } else {
    //   this.clearArticle();
    // }
  }
  componentWillReceiveProps(nextProps) {
  }
  /**
   * 回退
   * @param dispatch
   * @private
   */
  _goBackAction = (dispatch: Function) => () => {
    dispatch(push(RoutingURL.PeopleList()));
  }
  _goUpdateAction = (dispatch: Function) => (id: string) => {
    dispatch(push(RoutingURL.Article(id, true)));
  }
  _updateAction = (dispatch) => (params: {}) => {
    const param = this.props.articleInfo.toJS();
    if(!param.hasVedio){
      param.vedioId = '';
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
    const filename = id ? ossUrl.split('.json')[0].split('/')[ossUrl.split('.json')[0].split('/').length-1] : 'subjectOss.json';
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
    for(let i = 1988; i <= 2020; i++ ) {
      view.push(
        <Option value={i} key={i}>{i}年</Option>
      );
    }
    return view;
  }
  _renderDataSource() {
    const datas = this.props.peopleInfo.get('examList');
    const dataSource = [];
    if(datas) {
    datas.forEach((data, index) => {
      dataSource.push({
        key: index,
        time: data.get('time'),
        year: data.get('year'),
        score: data.get('score'),
        high: data.get('high'),
        low: data.get('low'),
        avg: data.get('avg'),
        gloAvg: data.get('gloAvg'),
      });
    });
    }
    return dataSource;
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
    const columns = [{
      title: '交卷时间',
      dataIndex: 'time',
      key: 'time',
    }, {
      title: '试题年份',
      dataIndex: 'year',
      key: 'year',
    }, {
      title: '得分',
      dataIndex: 'score',
      key: 'score',
    }, {
      title: '历史最高分',
      dataIndex: 'high',
      key: 'high',
    }, {
      title: '历史最低分',
      dataIndex: 'low',
      key: 'low',
    }, {
      title: '平均得分',
      dataIndex: 'avg',
      key: 'avg',
    }, {
      title: '全站平均得分',
      dataIndex: 'gloAvg',
      key: 'gloAvg',
    }];
    const roleType = { 1: '西医综合', 2: '执业医师', 3: '执业药师' };
    return (
      <View className={ Contentstyles.content }>
        <View className={ Contentstyles.contentHeader }>
          <PeopleHeader
            id={this.props.params.id}
            goBackAction={this._goBackAction(this.props.dispatch)}
          />
        </View>
        <View className={ Contentstyles.contentContainer }>
          <Form
            className={ Contentstyles.contentBox }
          >
            {this.props.params.id ?
            <View>
              <View className={ Contentstyles.formHeader } >
                基本信息
              </View>
              <View className={ Contentstyles.formContent } >
                <FormItem
                  {...formItemLayout}
                  label="用户ID"
                >
                  {getFieldDecorator('id', {
                    initialValue: this.props.peopleInfo.get('id'),
                    })(
                    <text>{this.props.peopleInfo.get('id')}</text>
                  )}

                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="用户昵称"
                >
                  <text>{this.props.peopleInfo.get('realName')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="用户手机号"
                >
                  <text>{this.props.peopleInfo.get('phone')}</text>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="用户身份"
                >
                  <text>{roleType[this.props.peopleInfo.get('style')]}</text>
                </FormItem>
              </View>
            </View> : ''}
            <View className={ Contentstyles.formHeader } >
              完善信息
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="性别"
              >
                <text>{this.props.peopleInfo.get('gender')}</text>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="目标院校"
              >
                <text>{this.props.peopleInfo.get('targetSchool')}</text>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="目标专业"
              >
                <text>{this.props.peopleInfo.get('targetMajor')}</text>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="考研时间"
              >
                <text>{this.props.peopleInfo.get('examTime')}</text>
              </FormItem>
            </View>

            <View className={ Contentstyles.formHeader }>
              考试统计
            </View>
            <View className={ Contentstyles.formContent }>
              <Table dataSource={this._renderDataSource()}  columns={columns} />
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default Form.create()(Article);
