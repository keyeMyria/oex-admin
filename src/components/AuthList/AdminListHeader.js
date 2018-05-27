/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const AdminListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        权限列表
      </View>
      <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          创建新角色
        </Button>
      </View>
    </View>
  );
};

AdminListHeader.propTypes = {};

export default AdminListHeader;
