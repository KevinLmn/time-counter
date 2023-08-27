import Link from "next/link";
import React from "react";
import UserHeader from "../UserHeader/UserHeader";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Main</Link>
      <Link href="/TaskList">List of tasks done</Link>
      <Link href="/LeisureActivityList">List of leisure activity done</Link>
      <Link href="/AddTask"></Link>
      <UserHeader />
    </div>
  );
};

export default Navbar;
