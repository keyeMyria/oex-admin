/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const UserListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        用户列表
      </View>
      <View className={ styles.contentButton }>
        {/* <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建账号
        </Button> */}
      </View>
    </View>
  );
};

UserListHeader.propTypes = {};

export default UserListHeader;
