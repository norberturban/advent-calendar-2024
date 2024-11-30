import styles from "./Tape.module.scss";

interface TapeProps {
  position?: {
    top?: string;
    left?: string;
  };
  rotate?: string;
}

const Tape = (props: TapeProps) => {
  const { position, rotate } = props;

  return (
    <div className={styles.tape} style={{ top: position?.top, left: position?.left, rotate }}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.center}></div>
    </div>
  );
};

export default Tape;
