import React, { useState } from "react";
import PocketBase from "pocketbase";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";

const index = () => {
  const [counter, setCounter] = useState(true);
  const pb = new PocketBase("http://127.0.0.1:8090");
  return <></>;
};

export default index;
