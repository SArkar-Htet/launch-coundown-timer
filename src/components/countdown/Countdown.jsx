import React, { Component } from 'react';
import './Countdown.scss';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {bgImage} = this.props;
    return (
      <main className="countdown" style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `375%`,
        backgroundPosition: `center`,
      }}>
        <h1 className="countdown__title">We're launching soon</h1>
        <div className="countdown__body">
          <div className="countdown__item">
            <div className="countdown__timer">
              <span>08</span>
            </div>
            <div className="countdown__stats">
              Days
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span>23</span>
            </div>
            <div className="countdown__stats">
              Hours
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span>55</span>
            </div>
            <div className="countdown__stats">
              Minutes
            </div>
          </div>
          
          <div className="countdown__item">
            <div className="countdown__timer">
              <span>41</span>
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