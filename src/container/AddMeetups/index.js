import React, { useState } from 'react';

import Heading from '../../components/Heading';
import Textbox from '../../components/Textbox';
import Button from '../../components/Button';
import { DARK_GREEN_2 } from '../../shared/string/meterialCls';

const AddMeetups = () => {
  const [btnStatus, setBtnStatus] = useState('disabled');

  const onChangeHandler = e => {
    console.log(e.target.value, e.target.id);
  };

  return (
    <div>
      <Heading>Add Meetups</Heading>
      <div className="row">
        <Textbox
          txtId={'txtName'}
          lblText={'Name'}
          sN={'s6'}
          value={''}
          onChange={e => onChangeHandler(e)}
        />
      </div>
      <div className="row">
        <Textbox
          txtId={'txtAddress'}
          lblText={'Address'}
          sN={'s6'}
          value={''}
          onChange={e => onChangeHandler(e)}
        />
      </div>
      <div className="row">
        <Textbox
          txtId={'txtCity'}
          lblText={'City'}
          sN={'s6'}
          value={''}
          onChange={e => onChangeHandler(e)}
        />
      </div>
      <Button cls={`${btnStatus} ${DARK_GREEN_2}`}>Save</Button>
    </div>
  );
};

export default AddMeetups;
