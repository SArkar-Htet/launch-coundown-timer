import React, { Component } from 'react';
import './Countdown.scss';

const calculateTime = (endDate) => {
  const now = new Date().getTime();
  const timeDistance = endDate - now;
  
  let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  days = days < 10 ? `0${days}` : days;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return {
    timeDistance,
    days,
    hours,
    minutes,
    seconds
  }
}
export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: new Date("Jan 01, 2022 00:00:00").getTime(),
      // endDate: new Date("Oct 21, 2021 21:57:00").getTime(),
      distance: true,
      days: `00`,
      hours: `00`,
      minutes: `00`,
      seconds: `00`,
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
    const {timeDistance, days, hours, minutes, seconds} = calculateTime(this.state.endDate);

    if (timeDistance > 0) {
      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      this.setState({
        distance: false,
        days: `00`,
        hours: `00`,
        minutes: `00`,
        seconds: `00`,
      });
      clearInterval(this.timer);
    }
  }

  render() {
    const {bgImage} = this.props;
    const {distance, days, hours, minutes, seconds} = this.state;
    const header = distance ? "We're launching soon" : "Time's Up!";
    console.log(distance);
    return (
      <main className="countdown" style={{ 
        backgroundImage: `url(${bgImage})`,
      }}>
        <h1 className="countdown__title">{header}</h1>
        <div className="countdown__body">
          <div className="countdown__item">
            <div className="countdown__timer">
              <span className="countdown__digits countdown__digits--top">{days}</span>
              <span className="countdown__digits countdown__digits--bottom">{days}</span>
            </div>
            <div className="countdown__stats">
              Days
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span className="countdown__digits countdown__digits--top">{hours}</span>
              <span className="countdown__digits countdown__digits--bottom">{hours}</span>
            </div>
            <div className="countdown__stats">
              Hours
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span className="countdown__digits countdown__digits--top">{minutes}</span>
              <span className="countdown__digits countdown__digits--bottom">{minutes}</span>
            </div>
            <div className="countdown__stats">
              Minutes
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span className="countdown__digits countdown__digits--top">{seconds}</span>
              <span className="countdown__digits countdown__digits--bottom">{seconds}</span>
            </div>
            <div className="countdown__stats">
              Seconds
            </div>
          </div>

        </div>
      </main>
    )
  }
}