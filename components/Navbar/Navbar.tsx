import Link from "next/link";
import React from "react";
import UserHeader from "../UserHeader/UserHeader";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Main</Link>
      <UserHeader />
    </div>
  );
};

export default Navbar;
