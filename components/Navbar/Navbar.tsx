import React from "react";
import UserHeader from "../UserHeader/UserHeader";
import styles from "./Navbar.module.scss";
import TabsMenu from "../TabsMenu/TabsMenu";

const Navbar = () => {
  enum MENU_TAB {
    TASK_LIST = "TASK_LIST",
    LEISURE_ACTIVITY_LIST = "LEISURE_ACTIVITY_LIST",
    ADD_TASK = "ADD_TASK",
    MONK_MODE = "MONK_MODE",
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
      <TabsMenu tabs={MenuTabs} currentTab={MENU_TAB.TASK_LIST} />
    </>
  );
};

export default Navbar;
