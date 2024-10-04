import React from 'react';
import Button from '../atoms/Button';

type CounterButtonsProps = {
  onIncrement: () => void;
  onDecrement: () => void;
};

const CounterButtons: React.FC<CounterButtonsProps> = ({ onIncrement, onDecrement }) => {
  return (
    <div className="flex space-x-4">
      {/* Свойство onClick передается кнопке. */}
      <Button onClick={onIncrement} label="Increment" />
      <Button onClick={onDecrement} label="Decrement" />
    </div>
  );
};

export default CounterButtons;
