
import React, { PropTypes } from 'react';
import styles from './style.css';

const ShareHeader = (props) => {
  return (
    <div>
      <div className={styles.articleTitleWrapper}>
        <h1 className={styles.articleTitle}>长期阿加搜的黄鼠狼的撒娇的了解阿萨德拉进来的骄傲了多久啊可怜的骄傲的骄傲了的交流空间家零件？</h1>
      </div>
      <div className={styles.articleAuthorCardComponent}>
        <div className={styles.authorInfo}>
          <div
            style={{backgroundImage: `url(${props.avator})`}}
            className={`${styles.avatarComponent} ${styles.authorAvatar} ${styles.avatarComponent32}`}>
          </div>
          <div className={styles.authorTextInfo}>
            <span className={styles.authorNickname}>{props.author}</span>
          </div>
        </div>
        <span className={styles.authorUpdateTime}>{props.informationTime}</span>
      </div>
    </div>
  );
};

ShareHeader.propTypes = {
  avator: PropTypes.string,
  author: PropTypes.string,
  informationTime: PropTypes.string,
};

export default ShareHeader;
