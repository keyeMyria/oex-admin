import React, { PropTypes } from 'react';
import ConfigHeader from './ConfigHeader';
import { View } from 'isomorphic';
import Immutable from 'immutable';
import * as Contentstyles from '../../assets/stylesheets/FromContent.css';
import * as styles from './style.css';
import * as ConfigAction from '../../actions/ConfigAction';
import { push } from 'react-router-redux';
import * as RoutingURL from '../../core/RoutingURL/RoutingURL';
import amumu from 'amumu';
import { message, Form, Input, Select, Cascader, InputNumber, DatePicker, Button, Upload, Icon } from 'antd';
import moment from 'moment';
import { UploadFileToOSS } from '../../core/WS/WSHandler';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

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
@amumu.decorators.Loading('pc')
class Config extends React.Component {
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
    this.props.dispatch(
      ConfigAction.getExperienceRecommend({ style: 1 })
    );
    this.props.dispatch(
      ConfigAction.getExperienceRecommendDoctor({ style: 2 })
    );
    this.props.dispatch(
      ConfigAction.getExperienceRecommendMedicine({ style: 3 })
    );
    this.props.dispatch(
      ConfigAction.getBannerList()
    );
    // this.props.dispatch(PeopleAction.getPeopleInfo({id: this.props.params.id}));
    // if(this.props.params.id){
    //   this.props.dispatch(ArticleAction.getArticleInfo({id: this.props.params.id}));
    // } else {
    //   this.clearArticle();
    // }
  }
  componentWillReceiveProps(nextProps) {
    // if(this.props.articleInfo.get('headImg') !== nextProps.articleInfo.get('headImg') && !this.props.articleInfo.get('headImg')) {
    //   this.setState({
    //     headImg: nextProps.articleInfo.get('headImg'),
    //   });
    // }
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
  setExperienceRecommend = () => {
    try {
      const ids = this.props.form.getFieldsValue().ids;
      if (ids !== undefined && ids !== null) {
        this.props.dispatch(
          ConfigAction.setExperienceRecommend({
            ids,
            style: 1,
          })
        );
      }
    } catch(e) {
      console.warn(e);
    }
  }
  setExperienceRecommendDoctor = () => {
    try {
      const ids = this.props.form.getFieldsValue().idsDoctor;
      if (ids !== undefined && ids !== null) {
        this.props.dispatch(
          ConfigAction.setExperienceRecommend({
            ids,
            style: 2,
          })
        );
      }
    } catch(e) {
      console.warn(e);
    }
  }
  setExperienceRecommendMedicine = () => {
    try {
      const ids = this.props.form.getFieldsValue().idsMedicine;
      if (ids !== undefined && ids !== null) {
        this.props.dispatch(
          ConfigAction.setExperienceRecommend({
            ids,
            style: 3,
          })
        );
      }
    } catch(e) {
      console.warn(e);
    }
  }
  beforeHeadImgUpload(file, type) {
    if(checkedFile(file)) {
      const result = UploadFileToOSS({
        filename: file.name,
        file,
      });
      result.then(fileInfo => {
        if (fileInfo.fileURL) {
          // console.log('上传成功');
          // getBase64(file, (imgURL) =>
          // this.setState({headImg: imgURL}));
          this.props.changeAction(`ConfigReducer/img${type}/img`, fileInfo.fileURL);
        } else {
          // 上传失败的图片显示
          console.log('上传失败');
        }
      });
    }
  }
  saveImg = (type) => {
    if (type == 1) {
      this.props.dispatch(
        ConfigAction.updateBanner({
          id: this.props.img1.get('id'),
          img: this.props.img1.get('img'),
          url: this.props.img1.get('url'),
          type,
        })
      );
    } else if (type == 2) {
      this.props.dispatch(
        ConfigAction.updateBanner({
          id: this.props.img2.get('id'),
          img: this.props.img2.get('img'),
          url: this.props.img2.get('url'),
          type,
        })
      );
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
          <ConfigHeader />
        </View>
        <View className={ Contentstyles.contentContainer }>

          <Form
            className={ Contentstyles.contentBox }
          >
            <View className={ Contentstyles.formHeader } >
              开屏页广告
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="开屏页广告(750*1030)"
              >
                {getFieldDecorator('img1', {
                  // initialValue: this.state.headImg,
                  rules: [{
                    required: true,
                    message: '请上传头图',
                  }],
                  })(
                  <Upload
                    className={styles.avatarUploader}
                    name="avatar"
                    showUploadList={false}
                    beforeUpload={(file) =>this.beforeHeadImgUpload(file, 1)}
                  >
                    {
                      this.props.img1.get('img') ?
                        <img src={this.props.img1.get('img')} className={styles.avatar} /> :
                        <Icon type="plus" className={styles.avatarUploaderTrigger} />
                    }
                  </Upload>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="链接地址"
              >
                {getFieldDecorator('img1url', {
                  initialValue: this.props.img1.get('url'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ConfigReducer/img1/url', e.target.value);
                  },
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                <Button type="primary" onClick={() => this.saveImg(1)}>保存</Button>
              </FormItem>
            </View>
            <View className={ Contentstyles.formHeader } >
              首页广告
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="首页广告(120*120)"
              >
                {getFieldDecorator('img2', {
                  // initialValue: this.state.headImg,
                  rules: [{
                    required: true,
                    message: '请上传头图',
                  }],
                  })(
                  <Upload
                    className={styles.avatarUploader}
                    name="avatar"
                    showUploadList={false}
                    beforeUpload={(file) =>this.beforeHeadImgUpload(file, 2)}
                  >
                    {
                      this.props.img2.get('img') ?
                        <img src={this.props.img2.get('img')} className={styles.avatar} /> :
                        <Icon type="plus" className={styles.avatarUploaderTrigger} />
                    }
                  </Upload>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="链接地址"
              >
                {getFieldDecorator('img2url', {
                  initialValue: this.props.img2.get('url'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'ConfigReducer/img2/url', e.target.value);
                  },
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                <Button type="primary" onClick={() => this.saveImg(2)}>保存</Button>
              </FormItem>
            </View>
            <View className={ Contentstyles.formHeader } >
              西医综合-经验推荐管理
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="经验今日推荐"
              >
                {getFieldDecorator('ids', {
                  initialValue: this.props.ids,
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                <Button type="primary" onClick={this.setExperienceRecommend}>保存</Button>
              </FormItem>
            </View>
            <View className={ Contentstyles.formHeader } >
              执业医师-经验推荐管理
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="经验今日推荐"
              >
                {getFieldDecorator('idsDoctor', {
                  initialValue: this.props.idsDoctor,
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                <Button type="primary" onClick={this.setExperienceRecommendDoctor}>保存</Button>
              </FormItem>
            </View>
            <View className={ Contentstyles.formHeader } >
              执业药师-经验推荐管理
            </View>
            <View className={ Contentstyles.formContent } >
              <FormItem
                {...formItemLayout}
                label="经验今日推荐"
              >
                {getFieldDecorator('idsMedicine', {
                  initialValue: this.props.idsMedicine,
                  })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                <Button type="primary" onClick={this.setExperienceRecommendMedicine}>保存</Button>
              </FormItem>
            </View>
          </Form>
        </View>
      </View>
    );
  }
}

export default Form.create()(Config);


// {getFieldDecorator('img1', {
//   initialValue: this.props.img1.get('img'),
//   rules: [{
//     required: true,
//     message: '请上传头图',
//   }],
//   })(
//   <Upload
//     className={styles.avatarUploader}
//     name="avatar"
//     showUploadList={false}
//     beforeUpload={(file) =>this.beforeHeadImgUpload(file)}
//   >
//     {/* {this.props.img1.get('img')} */}
//     {
//       this.props.img1.get('img') ?
//         <img src={this.props.img1.get('img')} alt="" className={styles.avatar} /> :
//         <Icon type="plus" className={styles.avatarUploaderTrigger} />
//     }
//   </Upload>
// )}
