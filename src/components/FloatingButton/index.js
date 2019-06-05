import React from 'react';

import Navlink from '../Navlink';
import ButtonLink from '../ButtonLink';
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

const BUTTON_CLS = 'btn-floating';

const FloatingButton = () => {
  return (
    <div className="fixed-action-btn">
      <ButtonLink
        to={ADD_MEETUP_LINK}
        className="btn-floating btn-large blue darken-2"
      >
        <i className="large fa fa-plus" />
      </ButtonLink>
      <ul>
        <li>
          <Navlink
            to={MEETUP_LINK}
            cls={`${BUTTON_CLS} ${DARK_GREEN_2}`}
            icon={MEETUP_ICON}
            text={MEETUP}
          />
        </li>
        <li>
          <Navlink
            to={ADD_MEETUP_LINK}
            cls={`${BUTTON_CLS} ${DARK_GREEN_2}`}
            icon={ADD_MEETUP_ICON}
            text={ADD_MEETUP}
          />
        </li>
        <li>
          <Navlink
            to={ABOUT_LINK}
            cls={`${BUTTON_CLS} ${DARK_GREEN_2}`}
            icon={ABOUT_ICON}
            text={ABOUT}
          />
        </li>
      </ul>
    </div>
  );
};

export default FloatingButton;
