/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const UserAssetsHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        根据币种id查询的充币/提币列表
      </View>
      <View className={ styles.contentButton }>
      </View>
    </View>
  );
};

UserAssetsHeader.propTypes = {};

export default UserAssetsHeader;
