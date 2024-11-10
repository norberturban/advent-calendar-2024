import React, { useEffect, useMemo, useState } from "react";
import AdventCalendarContext from "./AdventCalendarContext";

interface AdventCalendarContextProviderProps {
  children: React.ReactNode;
}

const AdventCalendarContextProvider = ({ children }: AdventCalendarContextProviderProps) => {
  const [openedDay, setOpenedDay] = useState<null | number>(null);

  useEffect(() => console.log({ openedDay }), [openedDay]);

  const value = useMemo(() => ({ openedDay, setOpenedDay }), [openedDay]);

  return <AdventCalendarContext.Provider value={value}>{children}</AdventCalendarContext.Provider>;
};

export default AdventCalendarContextProvider;
