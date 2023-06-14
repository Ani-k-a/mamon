import React from 'react';
import css from './Services.module.css';
import about from '../../about.json';
import ServiceItem from 'components/ServiceItem/ServiceItem';

export default function Services() {
  return (
    <ul className={css.list}>
      {about.map(el => (
        <ServiceItem key={el.id} {...el} />
      ))}
    </ul>
  );
}
