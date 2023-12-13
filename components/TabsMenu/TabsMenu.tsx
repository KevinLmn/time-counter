// import clsx from "clsx";
import React, { Fragment } from "react";

// import { translatedLinksKeys } from "@/urls/linksTranslation";

import styles from "./TabsMenu.module.scss";
import MenuTab from "../MenuTab/MenuTab";

// type MenuPropsType<T extends translatedLinksKeys> = {
//   tabs: Record<T, TabType>;
//   currentTab: T;
// };

// type TabType = {
//   href: translatedLinksKeys;
//   tab: string;
// };

// export enum STOCK_TAB {
//   MY_STORED_LOTS = "MY_STORED_LOTS",
//   MY_STORED_LOTS_HISTORY = "MY_STORED_LOTS_HISTORY",
// }

// export const StockTabs: Record<STOCK_TAB, TabType> = {
//   [STOCK_TAB.MY_STORED_LOTS]: {
//     href: "MY_STORED_LOTS",
//     tab: "lots-en-stock:myStoredLots",
//   },
//   [STOCK_TAB.MY_STORED_LOTS_HISTORY]: {
//     href: "MY_STORED_LOTS_HISTORY",
//     tab: "lots-en-stock:myStoredLotsHistory",
//   },
// };

export enum MENU_TAB {
  TASK_LIST = "TASK_LIST",
  LEISURE_ACTIVITY_LIST = "LEISURE_ACTIVITY_LIST",
  ADD_TASK = "ADD_TASK",
  MONK_MODE = "MONK_MODE",
}

export const MenuTabs = {
  ["TASK_LIST"]: {
    href: "TASK_LIST",
    tab: "Task List",
  },
  ["LEISURE_ACTIVITY_LIST"]: {
    href: "LEISURE_ACTIVITY_LIST",
    tab: "Leisure Activity List",
  },
  ["ADD_TASK"]: {
    href: "ADD_TASK",
    tab: "Add Task",
  },
  ["MONK_MODE"]: {
    href: "MONK_MODE",
    tab: "Monk Mode",
  },
};

const TabsMenu = ({ tabs, currentTab }): JSX.Element => {
  const tabsKeys = Object.keys(tabs);

  return (
    <div className={styles.sellerMenu}>
      {tabsKeys.map((tabKey, index) => {
        const element = tabs[tabKey];

        return (
          <Fragment key={element.href}>
            <MenuTab
              href={element.href}
              tab={element.tab}
              isActive={currentTab === element.href}
            />
            {index !== tabsKeys.length - 1 && (
              <div className={styles.outline} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default TabsMenu;
