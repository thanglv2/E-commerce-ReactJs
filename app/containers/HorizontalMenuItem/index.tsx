/**
 *
 * HorizontalMenuItem
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

export function HorizontalMenuItem(props: Props) {
  useInjectReducer({ key: 'horizontalMenuItem', reducer });
  useInjectSaga({ key: 'horizontalMenuItem', saga, mode: null });
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
      onClick={() => toggleMenuItem()}
      ref={menuItemDom}
      className={`dropdown mega-dropdown full-width ${open ? 'open' : ''}`}><a className="dropdown-toggle" data-toggle="dropdown"
        aria-expanded="true">{props.title} {props.data && props.data.length ? <i className="fa fa-caret-down"></i> : null}</a>
      <div className="custom-menu">
        <div className="row">
          {
            props.data && props.data.length && props.data.map(item => {
              return < div className="col-md-3" key={uuid()} >
                <div className="hidden-sm hidden-xs">
                  <a className="banner banner-1" href="#">
                    <img src="../../assets/img/banner06.jpg" alt=""></img>
                    <div className="banner-caption text-center">
                      <h3 className="white-color text-uppercase">{item.title}</h3>
                    </div>
                  </a>
                  <hr></hr>
                </div>
                <ul className="list-links">
                  <li>
                    <h3 className="list-links-title">{item.title}</h3>
                  </li>
                  {
                    item.value && item.value.length && item.value.map(subItem => {
                      return <li key={uuid()}><a href="#">{subItem}</a></li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </div>
      </div>
    </li>
  );
}

export default HorizontalMenuItem
