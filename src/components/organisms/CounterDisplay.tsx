import React, { useState, useCallback } from 'react';
import CounterButtons from '../molecules/CounterButtons';
import Label from '../atoms/Label';
import useDebounce from '@/utils/useDebounce';

const CounterDisplay: React.FC = () => {
  // Установите состояние счетчика индекса
  const [index, setIndex] = useState(0);

  // Используйте useCallback, чтобы предотвратить ненужный повторный рендеринг.
  const increment = useCallback(() => setIndex((prev) => prev + 1), []);
  const decrement = useCallback(() => setIndex((prev) => prev - 1), []);

  // Хук Debounce для задержки выполнения функции
  const debouncedIncrement = useDebounce(increment, 500);
  const debouncedDecrement = useDebounce(decrement, 500);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Метка для отображения значения индекса */}
      <Label value={index} />
      {/* Компонент CounterButtons с функциями инкремента и декремента удален. */}
      <CounterButtons onIncrement={debouncedIncrement} onDecrement={debouncedDecrement} />
    </div>
  );
};

export default CounterDisplay;
