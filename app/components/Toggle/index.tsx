/**
 *
 * LocaleToggle
 *
 */

import React from 'react';

import Select from './Select';
import ToggleOption from '../ToggleOption';

export interface Props {
  onToggle?: () => void;
  values?: any[];
  value?: string;
  messages?: object;
}

function Toggle(props: Props) {
  let content: any;

  // If we have items, render them
  if (props.values) {
    content = props.values.map(value => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content || <option>--</option>}
    </Select>
  );
}

export default Toggle;
