import React, { Component } from 'react';
import StaticCard from './cards/StaticCard';
import AnimatedCard from './cards/AnimatedCard';
import {clockFormat} from '../../functions/clockFormat';
import './CountdownItem.scss';

export default class CountdownItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {digit, unit, shuffle} = this.props;
    let currentDigit = digit;
    let previousDigit = digit + 1;

    currentDigit = clockFormat(currentDigit, unit, '');
    previousDigit = clockFormat(previousDigit, unit, 'isPrevious');
    
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
