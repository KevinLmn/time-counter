import React from "react";

interface RatioSelectorProps {
  setRatio: (ratio: number) => void;
}

const RatioSelector: React.FC<RatioSelectorProps> = ({
  setRatio,
}: RatioSelectorProps) => {
  return (
    <div>
      <input
        name="ratio"
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRatio(parseInt(event.target.value));
        }}
      />
    </div>
  );
};

export default RatioSelector;
