import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [currentValue, setValue] = useState(value);

  const valueIncrement = () => {
    setValue(currentValue + 1);
  };

  const valuReset = () => setValue(value);
  
  // if we don't have reference or access to 'currentValue' we could access
  // it by creating the following functions that return the new value

  //   const valueIncrement = () => {
  //     setValue((val) => {
  //       return val + 1;
  //     });
  //   };

  // If we use () in the function button we have to return a function
  const sayHi = () => {
    return () => console.log("Hi!");
  };

  const sayBye = () => {
    return console.log("Bye!");
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {currentValue}</h2>
      <button onClick={valueIncrement}>+1</button>
      {/* we can do the function directly on the button */}
      <button onClick={() => setValue(currentValue - 1)}>-1</button>
      <button onClick={valuReset}>RESET</button>
      <button onClick={sayHi()}>Hi</button>
      <button onClick={sayBye}>Bye</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};

export default CounterApp;
