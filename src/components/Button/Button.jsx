import React from 'react';
import css from './Button.module.css';

export default function Button({ width, height }) {
  return (
    <button className={css.button} width={width} height={height}>
      Contact Us
    </button>
  );
}
