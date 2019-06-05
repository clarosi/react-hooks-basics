import React from 'react';
import { Link } from 'react-router-dom';

import ItemUl from '../ItemUl';
import { VIEW_MEETUP_LINK } from '../../shared/string/menuLinks';

const MeetupItems = props => {
  const { meetups } = props;
  return meetups.map((meetup, idx) => (
    <ItemUl key={idx}>
      <Link to={`${VIEW_MEETUP_LINK}/${meetup.id}`}>{meetup.name}</Link>
    </ItemUl>
  ));
};

export default MeetupItems;
