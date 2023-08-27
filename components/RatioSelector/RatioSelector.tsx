import React from "react";
import styles from "./RatioSelector.module.scss";

interface RatioSelectorProps {
  ratio: number;
  setRatio: (ratio: number) => void;
}

const RatioSelector: React.FC<RatioSelectorProps> = ({
  ratio,
  setRatio,
}: RatioSelectorProps) => {
  return (
    <div className={styles.ratioForm}>
      <p>Select Ratio</p>

      <input
        name="ratio"
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRatio(parseInt(event.target.value));
        }}
      />
      {ratio && (
        <p>
          60 minutes of activity will be equal to {Math.ceil(60 * ratio)} of
          leisure
        </p>
      )}
    </div>
  );
};

export default RatioSelector;
