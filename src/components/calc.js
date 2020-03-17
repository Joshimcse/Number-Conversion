import React from 'react';

import Input from './input';

const Calc = props => {
  let { active, data, handlers } = props;
  return (
    <div className="col-md-5">
      <h2>{active} System</h2>
      <Input
        title="Decimal"
        isDisabled={active === 'Decimal' ? false : true}
        value={data.decimal}
        handlers={{
          handler: handlers.decimalHandler,
          focus: handlers.fieldsHandler,
        }}
      />
      <Input
        title="Binary"
        isDisabled={active === 'Binary' ? false : true}
        value={data.binary}
        handlers={{
          handler: handlers.binaryHandler,
          focus: handlers.fieldsHandler,
        }}
      />
      <Input
        title="Octal"
        isDisabled={active === 'Octal' ? false : true}
        value={data.octal}
        handlers={{
          handler: handlers.octalHandler,
          focus: handlers.fieldsHandler,
        }}
      />
      <Input
        title="Hexadecimal"
        isDisabled={active === 'Hexadecimal' ? false : true}
        value={data.hexa}
        handlers={{
          handler: handlers.hexaHandler,
          focus: handlers.fieldsHandler,
        }}
      />
    </div>
  );
};
export default Calc;
