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

const TabsMenu = ({ tabs, currentTab, setCurrentTab }): JSX.Element => {
  const tabsKeys = Object.keys(tabs);

  return (
    <div className={styles.sellerMenu}>
      {tabsKeys.map((tabKey, index) => {
        const element = tabs[tabKey];
        console.log(element.href, currentTab);

        return (
          <Fragment key={element.href}>
            <MenuTab
              href={element.href}
              tab={element.tab}
              isActive={currentTab === element.href}
              setCurrentTab={setCurrentTab}
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
