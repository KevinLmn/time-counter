import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TaskList.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../../components/TaskForm/TaskForm";
import Navbar from "../../components/Navbar/Navbar";
import Table from "../Table/Table";

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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table activities={taskList} isTaskTable={true} />
    </div>
  );
};

export default TaskList;
