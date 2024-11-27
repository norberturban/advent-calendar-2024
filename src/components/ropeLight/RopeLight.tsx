import { useContext } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import styles from "./RopeLight.module.scss";

interface RopeLightProps {
  lightBulbCount?: number;
  position?: {
    top?: string;
    right?: string;
  };
}

const RopeLight = (props: RopeLightProps) => {
  const { lightBulbCount, position } = props;

  const { isDarkMode } = useContext(AdventCalendarContext);

  return (
    <ul
      className={classNames(styles.ropeLight, { [styles["ropeLight--dark"]]: isDarkMode })}
      style={{ top: position?.top, right: position?.right }}
    >
      {Array(lightBulbCount)
        .fill("")
        .map((_, index) => (
          <li key={index}></li>
        ))}
    </ul>
  );
};

export default RopeLight;
