import React from "react"

import Input from "./input"

const Calc = props => {
  console.log(props)
  let { data, method } = props
  return (
    <div className="col-md-5">
      <h2>Hexadecimal System</h2>
      <Input title="Deciaml" value={data.decimal} />
      <Input title="Binary" value={data.binary} method={method.binaryHandler} />
      <Input title="Octal" value={data.octal}/>
      <Input title="Hexa" value={data.hexa}/>
    </div>
  )
}

export default Calc
