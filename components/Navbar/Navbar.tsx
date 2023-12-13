import React, { useState } from "react";
import UserHeader from "../UserHeader/UserHeader";
import styles from "./Navbar.module.scss";
import TabsMenu from "../TabsMenu/TabsMenu";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("");
  enum MENU_TAB {
    TASK_LIST = "TaskList",
    LEISURE_ACTIVITY_LIST = "LeisureActivityList",
    ADD_TASK = "AddTask",
    MONK_MODE = "MonkMode",
  }

  const MenuTabs = {
    ["TASK_LIST"]: {
      href: "TaskList",
      tab: "Task List",
    },
    ["LEISURE_ACTIVITY_LIST"]: {
      href: "LeisureActivityList",
      tab: "Leisure Activity ",
    },
    ["ADD_TASK"]: {
      href: "AddTask",
      tab: "Add Task",
    },
    ["MONK_MODE"]: {
      href: "MonkMode",
      tab: "Monk Mode",
    },
  };
  return (
    <>
      <div className={styles.navbar}>
        <UserHeader />
      </div>
      <TabsMenu
        tabs={MenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </>
  );
};

export default Navbar;
