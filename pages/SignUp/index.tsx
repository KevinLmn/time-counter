import UserSignInForm from "../../components/UserSignInForm/UserSignInForm";
import React from "react";
import PocketBase from "pocketbase";
import TaskForm from "../../components/TaskForm/TaskForm";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <>
      <UserSignInForm pb={pb} />
    </>
  );
};

export default index;
