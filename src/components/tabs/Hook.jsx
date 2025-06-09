// import React from "react";

import FactorialCalculator from "../FactorialCalculator/FactorialCalculator";
import RefComponent from "../RefComponent/RefComponent";

import SquareCalculator from "../SquareCalculator/SquareCalculator";

const Hook = () => {
  return (
    <div>
      <RefComponent />
      <br />
      <hr />
      <br />
      <FactorialCalculator />
      <br />
      <hr />
      <br />
      <SquareCalculator />
    </div>
  );
};

export default Hook;
