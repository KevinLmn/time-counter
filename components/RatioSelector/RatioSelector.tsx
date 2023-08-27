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
      <p>Select Ratio in %</p>

      <input
        name="ratio"
        type="number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setRatio(Math.ceil(parseInt(event.target.value)));
        }}
      />

      <p>
        60 minutes of activity will be equal to {Math.ceil((60 * ratio) / 100)}{" "}
        minuts of leisure
      </p>
    </div>
  );
};

export default RatioSelector;
