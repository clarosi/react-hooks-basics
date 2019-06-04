import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';
import MeetupItem from '../../components/MeetupItem';

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

  const getMeetups = () => {
    axios
      .get('api/meetups')
      .then(res => {
        setMeetups([...res.data]);
        setCount(res.data.length);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>{count} Meetups</h1>
      <ul className={loading ? null : 'collection'}>
        {loading ? (
          <Spinner size={'large'} />
        ) : (
          <MeetupItem meetups={meetups} />
        )}
      </ul>
    </div>
  );
};

export default Meetups;
