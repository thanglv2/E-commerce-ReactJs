/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';

import A from './A';
import './Button.less';

export interface Props {
  handleRoute?: () => void;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button(props: Props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </button>
    );
  }

  return <div className="wrapper">{button}</div>;
}

export default Button;
