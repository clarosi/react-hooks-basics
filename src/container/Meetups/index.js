import React, { useState, useEffect } from 'react';

import { Heading, Spinner, MeetupItems } from '../../components/Common';
import { getRequest } from '../../shared/utils';
import { ROUTE_1 } from '../../shared/string';

const Meetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // This is componentDidMount() or componentDidUpdate() in class component.
  // Only re-run the useEffect if count changes and you pass [count] as second params.
  useEffect(() => {
    setLoading(true);
    getMeetups();
    // console.log('componentDidMount()');
  }, []);

  // This is componentWillUnMount() in class component.
  // If your useEffect returns a function, React will run it when it is time to clean up.
  // useEffect(() => {
  //   return () => console.log('componentWillUnMount()');
  // });

  // ?filter[order]=createdAt&DESC
  const getMeetups = async () => {
    const res = await getRequest(ROUTE_1);
    if (res.error) setLoading(false);
    setLoading(false);
    setMeetups([...res].reverse());
    setCount(res.length);
  };

  const renderMeetups = () => {
    if (loading) return <Spinner size={'large'} />;
    return <MeetupItems meetups={meetups} />;
  };

  return (
    <div>
      <Heading>{count} Meetups</Heading>
      <ul className={loading ? null : 'collection'}>{renderMeetups()}</ul>
    </div>
  );
};

export default Meetups;
