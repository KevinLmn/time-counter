import React, { useState } from "react";

type UserInfos = {
  email: string;
  password: string;
};

const UserLogInForm = ({ pb }: any) => {
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
    const authData = await pb
      .collection("users")
      .authWithPassword("YOUR_USERNAME_OR_EMAIL", "YOUR_PASSWORD");

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Email</p>
      <input name="email" type="text" onChange={setValue} />
      <p>Password</p>
      <input name="password" type="password" onChange={setValue} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserLogInForm;
