import React, { useCallback, useState } from 'react';

// Child component that accepts a callback prop
const Child = React.memo(({ onButtonClick }) => {
  console.log('Child rendered');
  return <button onClick={onButtonClick}>Click me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // useCallback memoizes the callback function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array means this callback will never change

  return (
    <div>
      <Child onButtonClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </div>
  );
};

export default Parent;
