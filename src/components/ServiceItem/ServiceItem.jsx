import React from 'react';
import css from './ServiceItem.module.css';

export default function ServiceItem({ image, title, description }) {
  return (
    <li className={css.item}>
      <img src={image} alt="icon"></img>
      <div>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  );
}
