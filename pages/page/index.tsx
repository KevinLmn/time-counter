import React, { useState } from "react";
import PocketBase from "pocketbase";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";

const index = () => {
  const [counter, setCounter] = useState(true);
  const pb = new PocketBase("http://127.0.0.1:8090");
  function inverse(bool) {
    return !bool;
  }
  function elseIf(bool) {
    if (bool === true) return "table";
    return "bouteille";
  }
  return (
    <>
      <p className={styles.salut}>Salut</p>
      {counter === true ? <div> table </div> : <div> bouteille </div>}

      <Button
        variant="contained"
        className={styles.button}
        onClick={() => {
          setCounter(inverse(counter));
          console.log(counter === true ? "table" : "bouteille");
        }}
      >
        fonction else if
      </Button>

      <Button
        variant="contained"
        className={styles.button}
        onClick={() => {
          setCounter(inverse(counter));
          console.log(counter === true ? "table" : "bouteille");
        }}
      >
        Ne clique pas ici
      </Button>
      <p>{counter}</p>
      <Button
        variant="contained"
        className={styles.button}
        onClick={() => {
          setCounter(0);
          console.log(counter);
        }}
      >
        = 0
      </Button>
      <p>{counter}</p>
      <Button
        variant="contained"
        className={styles.button}
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Clique ici
      </Button>
      <p>{counter}</p>
    </>
  );
};

export default index;
