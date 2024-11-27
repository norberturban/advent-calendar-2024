import { useContext, useMemo } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import styles from "./Ornament.module.scss";

interface SantaSockProps {
  isHorizontallyMirrored?: boolean;
  position?: {
    top?: string;
    right?: string;
  };
  rotate?: string;
  size?: string;
}

const SantaSock = (props: SantaSockProps) => {
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
      <rect display="none" fill="#468967" width="100" height="100" />
      <path
        fill="#E9656B"
        d="M41.1,16.1h44v58.6c0,0,3,22.9-22.9,22.9s-24.7,0-24.7,0s-23.1,1.1-23.1-16.2s17.9-16.7,21.8-16.7
s5.2-1.7,5.2-7.8S41.1,16.1,41.1,16.1z"
      />
      <path fill="#DCDBDB" d="M40.2,7c0,0-6.8,0.3-6.8,6.8s7.7,6.5,7.7,6.5h44c0,0,5.5-0.6,5.5-6.7S83.2,7,83.2,7H40.2z" />
      <path fill="#C95964" d="M85.1,78.9c0,0-17.2-0.3-17.2,18.2l0,0C81.7,94.9,84.6,84.8,85.1,78.9z" />
      <path
        fill="#c68d09"
        d="M63.7,33.9h-0.6L62.4,33l-0.7,0.8h-0.6l1.3-1.7L63.7,33.9z M62.4,34.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
L62.4,34.7z M62.4,37.5l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,37.5z M62.4,40.4l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,40.4z
M62.4,43.5l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,43.5z M62.4,46l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,46z M62.4,48.8l-1.3,1.7
h0.6l0.7-0.8l0.7,0.8h0.6L62.4,48.8z M62.4,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L62.4,51.7z M66.6,51.7l-1.3,1.7h0.6l0.7-0.8
l0.7,0.8h0.6L66.6,51.7z M71.4,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L71.4,51.7z M76.5,51.7l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
L76.5,51.7z M70.2,46.8l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L70.2,46.8z M74,47.1l-1.3,1.7h0.6L74,48l0.7,0.8h0.6L74,47.1z M70.7,42.6
l-1.3,1.7H70l0.7-0.8l0.7,0.8H72L70.7,42.6z M66.6,42.6l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L66.6,42.6z M66.6,38.3L65.3,40h0.6
l0.7-0.8l0.7,0.8h0.6L66.6,38.3z M57.4,53.3H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,53.3z M52.6,53.3h0.6l0.7-0.8l0.7,0.8h0.6
l-1.3-1.7L52.6,53.3z M47.5,53.3h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L47.5,53.3z M53.9,48.5h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7
L53.9,48.5z M50,48.8h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L50,48.8z M53.3,44.3h0.6l0.7-0.8l0.7,0.8h0.6l-1.3-1.7L53.3,44.3z
M57.4,44.3H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,44.3z M57.4,40H58l0.7-0.8l0.7,0.8H60l-1.3-1.7L57.4,40z M61.9,55.1l-1.3,1.7h0.6
l0.7-0.8l0.7,0.8h0.6L61.9,55.1z M61.9,58l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L61.9,58z M63.2,55.1l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6
L63.2,55.1z M63.2,58l-1.3,1.7h0.6l0.7-0.8l0.7,0.8h0.6L63.2,58z"
      />
    </svg>
  );
};

export default SantaSock;
