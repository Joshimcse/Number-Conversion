import React from 'react';

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.title}>{props.title}:</label>
      <input
        id={props.title}
        type="text"
        className="form-control"
        value={props.value}
        onChange={props.handler}
      />
    </div>
  );
};

export default Input;
