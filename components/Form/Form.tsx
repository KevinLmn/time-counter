import React, { useState } from "react";

type UserInfos = {
  email: string;
  password: string;
  passwordConfirm?: string;
};

const Form = ({ pb, signUp }: any) => {
  const [userInfos, setUserInfos] = useState<UserInfos>({
    email: "",
    password: "",
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
      {signUp && (
        <div>
          <p>Password Confirm</p>
          <input name="passwordConfirm" type="password" onChange={setValue} />
        </div>
      )}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
