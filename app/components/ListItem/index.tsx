import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

export interface Props {
  item?: any
}

function ListItem(props: Props) {
  return (
    <Wrapper>
      <Item>{props.item}</Item>
    </Wrapper>
  );
}

export default ListItem;
