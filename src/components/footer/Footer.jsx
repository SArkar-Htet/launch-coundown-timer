import React, { Component } from 'react';
import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {bgImage, publicUrl} = this.props;
    // const faceBook = publicUrl+"/images/icon-facebook.svg";
    return (
      <footer className="footer" style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `right 17% bottom`,
        }}>
        <ul className="footer__social">
          <li className="footer__social__item">
            <a href="https://launch-countdown-frontendmentor-claudiabdm.netlify.app/" className="footer__social__link">
              <FacebookIcon fontSize="large" className="footer__social__icon" />
            </a>
          </li>
          <li className="footer__social__item">
            <a href="https://launch-countdown-frontendmentor-claudiabdm.netlify.app/" className="footer__social__link">
              <PinterestIcon fontSize="large" className="footer__social__icon" />
            </a>
          </li>
          <li className="footer__social__item">
            <a href="https://launch-countdown-frontendmentor-claudiabdm.netlify.app/" className="footer__social__link">
              <InstagramIcon fontSize="large" className="footer__social__icon" />
            </a>
          </li>
        </ul>
        
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Soe Arkar Htet</a>.
        </div>
      </footer>
    )
  }
}
