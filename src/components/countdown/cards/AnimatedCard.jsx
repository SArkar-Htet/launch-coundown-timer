import React, { Component } from 'react';
import "./AnimatedCard.scss";

export default class AnimatedCard extends Component {
  render() {
    const {digit, animation} = this.props;
    return (
      <div className={`flip-card ${animation}`}>
        <span>{digit}</span>
      </div>
    )
  }
}
