import React, { useState, useEffect } from 'react';

import {
  Heading,
  Button,
  ButtonLink,
  Spinner,
  ItemUl
} from '../../components/Common';
import { getRequest } from '../../shared/utils';
import { ROUTE_1, DARK_GREEN_2, EDIT_MEETUP_LINK } from '../../shared/string';

const MeetupDetails = props => {
  const [details, setDetails] = useState({});
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

  const getMeetupDetails = async () => {
    const res = await getRequest(`${ROUTE_1}/${id}`);
    if (res.error) {
      setLoading(false);
      return;
    }
    setLoading(false);
    setDetails(res);
  };

  const onDeleteHandler = () => {
    console.log('Delete');
  };

  const renderButtons = () => (
    <div>
      <ButtonLink to={`${EDIT_MEETUP_LINK}/${id}`} cls={DARK_GREEN_2}>
        Edit
      </ButtonLink>
      <Button onClick={onDeleteHandler} cls={'red darken-2 right'}>
        Delete
      </Button>
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
