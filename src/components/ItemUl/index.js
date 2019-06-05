import React from 'react';

const ItemUl = props => {
  const { children } = props;
  return <li className="collection-item">{children}</li>;
};

export default ItemUl;
