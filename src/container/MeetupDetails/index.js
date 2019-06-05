import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Heading from '../../components/Heading';
import Spinner from '../../components/Spinner';
import ItemUl from '../../components/ItemUl';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import { DARK_GREEN_2 } from '../../shared/string/meterialCls';
import { EDIT_MEETUP_LINK } from '../../shared/string/menuLinks';

const MeetupDetails = props => {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = props.match.params;

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
    axios
      .get(`http://localhost:3000/api/meetups/${id}`)
      .then(res => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const renderButtons = () => (
    <div>
      <ButtonLink to={`${EDIT_MEETUP_LINK}/${id}`} cls={DARK_GREEN_2}>
        Edit
      </ButtonLink>
      <Button cls={'red darken-2 right'}>Delete</Button>
    </div>
  );

  const renderDetails = () => {
    const { name, address, city } = details;
    if (loading) return <Spinner size={'large'} />;
    return (
      <div>
        <ul className="collection">
          <ItemUl>
            <b>Name:</b> {name}
          </ItemUl>
          <ItemUl>
            <b>Address:</b> {address}
          </ItemUl>
          <ItemUl>
            <b>City:</b> {city}
          </ItemUl>
        </ul>
        {renderButtons()}
      </div>
    );
  };

  return (
    <div>
      <Heading>Meetup Details</Heading>
      {renderDetails()}
    </div>
  );
};

export default MeetupDetails;
