/**
 *
 * VerticalMenuItem
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
const uuid = require('uuidv4');

export interface Props {
  data?: any;
  title: string;
}

export function VerticalMenuItem(props: Props) {
  useInjectReducer({ key: 'verticalMenuItem', reducer });
  useInjectSaga({ key: 'verticalMenuItem', saga, mode: null });
  const [open, setOpen] = useState(false);
  const menuItemDom = useRef(null);

  const handleClickOutside = (e) => {
    if (menuItemDom && menuItemDom.current) {
      if (menuItemDom.current.contains(e.target)) {
        // console.log(open, menuItemDom.current.classList.contains('open'))
      } else {
        const menuItems = menuItemDom.current.parentNode.querySelectorAll('.open');
        for (let i = 0; i < menuItems.length; i++) {
          const menuItem = menuItems[i];
          // if (menuItem && menuItem !== menuItemDom.current) {
          menuItem.classList.remove('open');
          // }
        }
        return
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  const toggleMenuItem = () => {
    if (!props.data || !props.data.length) return

    const menuItems = menuItemDom.current.parentNode.querySelectorAll('.open');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      if (menuItem && menuItem !== menuItemDom.current) {
        menuItem.classList.remove('open');
      }
    }

    // if (open && !menuItemDom.current.classList.contains('open')) {
    //   menuItemDom.current.classList.add('open')
    //   return
    // }
    setOpen(!open);
  };

  return (
    <li
      key={uuid()}
      className={`dropdown side-dropdown ${open ? 'open' : ''}`}
      onClick={() => toggleMenuItem()}
      ref={menuItemDom}
    >
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="true"
      >
        {props.title} {(props.data && props.data.length > 0) ? <i className="fa fa-angle-right" /> : null}
      </a>
      <div className="custom-menu">
        <div className="row">
          {props.data &&
            props.data.length &&
            props.data.map(item => (
              <div className="col-md-4" key={uuid()}>
                <ul className="list-links">
                  <li>
                    <h3 className="list-links-title">{item.title}</h3>
                  </li>
                  {item.value &&
                    item.value.length &&
                    item.value.map(subItem => (
                      <li key={uuid()}>
                        <a href="#">{subItem}</a>
                      </li>
                    ))}
                </ul>
                <hr className="hidden-md hidden-lg" />
              </div>
            ))}
        </div>
        <div className="row hidden-sm hidden-xs">
          <div className="col-md-12">
            <hr />
            <a className="banner banner-1" href="#">
              <img src="https://colorlib.com/etc/e-shop/img/banner05.jpg" alt="" />
              <div className="banner-caption text-center">
                <h2 className="white-color">NEW COLLECTION</h2>
                <h3 className="white-color font-weak">HOT DEAL</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
export default VerticalMenuItem;