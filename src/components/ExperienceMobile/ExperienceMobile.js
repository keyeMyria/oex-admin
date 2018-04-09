import React, { PureComponent } from 'react';
import * as ExperienceAction from '../../actions/ExperienceAction';

const styles = require('./styles.css');

class ExperienceMobile extends PureComponent  {
  componentWillMount() {
    if(this.props.location.query.id){
      this.props.dispatch(
        ExperienceAction.getExperienceMobileInfo({
          id: this.props.location.query.id,
          entity: 'experience',
        })
      );
    }
  }
  renderContent(list) {
    const view = [];
    list && list.map((item, key) => {
      if(item.get('type') === 1) {
        view.push(<p key={key}>{item.get('content')}</p>);
      }
      if(item.get('type') === 2) {
        view.push(<h3 key={key}>{item.get('content')}</h3>);
      }
      if(item.get('type') === 3) {
        view.push(
          <p key={key}>
            <img className={styles.contentImg} src={item.get('content')} />
          </p>);
      }
    });
    return view;
  }
  render() {
    return (
      <div className={styles.articleContent}>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <div>
          <img className={styles.headImg} src={this.props.experienceInfo.get('headImg')} />
          <div className={styles.title}>{this.props.experienceInfo.get('title')}</div>
          <div className={styles.updateTime}>{this.props.experienceInfo.get('updateTime')}</div>
          <div className={styles.splitline} />
          {this.renderContent(this.props.experienceInfo.get('content'))}
        </div>
      </div>
    );
  }
}
export default ExperienceMobile;
