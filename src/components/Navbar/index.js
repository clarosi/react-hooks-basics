import React from 'react';

import Navlink from '../Navlink';
import { DARK_GREEN_2 } from '../../shared/string/meterialCls';
import { MEETUP, ADD_MEETUP, ABOUT } from '../../shared/string/menuText';
import {
  MEETUP_ICON,
  ADD_MEETUP_ICON,
  ABOUT_ICON
} from '../../shared/string/iconsNames';
import {
  MEETUP_LINK,
  ADD_MEETUP_LINK,
  ABOUT_LINK
} from '../../shared/string/menuLinks';

const Navbar = () => {
  return (
    <div>
      <nav className={DARK_GREEN_2}>
        <div className="nav-wrapper">
          <a
            href="/"
            data-target="main-menu"
            className="sidenav-trigger show-on-large"
          >
            <i className="fa fa-bars" />
          </a>
          <ul id="nav-mobile" className="right hide-on-small-only">
            <li>
              <Navlink to={MEETUP_LINK} icon={MEETUP_ICON} text={MEETUP} />
            </li>
            <li>
              <Navlink
                to={ADD_MEETUP_LINK}
                icon={ADD_MEETUP_ICON}
                text={ADD_MEETUP}
              />
            </li>
            <li>
              <Navlink to={ABOUT_LINK} icon={ABOUT_ICON} text={ABOUT} />
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="main-menu">
        <li>
          <Navlink to={MEETUP_LINK} icon={MEETUP_ICON} text={MEETUP} />
        </li>
        <li>
          <Navlink
            to={ADD_MEETUP_LINK}
            icon={ADD_MEETUP_ICON}
            text={ADD_MEETUP}
          />
        </li>
        <li>
          <Navlink to={ABOUT_LINK} icon={ABOUT_ICON} text={ABOUT} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
