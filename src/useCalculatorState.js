import React, { useState } from "react";

const useCalculatorState = () => {
  const [numberTrail, setNumberTrail] = useState([]);

  const setCalculatorState = (numberTrail, newNumber) =>
    setNumberTrail(numberTrail.push(newNumber));

  return { numberTrail, setCalculatorState };
};

export default useCalculatorState;
