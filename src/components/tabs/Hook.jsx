// import React from "react";

import FactorialCalculator from "../FactorialCalculator/FactorialCalculator";
import RefComponent from "../RefComponent/RefComponent";
import RenderCounter from "../RenderCounter/RenderCounter";

import SquareCalculator from "../SquareCalculator/SquareCalculator";
import TypingTracker from "../TypingTracker/TypingTracker";

const Hook = () => {
  return (
    <div>
      <RenderCounter />
      <br />
      <hr />
      <br />
      <TypingTracker />
      <br />
      <hr />
      <br />
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
