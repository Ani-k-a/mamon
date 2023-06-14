import React from 'react';
import css from './Footer.module.css';
import logo from '../../images/mamon-logo.svg';
import logo1 from '../../images/1.svg';
import logo2 from '../../images/2.svg';
import logo3 from '../../images/3.svg';
import logo4 from '../../images/4.svg';

export default function Footer() {
  return (
    <div className={css.footer}>
      {' '}
      <div className={css.section}>
        <img src={logo} alt="mamon logo" className={css.img}></img>
        <ul className={css.list}>
          <li>
            <a href="https://github.com/">
              <img src={logo1} alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={logo2} alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={logo3} alt="logo"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <img src={logo4} alt="logo"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
