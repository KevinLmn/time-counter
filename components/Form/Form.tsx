import React, { useState } from "react";
import PocketBase from "pocketbase";

type UserInfos = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const Form = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [count, setCount] = useState<number>(0);
  const [userInfos, setUserInfos] = useState<UserInfos>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const setValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInfos({ ...userInfos, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(userInfos);
    const record = await pb.collection("users").create(userInfos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Email</p>
      <input name="email" type="text" onChange={setValue} />
      <p>Password</p>
      <input name="password" type="password" onChange={setValue} />
      <p>Password Confirm</p>
      <input name="passwordConfirm" type="password" onChange={setValue} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
