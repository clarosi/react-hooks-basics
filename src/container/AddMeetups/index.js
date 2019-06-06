import React, { useState } from 'react';

import Heading from '../../components/Heading';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

import validate from '../../shared/utils/validate';
import manageValidation from '../../shared/utils/manageValidation';
import { postRequest } from '../../shared/utils/apiCalls';
import { DARK_GREEN_2 } from '../../shared/string/meterialCls';
import { MEETUP_LINK } from '../../shared/string/menuLinks';

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

  const isValid = (valid, touch) => (!valid && touch ? 'invalid' : null);

  const addMeetup = async data => {
    const res = await postRequest('http://localhost:3000/api/meetups', data);
    if (res.error) {
      setLoading(false);
      return;
    }
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
      <form>
        <div className="row">
          <Textbox
            txtId={'name'}
            lblText={'Name'}
            clsTxt={isValid(name.valid, name.touch)}
            sN={'s6'}
            value={name.value}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className="row">
          <Textbox
            txtId={'address'}
            lblText={'Address'}
            clsTxt={isValid(address.valid, address.touch)}
            sN={'s6'}
            value={address.value}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className="row">
          <Textbox
            txtId={'city'}
            lblText={'City'}
            clsTxt={isValid(city.valid, city.touch)}
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
