import Link from "next/link";
import React from "react";
import styles from "./UserHeader.module.scss";

const UserHeader = () => {
  return (
    <div className={styles.box}>
      <Link className={styles.link} href="/SignIn">
        Sign In
      </Link>
      <Link className={styles.link} href="/SignUp">
        Sign Up
      </Link>
    </div>
  );
};

export default UserHeader;
