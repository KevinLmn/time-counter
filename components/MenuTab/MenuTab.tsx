import clsx from "clsx";

// import TranslatableLink from "@/components/atoms/TranslatableLink/TranslatableLink";
// import { translatedLinksKeys } from "@/urls/linksTranslation";
// import { useTranslation } from "@/utils/next-utils";

import styles from "./MenuTab.module.scss";
import Link from "next/link";

type MenuTabProps = {
  tab: string;
  href: string;
  isActive?: boolean;
};

const MenuTab = ({ href, tab, isActive }: MenuTabProps): JSX.Element => {
  //   const { t } = useTranslation();

  return (
    <div className={styles.sellerMenuDiv}>
      <Link
        className={clsx(
          styles.sellerMenuChild,
          isActive && styles.sellerMenuChildCurrent
        )}
        href={href}
      >
        {/* {t(tab).toLocaleUpperCase()} */}
        {tab.toLocaleUpperCase()}
      </Link>
    </div>
  );
};

export default MenuTab;
