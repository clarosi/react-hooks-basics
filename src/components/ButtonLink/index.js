import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonLink = props => {
  const { children, to, cls } = props;
  return (
    <Link to={to} className={`btn ${cls} waves-effect`} {...props}>
      {children}
    </Link>
  );
};

//export default ButtonLink;
