import React, { useMemo, useState } from "react";
import AdventCalendarContext from "./AdventCalendarContext";

interface AdventCalendarContextProviderProps {
  children: React.ReactNode;
}

const AdventCalendarContextProvider = ({ children }: AdventCalendarContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [openedDay, setOpenedDay] = useState<null | number>(null);

  const value = useMemo(() => ({ isDarkMode, openedDay, setIsDarkMode, setOpenedDay }), [isDarkMode, openedDay]);

  return <AdventCalendarContext.Provider value={value}>{children}</AdventCalendarContext.Provider>;
};

export default AdventCalendarContextProvider;
