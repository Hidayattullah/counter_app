import React from 'react';

const DescriptionComponent: React.FC = () => {
  return (
    <div className="flex flex-col text-sm font-[family-name:var(--font-geist-mono)]">
      <h2 className="font-bold mb-4">В результате / Result:</h2>
      <ol className="list-inside list-decimal mb-4">
        <li>Атомы: Button, Text / Atoms: Button, Text</li>
        <li>Молекулы: ButtonText / Molecules: ButtonText</li>
        <li>
          Организм: counter - предоставляет клиенту контекст, провайдер, кнопки
          декремент и инкремент, хуки с логикой / Organism: counter provides the
          client with context, provider, increment and decrement buttons, hooks
          with logic
        </li>
        <li>
          Представления: CounterView - показывает счетчик и кнопки increment &
          decrement / View: CounterView shows the counter and increment &
          decrement buttons
        </li>
        <li>
          В нужном месте CounterView обварачиваем в провайдер и получаем
          результат / Wrap CounterView in the provider in the appropriate place
          and get the result
        </li>
      </ol>

      <h3 className="font-bold mb-2">Дополнительно / Additional (1):</h3>
      <p className="mb-4">
        Используйте хук декоратор debounce, который выполняет необходимую
        функцию не более одного раза в N мс для функций increment и decrement. /
        Use the debounce hook to perform the necessary function no more than
        once every N ms for increment and decrement functions.
      </p>

      <h3 className="font-bold mb-2">Дополнительно / Additional (2):</h3>
      <ul className="list-disc list-inside">
        <li>
          Каждый компонент атома, молекулы, организма должны быть абстрактными
          (больше свободы клиентам) / Each atom, molecule, organism component
          should be abstract (more freedom for clients)
        </li>
        <li>
          Каждый компонент, метод, хук должны не нарушать принципы single
          responsibility и KISS / Each component, method, and hook should adhere
          to the principles of single responsibility and KISS (keep it simple
          and straightforward)
        </li>
        <li>
          Организм должен быть инкапсулированным, замкнутым, клиентские
          компоненты, методы, хуки должны быть доступны только через файл index
          / The organism should be encapsulated and self-contained, and client
          components, methods, and hooks should only be accessible through the
          index file
        </li>
        <li>
          Оптимизируйте нужные компоненты от лишнего рендеринга используя хуки
          useCallback, useMemo / Optimize necessary components from unnecessary
          re-rendering by using useCallback and useMemo hooks
        </li>
      </ul>
    </div>
  );
};

export default DescriptionComponent;
