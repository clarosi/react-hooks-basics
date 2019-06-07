import React, { useState } from 'react';

import { Heading, Button, Spinner, Textbox } from '../../components/Common';
import { validate, postRequest, manageValidation } from '../../shared/utils';
import {
  ROUTE_1,
  DARK_GREEN_2,
  MEETUP_LINK,
  EDIT_ICON,
  TIMES_ICON,
  CHECK_ICON
} from '../../shared/string';

const AddMeetups = props => {
  const [btnStatus, setBtnStatus] = useState('disabled');
  const [loading, setLoading] = useState(false);
  const [controls, setControls] = useState({
    name: {
      value: '',
      valid: false,
      validationRules: {
        required: true,
        minLength: 3
      },
      touch: false
    },
    address: {
      value: '',
      valid: false,
      validationRules: {
        required: true,
        minLength: 3
      },
      touch: false
    },
    city: {
      value: '',
      valid: false,
      validationRules: {
        required: true,
        minLength: 3
      },
      touch: false
    }
  });

  const { name, address, city } = controls;

  const getClassName = control => {
    const { valid, touch } = control;
    return !valid && touch ? 'invalid' : null;
  };
  const getIconName = control => {
    const { valid, touch } = control;
    if (!valid && !touch) return EDIT_ICON;
    if (!valid && touch) return TIMES_ICON;
    return CHECK_ICON;
  };

  const addMeetup = async data => {
    const res = await postRequest(ROUTE_1, data);
    if (res.error) setLoading(false);
    setLoading(false);
    props.history.push(MEETUP_LINK);
  };

  const onChangeHandler = e => {
    const { value, id } = e.target;
    let newControls = { ...controls };
    newControls[id].value = value;
    const connectedValue = manageValidation(id, value, newControls);
    newControls = {
      ...newControls,
      [id]: {
        ...newControls[id],
        value,
        valid: validate(value, newControls[id].validationRules, connectedValue),
        touch: true
      }
    };
    setControls(newControls);
    const { name, address, city } = newControls;
    if (!name.valid || !address.valid || !city.valid) {
      return setBtnStatus('disabled');
    }
    return setBtnStatus(null);
  };

  const onSubmitHandler = () => {
    const newMeetup = {
      name: name.value,
      address: address.value,
      city: city.value
    };
    setLoading(true);
    addMeetup(newMeetup);
  };

  const renderButton = () => {
    if (loading) return <Spinner />;
    return (
      <Button cls={`${btnStatus} ${DARK_GREEN_2}`} onClick={onSubmitHandler}>
        Add
      </Button>
    );
  };

  return (
    <div>
      <Heading>Add Meetups</Heading>
      <form autoComplete="off">
        <div className="row">
          <Textbox
            txtId={'name'}
            lblText={'Name'}
            icon={getIconName(name)}
            clsTxt={getClassName(name)}
            sN={'s6'}
            value={name.value}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className="row">
          <Textbox
            txtId={'address'}
            lblText={'Address'}
            icon={getIconName(address)}
            clsTxt={getClassName(address)}
            sN={'s6'}
            value={address.value}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className="row">
          <Textbox
            txtId={'city'}
            lblText={'City'}
            icon={getIconName(city)}
            clsTxt={getClassName(city)}
            sN={'s6'}
            value={city.value}
            onChange={e => onChangeHandler(e)}
          />
        </div>
      </form>
      {renderButton()}
    </div>
  );
};

export default AddMeetups;
