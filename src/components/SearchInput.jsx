import React from "react";

function SearchInput(props) {
  const { className, ...other } = props;
  const classes = `input-group mb-3 ${className}`;
  return (
    <div className={classes}>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        {...other}
      />
    </div>
  );
}

export default SearchInput;
