
import React, { PropTypes } from 'react';
import { Form, Input, Button, Col, Row, Select } from 'antd';
import Immutable from 'immutable';
import mainStyles from '../../assets/stylesheets/Common.css';
import amumu from 'amumu';

const FormItem = Form.Item;
const Option = Select.Option;

@amumu.decorators.PureComponent
@amumu.redux.ConnectStore
class NoticeListSearch extends React.Component {
  static propTypes = {
    searchAction: PropTypes.func.isRequired,
    form: PropTypes.any,
    bindReducer: PropTypes.func.isRequired,
    changeAction: PropTypes.func.isRequired,
    searchData: PropTypes.instanceOf(Immutable.Map).isRequired,
  };
  componentWillMount() {
    this.searchData();
  }
  searchData() {
    if (this.props.searchData.count() > 1) {
      const dataSource1 = this.props.searchData;
      return this.props.form.setFields({
        id: dataSource1.get('id'),
        phone: dataSource1.get('phone'),
      });
    }
    return false;
  }
  resetFieldAction() {
    this.props.form.resetFields();
    this.props.changeAction('OperateReducer/searchData/id', '');
    this.props.changeAction('OperateReducer/searchData/phone', '');
    this.props.changeAction('OperateReducer/searchData/realName', '');
    this.props.changeAction('OperateReducer/searchData/pageNum', 1);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form

        className="advanced-search-form"
      >
        <Row>
          <Col span="8" >
            <FormItem
              label="用户ID："
              {...formItemLayout}
            >
              {getFieldDecorator('id', {
                  initialValue: this.props.searchData.get('id'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/searchData/id', e.target.value);
                  },
                })(
                <Input
                  placeholder="ID"
                />
              )}
            </FormItem>
          </Col>
          <Col span="8" >
            <FormItem
              label="昵称："
              {...formItemLayout}
            >
              {getFieldDecorator('realName', {
                  initialValue: this.props.searchData.get('realName'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/searchData/realName', e.target.value);
                  },
                })(
                <Input
                  placeholder="昵称"
                />
              )}
            </FormItem>
          </Col>
          <Col span="8" >
            <FormItem
              label="手机号："
              {...formItemLayout}
            >
              {getFieldDecorator('phone', {
                  initialValue: this.props.searchData.get('phone'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/searchData/phone', e.target.value);
                  },
                })(
                <Input
                  placeholder="手机号"
                />
              )}
            </FormItem>
          </Col>
          <Col span="8" >
            <FormItem
              label="用户身份"
              {...formItemLayout}
            >
              {getFieldDecorator('style', {
                  initialValue: this.props.searchData.get('style'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'OperateReducer/searchData/style', e);
                  },
                })(
                  <Select
                    placeholder="请选择"
                    optionFilterProp="children"
                    filterOption={false}
                  >
                    <Option value={''}>全部</Option>
                    <Option value={1}>西医综合</Option>
                    <Option value={2}>执业医师</Option>
                    <Option value={3}>执业药师</Option>
                  </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }} >
          <Col span="13" offset="10" style={{ textAlign: 'right' }} >
            <Button
              style={{ marginRight: '20px' }}
              className={ mainStyles.whiteButton }
              htmlType="submit"
              onClick={() => {
                this.resetFieldAction()
                this.props.searchAction({
                  id: '',
                  pageNum: 1,
                  pageSize: 10,
                  phone: '',
                  realName: '',
                });
              }}
            >
              重置</Button>
            <Button
              style={{ marginRight: '20px' }}
              className={ mainStyles.blueButton }
              type="primary"
              htmlType="submit"
              onClick={() => {
                this.props.searchAction(this.props.searchData.toJS());
              }}
            >
              搜索</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(NoticeListSearch);
