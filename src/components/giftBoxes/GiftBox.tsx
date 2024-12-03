import { useContext } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";
import Tape from "./Tape";

import styles from "./GiftBox.module.scss";

interface GiftBoxProps {
  boxPosition?: {
    top?: string;
    right?: string;
  };
  isClickable?: boolean;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const GiftBox = (props: GiftBoxProps) => {
  const { boxPosition, isClickable, isOpen, setIsOpen } = props;

  const { isDarkMode } = useContext(AdventCalendarContext);

  return (
    <div
      className={classNames(styles.box, {
        [styles["box--animated"]]: isClickable && !isOpen,
        [styles["box--dark"]]: isDarkMode,
        [styles["box--isOpen"]]: isOpen,
        [styles["box--isOpenable"]]: isClickable
      })}
      onClick={() => (setIsOpen ? setIsOpen(currentValue => !currentValue) : null)}
      style={{ top: boxPosition?.top, right: boxPosition?.right }}
    >
      <Tape isClickable={isClickable} isOpen={isOpen} />
      <div className={styles.gifts}>
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.gift}></div>
    </div>
  );
};

export default GiftBox;
