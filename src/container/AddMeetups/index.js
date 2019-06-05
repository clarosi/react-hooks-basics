import React from 'react';

import Heading from '../../components/Heading';
import Textbox from '../../components/Textbox';

const AddMeetups = () => {
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
    </div>
  );
};

export default AddMeetups;
