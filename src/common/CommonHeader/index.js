/**
 * @flow
 * Created by wanglu on 7/4/2016.
 */

import React, { PropTypes } from 'react';
import { Button } from 'antd';
import styles from '../../assets/stylesheets/Common.css';
import mainStyles from '../../assets/stylesheets/Common.css';

type propsType = {
  title: ?string,
};

const CommonHeader = (props: propsType) => {
  return (
    <div className={ styles.contentHeader }>
      <div className={ styles.contentText }>
        {props.title}
      </div>
      <div className={ styles.contentButton }>
      </div>
    </div>
  );
};

export default CommonHeader;
