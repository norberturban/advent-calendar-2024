import { useContext, useState } from "react";
import Snowfall from "react-snowfall";
import classNames from "classnames";
import Hamburger from "hamburger-react";

import AdventCalendarContext from "./context/AdventCalendarContext";
import ChristmasTree from "./components/tree/ChristmasTree";
import Modal from "./components/modal/Modal";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Fireplace from "./components/fireplace/Fireplace";

import styles from "./App.module.scss";

const App = () => {
  const { isDarkMode, openedDay, setIsDarkMode, setOpenedDay, setShouldShowCalendarDay, shouldShowCalendarDay } =
    useContext(AdventCalendarContext);

  const [isOpen, setOpen] = useState(false);
  const [isSnowing, setIsSnowing] = useState(false);

  return (
    <>
      <div className={classNames(styles.container, { [styles["container--dark"]]: isDarkMode })}>
        <div className={styles.menu}>
          <Hamburger toggle={setOpen} toggled={isOpen} />

          {isOpen ? (
            <div className={styles.list}>
              <div className={styles.calendarDays} onClick={() => setShouldShowCalendarDay(curr => !curr)}>
                <span
                  className={classNames(styles.icon, {
                    [styles["icon--showCalendarDays"]]: shouldShowCalendarDay
                  })}
                />
              </div>

              <div className={styles.snow} onClick={() => setIsSnowing(curr => !curr)}>
                <span className={styles.snowflake}>{isSnowing ? <span className={styles.cloud} /> : <>❆</>}</span>
              </div>

              <div className={styles.light} onClick={() => setIsDarkMode(curr => !curr)}>
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </div>
            </div>
          ) : null}
        </div>

        <Fireplace />
        <ChristmasTree />
      </div>

      {isSnowing ? <Snowfall /> : null}

      {openedDay ? <Modal hasCloseBtn={false} isOpen onClose={() => setOpenedDay(null)} /> : null}
    </>
  );
};

export default App;
