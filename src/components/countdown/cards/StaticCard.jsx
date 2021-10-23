import React, { Component } from 'react'

export default class StaticCard extends Component {
  render() {
    const {digit, position} = this.props;
    return (
      <div className={`countdown__card countdown__card--${position}`}>
        <span>{digit}</span>
      </div>
    )
  }
}
