import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../components/Spinner';

const MeetupDetails = props => {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);

  // This is componentDidMount() or componentDidUpdate() in class component.
  // Only re-run the useEffect if details changes and you pass [details] as second params.
  useEffect(() => {
    setLoading(true);
    getMeetupDetails();
    // console.log('componentDidMount()');
  }, []);

  // This is componentWillUnMount() in class component.
  // If your useEffect returns a function, React will run it when it is time to clean up.
  // useEffect(() => {
  //   return () => console.log('componentWillUnMount()');
  // });

  const getMeetupDetails = () => {
    const { match } = props;
    axios
      .get(`http://localhost:3000/api/meetups/${match.params.id}`)
      .then(res => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const renderDetails = () => {
    const { name, address, city } = details;
    return (
      <ul className="collection">
        <li className="collection-item">{`Name: ${name}`}</li>
        <li className="collection-item">{`Address: ${address}`}</li>
        <li className="collection-item">{`City: ${city}`}</li>
      </ul>
    );
  };

  return (
    <div>
      <h1>Meetup Details</h1>
      {loading ? <Spinner size={'large'} /> : renderDetails()}
    </div>
  );
};

export default MeetupDetails;
