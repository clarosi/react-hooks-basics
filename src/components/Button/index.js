import React from 'react';

const Button = props => {
  const { children, cls } = props;
  return (
    <button {...props} className={`btn waves-effect ${cls}`}>
      {children}
    </button>
  );
};

export default Button;
