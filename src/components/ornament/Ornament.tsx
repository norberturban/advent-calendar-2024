import classNames from "classnames";

import styles from "./Ornament.module.scss";

interface OrnamentProps {
  className?: string;
  day: number;
}

const Ornament = (props: OrnamentProps) => {
  const { className, day } = props;

  const handleClick = () => {
    console.log("Clicked on day ", day);
  };

  return (
    <div className={classNames(styles.ornament, styles[`ornament${day}`], className)} onClick={handleClick}>
      <div className={styles.pendant}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Ornament;
