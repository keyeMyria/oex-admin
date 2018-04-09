import React, { PureComponent } from 'react';

const styles = require('./styles.css');
const contactImage = require('../../assets/images/contact-img.jpg');
const qrcodeImage = require('../../assets/images/qrcode.png');
const trangleImage = require('../../assets/images/trangle.png');

class Contact extends PureComponent {

  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <img className={styles.contactImage} src={contactImage} />
        <div className={styles.contactText}>
          全国统一咨询热线：
          <span className={styles.bluespan}>400-999-0985</span>
        </div>
        <div className={styles.contactText}>
          客服微信：
          <span className={styles.bluespan}>huiyikefu007</span>
        </div>
        <div className={styles.contactText}>
          QQ群：
          <span className={styles.bluespan}>479416491</span>
        </div>
        <div className={styles.contactText}>
          服务号：
          <span className={styles.bluespan}>启航龙图医学考试中心</span>
        </div>
        <div className={styles.splitline} />
        <img className={styles.qrcode} src={qrcodeImage} />
        <img className={styles.trangleImage} src={trangleImage} />
        <div className={styles.descText}>
          关注“启航龙图医学考试中心”服务号，考试动态、学习资源、互动交流应有尽有！
        </div>
      </div>
    );
  }

}

export default Contact;
