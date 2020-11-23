import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Here are contact info place
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              dan_gloria_
            </Link>
          </div>
          <small class='website-rights'>© 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com"
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href="https://www.instagram.com/"
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/"
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://twitter.com/"
              rel="noreferrer"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;