/**
 * Created by wanglu on 7/4/2016.
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const CurrencyConfigListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        币种配置
      </View>
      {/* <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建配置
        </Button>
      </View> */}
    </View>
  );
};

CurrencyConfigListHeader.propTypes = {
  goCreateAction: PropTypes.func.isRequired,
};

export default CurrencyConfigListHeader;
