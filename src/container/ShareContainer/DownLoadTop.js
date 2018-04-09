
import React, { PropTypes } from 'react';
import { View } from 'isomorphic';
import styles from './style.css';
const logo = require('../../assets/images/logo.png');

const DownLoadTop = (props) => {
  return (
    <View className={styles.topDownloadWrapper}>
      <img src={logo} />
      <span>蝶加</span>
      <a
        // href="http://a.app.qq.com/o/simple.jsp?pkgname=com.android36kr.estate"
      >
        下载蝶加
      </a>
    </View>
  );
};

DownLoadTop.propTypes = {
};

export default DownLoadTop;
