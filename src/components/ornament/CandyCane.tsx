import { useContext, useMemo } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import styles from "./Ornament.module.scss";

interface CandyCaneProps {
  isHorizontallyMirrored?: boolean;
  position?: {
    top?: string;
    right?: string;
  };
  rotate?: string;
  size?: string;
}

const CandyCane = (props: CandyCaneProps) => {
  const { isHorizontallyMirrored, position, rotate, size } = props;

  const { isDarkMode } = useContext(AdventCalendarContext);

  const transform = useMemo(() => {
    let transformStyle;
    if (isHorizontallyMirrored) {
      transformStyle = "scale(-1, 1)";
    }

    return transformStyle;
  }, [isHorizontallyMirrored]);

  return (
    <svg
      className={classNames(styles.otherOrnament, { [styles["otherOrnament--dark"]]: isDarkMode })}
      style={{ top: position?.top, right: position?.right, rotate, height: size, width: size, transform: transform }}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill="#E0E0E0"
          d="M63.7,97.7c-3.7,0-6.8-3-6.8-6.8V27.1c0-0.3,0-0.6,0.1-0.9c0,0,0,0,0,0c0,0,0.2-2.8-1.2-4.3
  c-1.3-1.4-3.9-2.4-5.8-2.4c-2.8,0-4.8,1.3-6,2.5c-1.6,1.8-1.5,4.9-1.5,4.9c0.4,3.7-2.4,7.1-6.1,7.4c-3.7,0.4-7.1-2.4-7.4-6.1
  c-0.1-0.9-0.7-9.1,4.9-15.4c2.6-2.9,7.5-6.3,16-6.3c8.7,0,13.5,3.5,16.1,6.4c4.8,5.5,4.6,12.4,4.5,14.5v63.5
  C70.5,94.7,67.4,97.7,63.7,97.7z"
        />
      </g>
      <g>
        <path
          fill="#E9646A"
          d="M29,28.2c0.1,1.1,0.5,2.1,1.1,3L54.6,7c-1.4-0.2-3-0.4-4.7-0.4c-2.5,0-4.6,0.3-6.5,0.8L29.6,21
  C28.7,24.7,28.9,27.7,29,28.2z"
        />
        <polygon fill="#E9646A" points="56.9,75.9 70.5,62.5 70.5,51.9 56.9,65.3 	" />
        <path fill="#E9646A" d="M56.9,90.9c0,2.4,1.2,4.5,3.1,5.7l10.5-10.4V75.6L56.9,89.1V90.9z" />
        <polygon fill="#E9646A" points="56.9,52.2 70.5,38.7 70.5,28.1 56.9,41.5 	" />
        <path
          fill="#E9646A"
          d="M55.8,21.9c1.4,1.6,1.2,4.3,1.2,4.3c0,0,0,0,0,0c0,0.3-0.1,0.6-0.1,0.9v1.3l11.7-11.6
  c-0.6-1.3-1.5-2.6-2.6-3.9c-0.6-0.7-1.3-1.4-2.2-2.1l-9.9,9.8C54.7,21,55.3,21.3,55.8,21.9z"
        />
      </g>
    </svg>
  );
};

export default CandyCane;
