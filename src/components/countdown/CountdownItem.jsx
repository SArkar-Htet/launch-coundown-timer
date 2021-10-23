import React, { Component } from 'react';
import StaticCard from './cards/StaticCard';
import AnimatedCard from './cards/AnimatedCard';
import './CountdownItem.scss';

const clockFormat = (digit) => digit < 10 ? `0${digit}` : digit;

export default class CountdownItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {digit, unit, shuffle} = this.props;
    let currentDigit = digit;
    let previousDigit = digit + 1;

    if (unit !== 'Hours') {
      previousDigit = previousDigit === 60 ? 0 : previousDigit;
    } else {
      previousDigit = previousDigit === 24 ? 0 : previousDigit;
    }

    currentDigit = clockFormat(currentDigit);
    previousDigit = clockFormat(previousDigit);

    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;

    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (
      <div className="countdown__item">
        <div className="countdown__unit__container">
          <StaticCard digit={currentDigit} position='top' />
          <StaticCard digit={previousDigit} position='bottom' />
          <AnimatedCard digit={digit1} animation={animation1} />
          <AnimatedCard digit={digit2} animation={animation2} />
        </div>
        <div className="countdown__stats">
          {unit}
        </div>
      </div>
    )
  }
}
