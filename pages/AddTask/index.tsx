import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../../components/TaskForm/TaskForm";
import Navbar from "../../components/Navbar/Navbar";
import RatioSelector from "../../components/RatioSelector/RatioSelector";

const Index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [ratio, setRatio] = useState<number>(null);

  return (
    <div className={styles.fullPage}>
      <Navbar />
      <div className={styles.ratioAndTaskForm}>
        <RatioSelector ratio={ratio} setRatio={setRatio} />
        <TaskForm pb={pb} />
      </div>
    </div>
  );
};

export default Index;
