import React, { useState } from "react";

type Task = {
  activity: string;
  time: number;
  day: string;
};

const TaskForm = ({ pb }: any) => {
  const [task, setTask] = useState<Task>({
    activity: "",
    time: 0,
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
    const record = await pb
      .collection("tasks")
      .create({ ...task, day: new Date() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Activity</p>
      <input name="activity" type="text" onChange={setValue} />
      <p>Time Won</p>
      <input name="time" type="number" onChange={setValue} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
