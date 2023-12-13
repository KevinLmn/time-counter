import clsx from "clsx";

// import TranslatableLink from "@/components/atoms/TranslatableLink/TranslatableLink";
// import { translatedLinksKeys } from "@/urls/linksTranslation";
// import { useTranslation } from "@/utils/next-utils";

import styles from "./MenuTab.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuTabProps = {
  tab: string;
  href: string;
  isActive?: boolean;
  setCurrentTab: (string) => void;
};

const MenuTab = ({
  href,
  tab,
  isActive,
  setCurrentTab,
}: MenuTabProps): JSX.Element => {
  //   const { t } = useTranslation();
  const router = useRouter();

  const currentPath = router.pathname;
  setCurrentTab(currentPath.split("/")[1]);

  return (
    <div className={styles.menuDiv}>
      <Link
        className={clsx(styles.menuChild, isActive && styles.menuChildCurrent)}
        href={href}
      >
        {/* {t(tab).toLocaleUpperCase()} */}
        {tab.toLocaleUpperCase()}
      </Link>
    </div>
  );
};

export default MenuTab;
