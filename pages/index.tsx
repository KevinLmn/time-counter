import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../components/TaskForm/TaskForm";
import UserHeader from "../components/UserHeader/UserHeader";
import Navbar from "../components/Navbar/Navbar";
import RatioSelector from "../components/RatioSelector/RatioSelector";
import CountdownTimer from "../components/CountdownTimer/CounterDownTimer";
import { eventNames } from "process";

const Index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [initialTime, setInitialTime] = useState<number>(0);
  const [timeOfLeisureLeft, setTimeOfLeisureLeft] = useState<number>(0);
  const [timerIsActive, setTimerIsActive] = useState<boolean>(false);
  const [leisureActivity, setLeisureActivity] = useState<string>("");

  const getTimeSpent = (table, property) => {
    return table.reduce((acc, curr) => {
      return acc + curr[property];
    }, 0);
  };

  const fetchData = async () => {
    const tasks = await pb.collection("tasks").getFullList({});
    const leisureActivities = await pb.collection("leisure").getFullList({});
    const timeSpentOnTasks = getTimeSpent(tasks, "time_won");
    const timeSpentOnLeisure = getTimeSpent(leisureActivities, "time_spent");
    setTimeOfLeisureLeft((timeSpentOnTasks - timeSpentOnLeisure) * 60);
  };

  const handleClick = async () => {
    setInitialTime(timeOfLeisureLeft);
    if (leisureActivity !== "") {
      setTimerIsActive(!timerIsActive);
    } else {
      alert("Please enter a leisure activity");
    }
    console.log(timerIsActive, initialTime, timeOfLeisureLeft);
    if (initialTime !== timeOfLeisureLeft && timerIsActive) {
      const data = {
        activity: leisureActivity,
        time_spent: Math.ceil((initialTime - timeOfLeisureLeft) / 60),
        day: new Date(),
      };

      const record = await pb.collection("leisure").create(data);
      console.log(record);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.fullPage}>
      <Navbar />
      <button onClick={handleClick}>Timer</button>
      <br />
      <CountdownTimer
        timeOfLeisureLeft={timeOfLeisureLeft}
        setTimeOfLeisureLeft={setTimeOfLeisureLeft}
        timerIsActive={timerIsActive}
      />
      <br />
      <input
        type="string"
        onChange={(event) => {
          setLeisureActivity(event.target.value);
        }}
      />
    </div>
  );
};

export default Index;
