import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const StatisticsHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        统计
      </View>
    </View>
  );
};

StatisticsHeader.propTypes = {};

export default StatisticsHeader;
