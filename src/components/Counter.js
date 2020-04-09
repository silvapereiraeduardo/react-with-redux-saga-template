import React from 'react';
import Button from './Button';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync
}) => (
  <div>
    <h2>Counter</h2>
    <hr />
    <div>
      <Button onClick={onDecrement}>Decrement</Button>{' '}
      <Button onClick={onIncrement}>Increment</Button>{' '}
    </div>
    <div>
      <Button onClick={onDecrementAsync}>Decrement after 1 second</Button>{' '}
      <Button onClick={onIncrementAsync}>Increment after 1 second</Button>{' '}
    </div>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;
