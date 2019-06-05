import React from 'react';

const Textbox = props => {
  const { sN, txtId, clsLbl, clsTxt, lblText, value, onChange } = props;
  return (
    <div className={`input-field col ${sN || 's5'}`}>
      <input
        id={txtId}
        type="text"
        className={`validate ${clsTxt}`}
        value={value}
        onChange={onChange}
      />
      <label className={`active ${clsLbl}`} htmlFor={txtId}>
        {lblText}
      </label>
    </div>
  );
};

export default Textbox;
