import React, { Component } from 'react';
import StaticCard from './cards/StaticCard'
import './CountdownItem.scss';

const clockFormat = (digit) => digit < 10 ? `0${digit}` : digit;

export default class CountdownItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {digit, stats} = this.props;
    let currentDigit = digit;
    let previousDigit = digit + 1;

    currentDigit = clockFormat(currentDigit);
    previousDigit = clockFormat(previousDigit);

    return (
      <div className="countdown__item">
        <div className="countdown__unit__container">
          <StaticCard digit={currentDigit} position='top' />
          <StaticCard digit={previousDigit} position='bottom' />
        </div>
        <div className="countdown__stats">
          {stats}
        </div>
      </div>
    )
  }
}
