import React from 'react';

import Navlink from '../Navlink';
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

const BUTTON_CLS = 'btn-floating green darken-2';

const FloatingButton = () => {
  return (
    <div className="fixed-action-btn">
      <a href="/" className="btn-floating btn-large blue darken-3">
        <i className="large material-icons">Edit</i>
      </a>
      <ul>
        <li>
          <Navlink
            to={MEETUP_LINK}
            cls={BUTTON_CLS}
            icon={MEETUP_ICON}
            text={MEETUP}
          />
        </li>
        <li>
          <Navlink
            to={ADD_MEETUP_LINK}
            cls={BUTTON_CLS}
            icon={ADD_MEETUP_ICON}
            text={ADD_MEETUP}
          />
        </li>
        <li>
          <Navlink
            to={ABOUT_LINK}
            cls={BUTTON_CLS}
            icon={ABOUT_ICON}
            text={ABOUT}
          />
        </li>
      </ul>
    </div>
  );
};

export default FloatingButton;
