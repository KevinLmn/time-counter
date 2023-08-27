import React from "react";
import PocketBase from "pocketbase";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <div>
      <Navbar />
      <Form />
    </div>
  );
};

export default index;
