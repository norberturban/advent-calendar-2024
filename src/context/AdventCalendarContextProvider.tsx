import React, { useEffect, useMemo, useState } from "react";
import AdventCalendarContext from "./AdventCalendarContext";

interface AdventCalendarContextProviderProps {
  children: React.ReactNode;
}

const AdventCalendarContextProvider = ({ children }: AdventCalendarContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isFirstGiftOpen, setIsFirstGiftOpen] = useState<boolean>(false);
  const [openedDay, setOpenedDay] = useState<null | number>(null);
  const [shouldShowCalendarDay, setShouldShowCalendarDay] = useState<boolean>(false);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const value = useMemo(
    () => ({
      currentDateTime,
      isDarkMode,
      isFirstGiftOpen,
      openedDay,
      setIsDarkMode,
      setIsFirstGiftOpen,
      setOpenedDay,
      setShouldShowCalendarDay,
      shouldShowCalendarDay
    }),
    [currentDateTime, isDarkMode, isFirstGiftOpen, openedDay, shouldShowCalendarDay]
  );

  return <AdventCalendarContext.Provider value={value}>{children}</AdventCalendarContext.Provider>;
};

export default AdventCalendarContextProvider;
