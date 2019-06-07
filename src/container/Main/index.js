import React from 'react';
import { Switch, Route } from 'react-router';

import Meetups from '../Meetups';
import AddMeetups from '../AddMeetups';
import MeetupDetails from '../MeetupDetails';
import About from '../About';
import NotFound from '../404';

import {
  MEETUP_LINK,
  ADD_MEETUP_LINK,
  VIEW_MEETUP_LINK,
  ABOUT_LINK
} from '../../shared/string';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={MEETUP_LINK} component={Meetups} />
      <Route path={ADD_MEETUP_LINK} component={AddMeetups} />
      <Route path={`${VIEW_MEETUP_LINK}/:id`} component={MeetupDetails} />
      <Route path={ABOUT_LINK} component={About} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
