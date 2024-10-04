import React from 'react';
import CounterDisplay from '../organisms/CounterDisplay';

const CounterView: React.FC = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <CounterDisplay />
    </div>
  );
};

export default CounterView;
