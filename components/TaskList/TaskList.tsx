import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TaskList.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../../components/TaskForm/TaskForm";
import Navbar from "../../components/Navbar/Navbar";

type Task = {
  activity: string;
  time_spent: number;
  time_won: number;
  day: string;
};

const TaskList = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const [taskList, setTaskList] = useState<Task[]>([]);

  const fetchData = async () => {
    const tasks: Task[] = await pb.collection("tasks").getFullList({});
    setTaskList(tasks);
    console.log(tasks, taskList);
    console.log("list", taskList);

    // await setTaskList(tasks);
    // console.log(tasks, taskList);
    // console.log(taskList.length);
  };

  const formatDate = (date: string) => {
    const dateObject = new Date(date);

    const localDate = dateObject.toLocaleDateString("fr-FR");
    const localTime = dateObject.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${localDate} ${localTime}`;
  };

  useEffect(() => {
    const tasks: any = fetchData();
  }, []);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Activité</th>
            <th>Jour</th>
            <th>Temps passé</th>
            <th>Temps gagné</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length > 0 &&
            taskList.map((task: Task, index: number) => (
              <tr key={index}>
                <td>{task.activity}</td>
                <td>{formatDate(task.day)}</td>
                <td>{task.time_spent}</td>
                <td>{task.time_won}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
