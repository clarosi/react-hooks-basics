import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = props => {
  const { to, cls, icon, text } = props;
  return (
    <Link to={to} className={cls}>
      <i className={icon} /> {text}
    </Link>
  );
};

export default Navlink;
