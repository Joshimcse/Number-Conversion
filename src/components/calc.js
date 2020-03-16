import React from 'react';

import Input from './input';

const Calc = props => {
  let { data, methods } = props;
  return (
    <div className="col-md-5">
      <h2>Hexadecimal System</h2>
      <Input
        title="Deciaml"
        value={data.decimal}
        handler={methods.decimalHandler}
      />
      <Input
        title="Binary"
        value={data.binary}
        handler={methods.binaryHandler}
      />
      <Input title="Octal" value={data.octal} handler={methods.octalHandler} />
      <Input title="Hexa" value={data.hexa} handler={methods.hexaHandler} />
    </div>
  );
};
export default Calc;
