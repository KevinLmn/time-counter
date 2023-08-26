import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import PocketBase from "pocketbase";
import TaskForm from "../components/TaskForm/TaskForm";
import UserHeader from "../components/UserHeader/UserHeader";

const Index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <div className={styles.fullPage}>
      <UserHeader />
      <TaskForm pb={pb} />
    </div>
  );
};

export default Index;
