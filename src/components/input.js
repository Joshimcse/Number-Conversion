import React from 'react';

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.title}>{props.title} :</label>
      <input
        id={props.title}
        type="text"
        className="form-control"
        value={props.value}
        onChange={props.handlers.handler}
        onFocus={() => props.handlers.focus(props.title)}
      />
    </div>
  );
};

export default Input;
