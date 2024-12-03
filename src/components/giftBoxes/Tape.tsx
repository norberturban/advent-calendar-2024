import classNames from "classnames";

import styles from "./Tape.module.scss";

interface TapeProps {
  isClickable?: boolean;
  isOpen?: boolean;
  position?: {
    top?: string;
    left?: string;
  };
  rotate?: string;
}

const Tape = (props: TapeProps) => {
  const { isClickable, isOpen, position, rotate } = props;

  return (
    <div
      className={classNames(styles.tape, {
        [styles["tape--animated"]]: isClickable && !isOpen,
        [styles["tape--isOpen"]]: isOpen
      })}
      style={{ top: position?.top, left: position?.left, rotate }}
    >
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.center}></div>
    </div>
  );
};

export default Tape;
