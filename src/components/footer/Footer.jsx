import React, { Component } from 'react';
import FooterItem from './FooterItem';
import './Footer.scss';
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {bgImage} = this.props;
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
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://www.facebook.com/soearkar.htet.526/">Soe Arkar Htet</a>.
        </div>
      </footer>
    )
  }
}
