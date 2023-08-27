import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import styles from "./index.module.scss";
import Table from "../../components/Table/Table";
import Navbar from "../../components/Navbar/Navbar";

type LeisureActivity = {
  activity: string;
  time_spent: number;
  day: string;
};

const index = () => {
  const [LeisureActivityList, setLeisureActivityList] = useState<
    LeisureActivity[]
  >([]);
  const pb = new PocketBase("http://127.0.0.1:8090");
  const fetchData = async () => {
    const leisureActivities: LeisureActivity[] = await pb
      .collection("leisure")
      .getFullList({});
    setLeisureActivityList(leisureActivities);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Table activities={LeisureActivityList} />
    </div>
  );
};

export default index;
