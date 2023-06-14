import Button from 'components/Button/Button';
import React from 'react';
import css from './Hero.module.css';

export default function Hero() {
  return (
    <div className={css.section}>
      <h1 className={css.title}>We're an independent development agency.</h1>
      <p className={css.description}>
        We understand the intricacies of web development inside-out. That's why
        we build rock-solid Mobile and Web applications enriched with
        user-centered visual experiences.
      </p>
      <Button></Button>
    </div>
  );
}
