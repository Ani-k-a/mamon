import React from 'react';
import css from './EmployeeCard.module.css';

export default function EmployeeCard({ imagePath, name, position }) {
  return (
    <div className={css.card}>
      <img src={imagePath} alt={name} className={css.img}></img>
      <div>
        <p className={css.name}>{name}</p>
        <p className={css.position}>{position}</p>
      </div>
    </div>
  );
}
