/**
 * Created by wanglu on 7/4/2016.
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const CurrencyInfoListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        币种信息
      </View>
      <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建币种
        </Button>
      </View>
    </View>
  );
};

CurrencyInfoListHeader.propTypes = {
  goCreateAction: PropTypes.func.isRequired,
};

export default CurrencyInfoListHeader;
