import React, { useState } from "react";

const useCalculatorState = () => {
  const [numberTrail, setNumberTrail] = useState([]);

  const setCalculatorState = (numberTrail, newNumber) => {
    const newNumberTrail = numberTrail;
    newNumberTrail.push(newNumber);
    setNumberTrail(newNumberTrail);
  };

  return [numberTrail, setCalculatorState];
};

export default useCalculatorState;
