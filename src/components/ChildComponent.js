import React from "react";
//passing props to parent component
const ChildComponent = ({ greetHandler }) => (
  <div>
    <p>
      <button onClick={greetHandler}>Greet Daddy</button>
    </p>
    <p>
      <button onClick={() => greetHandler('Vanessa')}>Greet Arrow Daddy</button>
    </p>
  </div>
);

export default ChildComponent;
