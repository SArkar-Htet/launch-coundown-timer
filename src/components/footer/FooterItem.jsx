import React, { Component } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default class FooterItem extends Component {
  render() {
    const {type} = this.props;
    let path, icon;
    // const path = type === "facebook" ? "https://www.facebook.com/" : "https://www.instagram.com/"
    if (type === 'facebook') {
      path = "https://www.facebook.com/";
      icon = <FacebookIcon fontSize="large" className="footer__social__icon" />;
    } else if (type === 'instagram') {
      path = "https://www.instagram.com/";
      icon = <InstagramIcon fontSize="large" className="footer__social__icon" />;
    } else {
      path = "https://www.pinterest.com";
      icon = <PinterestIcon fontSize="large" className="footer__social__icon" />;
    }
    return (
      <li className="footer__social__item">
        <a href={path} className="footer__social__link" aria-label={type} rel="noopener noreferrer" target="_blank" >
          {icon}
        </a>
      </li>
    )
  }
}
