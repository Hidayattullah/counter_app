import React, { useState, useCallback } from 'react';
import CounterButtons from '../molecules/CounterButtons';
import Label from '../atoms/Label';
import useDebounce from '@/utils/useDebounce';

const CounterDisplay: React.FC = () => {
  // Mengatur state untuk index counter
  const [index, setIndex] = useState(0);

  // Menggunakan useCallback untuk mencegah rendering ulang yang tidak diperlukan
  const increment = useCallback(() => setIndex((prev) => prev + 1), []);
  const decrement = useCallback(() => setIndex((prev) => prev - 1), []);

  // Hook debounce untuk menunda eksekusi fungsi
  const debouncedIncrement = useDebounce(increment, 500);
  const debouncedDecrement = useDebounce(decrement, 500);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Label untuk menampilkan nilai index */}
      <Label value={index} />
      {/* Komponen CounterButtons dengan fungsi increment dan decrement ter-debounce */}
      <CounterButtons onIncrement={debouncedIncrement} onDecrement={debouncedDecrement} />
    </div>
  );
};

export default CounterDisplay;
