import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Count: {counter}
      </button>
    </div>
  );
}
