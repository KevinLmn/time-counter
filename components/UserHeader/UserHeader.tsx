import Link from "next/link";
import React from "react";

const UserHeader = () => {
  return (
    <div>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/SignUp">Sign Up</Link>
    </div>
  );
};

export default UserHeader;
