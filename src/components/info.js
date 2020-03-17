import React from 'react';

const Info = props => {
  return (
    <div className="col-md-5 info" id="">
      <h3>{props.data.title} System</h3>
      <p>{props.data.desc}</p>
    </div>
  );
};

export default Info;
