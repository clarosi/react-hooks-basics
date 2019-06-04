import React from 'react';
import { Link } from 'react-router-dom';

import { VIEW_MEETUP_LINK } from '../../shared/string/menuLinks';

const MeetupItem = props => {
  const { meetups } = props;
  return meetups.map((meetup, idx) => (
    <li key={idx} className="collection-item">
      <Link to={`${VIEW_MEETUP_LINK}/${meetup.id}`}>{meetup.name}</Link>
    </li>
  ));
};

export default MeetupItem;
