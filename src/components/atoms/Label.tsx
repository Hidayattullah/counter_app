import React from 'react';

type LabelProps = {
  value: number;
};

const Label: React.FC<LabelProps> = ({ value }) => {
  return (
    <div className="text-xl font-bold">
      {value}
    </div>
  );
};

export default Label;
