import React, { Component } from 'react';
import './CountdownItem.scss'

export default class CountdownItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {digit, stats} = this.props;
    return (
      <div className="countdown__item">
        <div className="countdown__unit__container">
          <div className="countdown__card countdown__card--top">{digit}</div>
          <div className="countdown__card countdown__card--bottom">{digit}</div>
        </div>
        <div className="countdown__stats">
          {stats}
        </div>
      </div>
    )
  }
}
