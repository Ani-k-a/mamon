import React from 'react';
import css from './Clients.module.css';
import clients from '../../clients.json';
import ClientItem from 'components/ClientItem/ClientItem';

export default function Clients() {
  return (
    <ul className={css.list}>
      {clients.map(el => (
        <ClientItem key={el.id} {...el} />
      ))}
    </ul>
  );
}
