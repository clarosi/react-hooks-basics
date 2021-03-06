import React, { useState, useEffect } from 'react';

import {
  Heading,
  Button,
  ButtonLink,
  Spinner,
  ItemUl,
  Modals
} from '../../components/Common';
import { getRequest, postRequest } from '../../shared/utils';
import {
  ROUTE_1,
  DARK_GREEN_2,
  EDIT_MEETUP_LINK,
  MEETUP_LINK
} from '../../shared/string';

const MeetupDetails = props => {
  const [details, setDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = props.match.params;

  // This is componentDidMount() or componentDidUpdate() in class component.
  // Only re-run the useEffect if details changes and you pass [details] as second params.
  useEffect(() => {
    setLoading(true);
    getMeetup();
    // console.log('componentDidMount()');
  }, []);

  // This is componentWillUnMount() in class component.
  // If your useEffect returns a function, React will run it when it is time to clean up.
  // useEffect(() => {
  //   return () => console.log('componentWillUnMount()');
  // });

  const getMeetup = async () => {
    const res = await getRequest(`${ROUTE_1}/${id}`);
    if (res.error) return setLoading(false);
    setLoading(false);
    setDetails(res);
  };

  const deleteMeetup = async () => {
    const res = await postRequest(`${ROUTE_1}/${id}`, {}, 'DELETE');
    if (res.error) return setLoading(false);
    setLoading(false);
    props.history.push(MEETUP_LINK);
  };

  const onDeleteHandler = () => {
    setLoading(true);
    setShowModal(false);
    deleteMeetup();
  };

  const onToggleHandler = () => {
    setShowModal(!showModal);
  };

  const renderButtons = () => (
    <div>
      <Button
        onClick={onToggleHandler}
        cls={'red darken-2 modal-trigger right'}
      >
        Delete
      </Button>
      <ButtonLink
        to={`${EDIT_MEETUP_LINK}/${id}`}
        cls={`${DARK_GREEN_2} mr-3 right`}
      >
        Edit
      </ButtonLink>
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

  const renderModal = () => (
    <Modals isOpen={showModal}>
      <h5>Delete {details.name}?</h5>
      <div className="modal-footer">
        <Button onClick={onToggleHandler} cls={`${DARK_GREEN_2} mr-3`}>
          Cancel
        </Button>
        <Button onClick={onDeleteHandler} cls={'red darken-2'}>
          Delete
        </Button>
      </div>
    </Modals>
  );

  return (
    <div>
      <Heading>Meetup Details</Heading>
      {renderDetails()}
      {renderModal()}
    </div>
  );
};

export default MeetupDetails;
