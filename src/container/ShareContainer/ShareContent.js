
import React, { PropTypes } from 'react';
import styles from './style.css';
import Immutable from 'immutable';

const ShareContent = (props) => {
  const renderContent = (list) => {
    const view = [];
    list.map((item, key) => {
      if(item.get('type') === 1) {
        view.push(<p key={key}>{item.get('content')}</p>);
      }
      if(item.get('type') === 2) {
        view.push(<h3 key={key}>{item.get('content')}</h3>);
      }
      if(item.get('type') === 3) {
        view.push(
          <p key={key}>
            {/* <span> */}
              <img className="" src={item.get('content')} />
            {/* </span> */}
          </p>);
      }
    });
    return view;
  };
  return (
    <div>
      <div className={styles.summary}>
        {props.subTitle}
      </div>
      <div className={styles.content}>
        <section className={styles.textblock}>
          {renderContent(props.content)}
        </section>
      </div>
    </div>
  );
};

ShareContent.propTypes = {
  avator: PropTypes.string,
  content: PropTypes.instanceOf(Immutable.List).isRequired,
  subTitle: PropTypes.string,
};

export default ShareContent;
