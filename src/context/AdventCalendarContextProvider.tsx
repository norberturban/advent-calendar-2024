import React, { useMemo, useState } from "react";
import AdventCalendarContext from "./AdventCalendarContext";

interface AdventCalendarContextProviderProps {
  children: React.ReactNode;
}

const AdventCalendarContextProvider = ({ children }: AdventCalendarContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [openedDay, setOpenedDay] = useState<null | number>(null);
  const [shouldShowCalendarDay, setShouldShowCalendarDay] = useState<boolean>(false);

  const value = useMemo(
    () => ({ isDarkMode, openedDay, setIsDarkMode, setOpenedDay, setShouldShowCalendarDay, shouldShowCalendarDay }),
    [isDarkMode, openedDay, shouldShowCalendarDay]
  );

  return <AdventCalendarContext.Provider value={value}>{children}</AdventCalendarContext.Provider>;
};

export default AdventCalendarContextProvider;
