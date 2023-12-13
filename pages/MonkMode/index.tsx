import PocketBase from "pocketbase";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from "react";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  // Initialisation du tableau de tâches
  const initialTasks = [];
  for (let i = 0; i < 7; i++) {
    const dayTasks = [];
    for (let j = 0; j < 10; j++) {
      dayTasks.push(false);
    }
    initialTasks.push(dayTasks);
  }

  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (day, task) => {
    const newTasks = [...tasks];
    newTasks[day][task] = !newTasks[day][task];
    setTasks(newTasks);
  };

  return (
    <div>
      <Navbar />
      <table border={1}>
        <thead>
          <tr>
            <th>Tâches / Jours</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
          </tr>
        </thead>
        <tbody>
          {tasks[0].map((_, taskIndex) => (
            <tr key={taskIndex}>
              <td>Tâche {taskIndex + 1}</td>
              {tasks.map((dayTasks, dayIndex) => (
                <td key={dayIndex}>
                  <input
                    type="checkbox"
                    checked={dayTasks[taskIndex]}
                    onChange={() => toggleTask(dayIndex, taskIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default index;
