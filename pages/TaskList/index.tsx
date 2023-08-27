import React, { useEffect, useState } from "react";
import Link from "next/link";
// import styles from "./index.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../../components/TaskForm/TaskForm";
import Navbar from "../../components/Navbar/Navbar";
import TaskList from "../../components/TaskList/TaskList";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <div>
      <Navbar />
      <TaskList />
    </div>
  );
};

export default index;
