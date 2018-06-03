/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const AreaListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        交易区列表
      </View>
      <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建交易区
        </Button>
      </View>
    </View>
  );
};

AreaListHeader.propTypes = {};

export default AreaListHeader;
