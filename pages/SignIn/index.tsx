import React from "react";
import PocketBase from "pocketbase";
import Form from "../../components/Form/Form";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <div>
      <Form />
    </div>
  );
};

export default index;
