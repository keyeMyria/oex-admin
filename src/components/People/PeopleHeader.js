
import React, { PropTypes } from 'react';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import Immutable from 'immutable';
import { showCancel } from '../../core/FormValidate/CancelOk';
import { modifyButton, confirmButton, SubmitButton, cancelButton, revertButton }
 from '../../core/CommonFun/ButtonCommon';

const UserInfoHeader = (props) => {
  const handleSubmit = (actionName) => {
    props.form.validateFields((errors) => {
      if (!!errors) {
        return;
      }
      actionName(props.params);
    });
  };
  const _renderTitle = () => {
    return <View>用户详情</View>;
  };
  const _returnBtn = () => {
    return revertButton(props.goBackAction)();
  };
  return (
    <View>
      <View className={ styles.contentHeader }>
        <View className={ styles.contentText }>
          {_renderTitle()}
        </View>
        <View className={ styles.contentButton }>
          {_returnBtn()}
        </View>
      </View>
    </View>
  );
};

export default UserInfoHeader;
