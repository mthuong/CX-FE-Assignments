import React from 'react';

function Row(props) {
  const { className, ...other } = props;
  return (
    <div className={`row ${className}`} {...other}>
      {props.children}
    </div>
  );
}

export default Row;