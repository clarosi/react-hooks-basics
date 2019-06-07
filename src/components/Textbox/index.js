import React from 'react';

import { EDIT_ICON } from '../../shared/string';

export const Textbox = props => {
  const {
    sN,
    txtId,
    clsLbl,
    clsTxt,
    lblText,
    value,
    onChange,
    icon,
    validate
  } = props;
  return (
    <div className={`input-field col ${sN || 's5'}`}>
      <i className={`prefix ${icon ? icon : EDIT_ICON}`} />
      <input
        id={txtId}
        type="text"
        className={`${validate} ${clsTxt}`}
        value={value}
        onChange={onChange}
      />
      <label className={`active ${clsLbl}`} htmlFor={txtId}>
        {lblText}
      </label>
    </div>
  );
};

//export default Textbox;
