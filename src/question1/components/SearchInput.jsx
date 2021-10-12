import React from "react";

function SearchInput(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        {...props}
      />
    </div>
  );
}

export default SearchInput;
