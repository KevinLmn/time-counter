import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  timeOfLeisureLeft,
  timerIsActive,
  setTimeOfLeisureLeft,
}) => {
  useEffect(() => {
    if (timerIsActive) {
      setTimeout(() => {
        setTimeOfLeisureLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [timeOfLeisureLeft, timerIsActive]);
  const minutes = Math.floor(timeOfLeisureLeft / 60);
  const seconds = timeOfLeisureLeft % 60;

  return (
    <div>
      <h1>Countdown Timer</h1>
      {timeOfLeisureLeft > 0 ? (
        <div>
          <p>
            Temps restant : {minutes} minute{minutes !== 1 ? "s" : ""} {seconds}{" "}
            seconde{seconds !== 1 ? "s" : ""}
          </p>
        </div>
      ) : (
        <p>Temps écoulé !</p>
      )}
    </div>
  );
};

export default CountdownTimer;
