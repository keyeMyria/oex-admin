
import React, { PropTypes } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import Immutable from 'immutable';
import mainStyles from '../../assets/stylesheets/Common.css';
import amumu from 'amumu';

const FormItem = Form.Item;

@amumu.decorators.PureComponent
@amumu.redux.ConnectStore
class UserListSearch extends React.Component {
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
        user_email: dataSource1.get('user_email'),
        user_mobile: dataSource1.get('user_mobile'),
      });
    }
    return false;
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
                    'UserReducer/searchData/id', e.target.value);
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
              label="用户手机号："
              {...formItemLayout}
            >
              {getFieldDecorator('user_mobile', {
                  initialValue: this.props.searchData.get('user_mobile'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/user_mobile', e.target.value);
                  },
                })(
                <Input
                  placeholder="手机号："
                />
              )}
            </FormItem>
          </Col>
          <Col span="8" >
            <FormItem
              label="E-mail"
              {...formItemLayout}
            >
              {getFieldDecorator('user_email', {
                  initialValue: this.props.searchData.get('user_email'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'UserReducer/searchData/user_email', e.target.value);
                  },
                })(
                <Input
                  placeholder="E-mail"
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }} >
          <Col span="13" offset="10" style={{ textAlign: 'right' }} >
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

export default Form.create()(UserListSearch);
