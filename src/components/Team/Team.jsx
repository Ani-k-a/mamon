import React from 'react';
import css from './Team.module.css';
import employees from '../../employees.json';
import EmployeeCard from 'components/EmployeeCard/EmployeeCard';

export default function Team() {
  return (
    <ul className={css.list}>
      {employees.map(el => (
        <EmployeeCard key={el.id} {...el} />
      ))}
    </ul>
  );
}
