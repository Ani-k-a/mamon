import React from 'react';
import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={css.block}>
      <section className={css.section}>
        {title && <p className={css.title}>{title}</p>}
        {children}
      </section>
    </div>
  );
}
