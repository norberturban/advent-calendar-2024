import { useContext } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import styles from "./GiftBox.module.scss";

interface GiftBoxProps {
  boxPosition?: {
    top?: string;
    right?: string;
  };
  giftBackgroundColor?: string;
}

const GiftBox = (props: GiftBoxProps) => {
  const { boxPosition, giftBackgroundColor: backgroundColor } = props;

  const { isDarkMode } = useContext(AdventCalendarContext);

  return (
    <div
      className={classNames(styles.box, { [styles["box--dark"]]: isDarkMode })}
      style={{ top: boxPosition?.top, right: boxPosition?.right }}
    >
      <div className={styles.tape}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.center}></div>
      </div>
      <div className={styles.gifts} style={{ backgroundColor }}>
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.gift} style={{ backgroundColor }}></div>
    </div>
  );
};

export default GiftBox;
