import React, { Component } from 'react';
import CountdownItem from './CountdownItem';
import {calculateTime} from '../../functions/calculateTime';
import './Countdown.scss';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: new Date("Feb 14, 2022 00:00:00").getTime(),
      // endDate: new Date("Oct 23, 2021 22:33:00").getTime(),
      distance: true,
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const state = this.state;
    const {timeDistance, days, hours, minutes, seconds} = calculateTime(state.endDate);
    const daysShuffle = days !== state.days ? !state.daysShuffle : state.daysShuffle;
    const hoursShuffle = hours !== state.hours ? !state.hoursShuffle : state.hoursShuffle;
    const minutesShuffle = minutes !== state.minutes ? !state.minutesShuffle : state.minutesShuffle;
    const secondsShuffle = seconds !== state.seconds ? !state.secondsShuffle : state.secondsShuffle;

    if (timeDistance > 0) {
      this.setState({
        days,
        daysShuffle,
        hours,
        hoursShuffle,
        minutes,
        minutesShuffle,
        seconds,
        secondsShuffle,
      });
    } else {
      this.setState({
        distance: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(this.timer);
    }
  }

  render() {
    const {bgImage} = this.props;
    const {distance, days, daysShuffle, hours, hoursShuffle, minutes, minutesShuffle, seconds, secondsShuffle} = this.state;
    const header = distance ? "We're launching soon" : "Time's Up!";
    return (
      <main className="countdown" style={{ 
        backgroundImage: `url(${bgImage})`,
      }}>
        <h1 className="countdown__title">{header}</h1>
        <div className="countdown__body">
          <CountdownItem digit={days} unit='Days' shuffle={daysShuffle} />
          <CountdownItem digit={hours} unit='Hours' shuffle={hoursShuffle} />
          <CountdownItem digit={minutes} unit='Minutes' shuffle={minutesShuffle} />
          <CountdownItem digit={seconds} unit='Seconds' shuffle={secondsShuffle} />
        </div>
      </main>
    )
  }
}