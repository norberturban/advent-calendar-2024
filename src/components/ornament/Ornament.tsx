import { useContext, useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";

import styles from "./Ornament.module.scss";

const calendarDays = [
  {
    day: 1,
    validFrom: new Date("2024-12-01T00:00:00")
  },
  {
    day: 2,
    validFrom: new Date("2024-12-02T00:00:00")
  },
  {
    day: 3,
    validFrom: new Date("2024-12-03T00:00:00")
  },
  {
    day: 4,
    validFrom: new Date("2024-12-04T00:00:00")
  },
  {
    day: 5,
    validFrom: new Date("2024-12-05T00:00:00")
  },
  {
    day: 6,
    validFrom: new Date("2024-12-06T00:00:00")
  },
  {
    day: 7,
    validFrom: new Date("2024-12-07T00:00:00")
  },
  {
    day: 8,
    validFrom: new Date("2024-12-08T00:00:00")
  },
  {
    day: 9,
    validFrom: new Date("2024-12-09T00:00:00")
  },
  {
    day: 10,
    validFrom: new Date("2024-12-10T00:00:00")
  },
  {
    day: 11,
    validFrom: new Date("2024-12-11T00:00:00")
  },
  {
    day: 12,
    validFrom: new Date("2024-12-12T00:00:00")
  },
  {
    day: 13,
    validFrom: new Date("2024-12-13T00:00:00")
  },
  {
    day: 14,
    validFrom: new Date("2024-12-14T00:00:00")
  },
  {
    day: 15,
    validFrom: new Date("2024-12-15T00:00:00")
  },
  {
    day: 16,
    validFrom: new Date("2024-12-16T00:00:00")
  },
  {
    day: 17,
    validFrom: new Date("2024-12-17T00:00:00")
  },
  {
    day: 18,
    validFrom: new Date("2024-12-18T00:00:00")
  },
  {
    day: 19,
    validFrom: new Date("2024-12-19T00:00:00")
  },
  {
    day: 20,
    validFrom: new Date("2024-12-20T00:00:00")
  },
  {
    day: 21,
    validFrom: new Date("2024-12-21T00:00:00")
  },
  {
    day: 22,
    validFrom: new Date("2024-12-22T00:00:00")
  },
  {
    day: 23,
    validFrom: new Date("2024-12-23T00:00:00")
  },
  {
    day: 24,
    validFrom: new Date("2024-12-24T00:00:00")
  }
];

interface OrnamentProps {
  className?: string;
  day: number;
}

const Ornament = (props: OrnamentProps) => {
  const { className, day } = props;

  const { isDarkMode, setOpenedDay, shouldShowCalendarDay } = useContext(AdventCalendarContext);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const calendarDay = useMemo(() => calendarDays.find(d => d.day === day) || null, []);
  const isCalendarDayActive = useMemo(
    () => (calendarDay ? calendarDay?.validFrom <= currentDateTime : false),
    [calendarDay, currentDateTime]
  );

  const handleOpenCalendarDay = () => {
    console.log({ validFrom: calendarDay?.validFrom, currentDateTime, day, isCalendarDayActive });
    if (isCalendarDayActive) {
      setOpenedDay(day);
    }
  };

  return (
    <div
      className={classNames(styles.ornament, styles[`ornament${day}`], className, {
        [styles["ornament--dark"]]: isDarkMode,
        [styles["ornament--isActive"]]: isCalendarDayActive
      })}
      onClick={handleOpenCalendarDay}
    >
      {shouldShowCalendarDay ? day : null}

      <div className={styles.pendant}>
        <div className={styles.circle} />
      </div>

      {isCalendarDayActive ? <div className={styles.shine} /> : null}
    </div>
  );
};

export default Ornament;
