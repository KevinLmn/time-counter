import React, { useState } from "react";
import styles from "./TaskForm.module.scss";

type Task = {
  activity: string;
  time_spent: number;
  day: string;
};

const TaskForm = ({ pb, ratio }: any) => {
  const [task, setTask] = useState<Task>({
    activity: "",
    time_spent: 0,
    day: "",
  });

  const setValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (ratio) {
      const record = await pb.collection("tasks").create({
        ...task,
        time_won: Math.ceil((task.time_spent * ratio) / 100),
        day: new Date(),
      });
    } else {
      alert("Please enter a ratio");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <div>
          <p>Activity</p>
          <input name="activity" type="text" onChange={setValue} />
        </div>
        <div>
          <p>Time Spent</p>
          <input name="time_spent" type="number" onChange={setValue} />
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default TaskForm;
