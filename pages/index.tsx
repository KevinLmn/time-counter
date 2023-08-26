import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={styles.fullPage}>
      <Link href="/user">Go to user</Link>
      
    </div>
  );
};

export default Index;
