/**
 * Created by wanglu on 7/4/2016.
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const WorkOrdersHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        工单列表
      </View>
      <View className={ styles.contentButton }>
      </View>
    </View>
  );
};

WorkOrdersHeader.propTypes = {};

export default WorkOrdersHeader;
