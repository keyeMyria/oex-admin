
import React, { PropTypes } from 'react';
import { Form, Input, Button, Col, Row, Select } from 'antd';
import Immutable from 'immutable';
import mainStyles from '../../assets/stylesheets/Common.css';
import amumu from 'amumu';

const FormItem = Form.Item;
const Option = Select.Option;

@amumu.decorators.PureComponent
@amumu.redux.ConnectStore
class UserFlowSearch extends React.Component {
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
        user_id: dataSource1.get('user_id'),
      });
    }
    return false;
  }
  resetFieldAction() {
    this.props.form.resetFields();
    this.props.changeAction('FlowReducer/userSearchData/user_id', '');
    this.props.changeAction('FlowReducer/userSearchData/pageNum', 1);
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
                  initialValue: this.props.searchData.get('user_id'),
                  onChange: (e) => {
                    this.props.changeAction(
                    'FlowReducer/userSearchData/user_id', e.target.value);
                  },
                })(
                <Input
                  placeholder="ID"
                />
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
                  coin_id: '',
                  type: '1',
                  pageNum: 1,
                  pageSize: 10,
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

export default Form.create()(UserFlowSearch);
