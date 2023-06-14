import React from 'react';

export default function ClientItem({ image, title }) {
  return <img src={image} alt={title}></img>;
}
