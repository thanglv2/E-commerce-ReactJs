/**
 *
 * HorizontalMenu
 *
 */

import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import HorizontalMenuItem from 'containers/HorizontalMenuItem';


const data1 = [
  {
    title: 'Category 1',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
  {
    title: 'Category 2',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
  {
    title: 'Category 3',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
  {
    title: 'Category 4',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
]

const data3 = data1
const data4 = data1
const data6 = data1

export interface Props {

}
export function HorizontalMenu(props: Props) {
  useInjectReducer({ key: 'horizontalMenu', reducer });
  useInjectSaga({ key: 'horizontalMenu', saga, mode: null });

  return (
    // < !--menu nav-- >
    <div className="menu-nav">
      <span className="menu-header">Menu <i className="fa fa-bars"></i></span>
      <ul className="menu-list">
        <HorizontalMenuItem data={[]} title='HOME' />
        <HorizontalMenuItem data={[]} title='SHOP' />
        <HorizontalMenuItem data={data3} title='WOMEN' />
        <HorizontalMenuItem data={data4} title='MEN' />
        <HorizontalMenuItem data={[]} title='SALES' />
        <HorizontalMenuItem data={data6} title='PAGES' />
      </ul>
    </div>
    /* <!-- menu nav --> */

  );
}

export default HorizontalMenu
