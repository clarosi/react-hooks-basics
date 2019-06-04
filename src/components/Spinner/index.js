import React from 'react';

const Spinner = props => {
  const { size, color } = props;
  return (
    <div className={`preloader-wrapper ${size || 'small'} active`}>
      <div className={`spinner-layer spinner-${color || 'green'}-only`}>
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};
export default Spinner;
