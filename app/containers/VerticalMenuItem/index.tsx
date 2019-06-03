/**
 *
 * VerticalMenuItem
 *
 */

import React, { useState, useRef } from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export interface Props {
  data?: any;
  title: string;
}

export function VerticalMenuItem(props: Props) {
  useInjectReducer({ key: 'verticalMenuItem', reducer });
  useInjectSaga({ key: 'verticalMenuItem', saga, mode: null });
  const [open, setOpen] = useState(false);
  const menuItemDom = useRef(null);
  const toggleMenuItem = () => {
    if (!props.data || !props.data.length) return
    const menuItems = menuItemDom.current.parentNode.querySelectorAll('.open');
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      if (menuItem && menuItem !== menuItemDom.current) {
        menuItem.classList.remove('open');
      }
    }
    setOpen(!open);
  };

  return (
    <li
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
              <div className="col-md-4">
                <ul className="list-links">
                  <li>
                    <h3 className="list-links-title">{item.title}</h3>
                  </li>
                  {item.value &&
                    item.value.length &&
                    item.value.map(subItem => (
                      <li>
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
              <img src="./img/banner05.jpg" alt="" />
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