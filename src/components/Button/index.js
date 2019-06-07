import React from 'react';

export const Button = props => {
  const { children, cls } = props;
  return (
    <button {...props} className={`btn waves-effect ${cls}`}>
      {children}
    </button>
  );
};

//export default Button;
