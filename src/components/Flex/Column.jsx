import React from 'react';

function Column(props) {
  const { className, ...other } = props;

  return (
    <div className={`col ${className}`} {...other}>
      {props.children}
    </div>
  );
}

export default Column;