/**
 * Created by wanglu
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const MSCurrencyListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        币种资料
      </View>
      <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建资料
        </Button>
      </View>
    </View>
  );
};

MSCurrencyListHeader.propTypes = {
  goCreateAction: PropTypes.func.isRequired,
};

export default MSCurrencyListHeader;
