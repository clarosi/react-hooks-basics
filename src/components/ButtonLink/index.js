import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = props => {
  const { children, to, cls } = props;
  return (
    <Link {...props} to={to} className={`btn ${cls} waves-effect`}>
      {children}
    </Link>
  );
};

export default ButtonLink;
