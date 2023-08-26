import React from "react";
import UserSignInForm from "../../components/UserSignInForm/UserSignInForm";
import PocketBase from "pocketbase";

const index = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");

  return (
    <div>
      <UserSignInForm pb={pb} />
    </div>
  );
};

export default index;
