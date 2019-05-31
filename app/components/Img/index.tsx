/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';

export interface Props {
  src: string;
  alt: string;
  className?: string;
}

function Img(props: Props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default Img;
