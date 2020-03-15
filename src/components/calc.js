import React from "react"

const Calc = () => {
  return (
    <div class="col-md-5">
      <h2>Hexadecimal System</h2>
      <div class="form-group">
        <label for="hex">Hexadecimal:</label>
        <input type="text" class="form-control"/>
      </div>
      <div class="form-group">
        <label for="usr">Binary:</label>
        <input type="bnr" class="form-control" id="h2b" disabled />
      </div>
      <div class="form-group">
        <label for="dcm">Decimal:</label>
        <input type="text" class="form-control" id="h2d" disabled />
      </div>
      <div class="form-group">
        <label for="oct">Octal:</label>
        <input type="text" class="form-control" id="h2o" disabled />
      </div>
    </div>
  )
}

export default Calc
