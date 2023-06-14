import React from 'react';
import css from './Header.module.css';
import Button from 'components/Button/Button';
import logo from '../../images/mamon-logo.svg';

export default function Header() {
  return (
    <div className={css.section}>
      <div className={css.block}>
        <img src={logo} alt="mamon logo" className={css.img}></img>
        <span className={css.logo}>mamon</span>
      </div>
      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <a href="#servises" className={css.link}>
              Services
            </a>
          </li>
          <li className={css.item}>
            <a href="#clients" className={css.link}>
              Clients
            </a>
          </li>
          <li className={css.item}>
            <a href="#clients" className={css.link}>
              Our team
            </a>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </div>
  );
}
