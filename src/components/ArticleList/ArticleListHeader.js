/**
 * Created by wanglu on 7/4/2016.
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import { View } from 'isomorphic';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

const ArticleListHeader = (props) => {
  return (
    <View className={ styles.contentHeader }>
      <View className={ styles.contentText }>
        题目列表
      </View>
      <View className={ styles.contentButton }>
        <Button
          type="primary"
          className={ mainStyles.blueButton }
          onClick={ () => props.goCreateAction() }
        >
          新建题目
        </Button>
      </View>
    </View>
  );
};

ArticleListHeader.propTypes = {
  goCreateAction: PropTypes.func.isRequired,
};

export default ArticleListHeader;
