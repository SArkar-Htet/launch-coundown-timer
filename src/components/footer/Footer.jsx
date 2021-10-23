import React, { Component } from 'react';
import FooterItem from './FooterItem';
import './Footer.scss';
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {bgImage, publicUrl} = this.props;
    // const faceBook = publicUrl+"/images/icon-facebook.svg";
    // const 
    return (
      <footer className="footer" style={{ 
          backgroundImage: `url(${bgImage})`,
        }}>
        <ul className="footer__social">
          <FooterItem type="facebook" />
          <FooterItem type="pinterest" />
          <FooterItem type="instagram" />
        </ul>
        
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Soe Arkar Htet</a>.
        </div>
      </footer>
    )
  }
}
