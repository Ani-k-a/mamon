import React from 'react';
import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={css.block}>
      {title && <p>{title}</p>}
      <section className={css.section}>{children}</section>
    </div>
  );
}
