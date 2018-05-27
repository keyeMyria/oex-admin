/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const BonusListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        持币分红
      </View>
      <View className={ styles.contentButton }>
      </View>
    </View>
  );
};

BonusListHeader.propTypes = {};

export default BonusListHeader;
