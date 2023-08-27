import React from "react";
import styles from "./Table.module.scss";

type TableProps = {
  isTaskTable?: boolean;
  activities: any;
};

const Table = ({ isTaskTable, activities }: TableProps) => {
  const formatDate = (date: string) => {
    const dateObject = new Date(date);

    const localDate = dateObject.toLocaleDateString("fr-FR");
    const localTime = dateObject.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${localDate} ${localTime}`;
  };
  return (
    <div>
      {activities.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Activité</th>
              <th>Jour</th>
              <th>Temps passé</th>
              {isTaskTable && <th>Temps gagné</th>}
            </tr>
          </thead>
          <tbody>
            {activities.length > 0 &&
              activities.map((task, index) => (
                <tr key={index}>
                  <td>{task.activity}</td>
                  <td>{formatDate(task.day)}</td>
                  <td>{task.time_spent}</td>
                  {isTaskTable && <td>{task.time_won}</td>}
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No activity</p>
      )}
    </div>
  );
};

export default Table;
