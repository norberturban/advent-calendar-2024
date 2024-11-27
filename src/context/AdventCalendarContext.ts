import { createContext } from "react";

type AdventCalendarContextType = {
  isDarkMode: boolean;
  openedDay: null | number;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDay: React.Dispatch<React.SetStateAction<null | number>>;
};

const AdventCalendarContextDefaultValues: AdventCalendarContextType = {
  isDarkMode: false,
  openedDay: null,
  setIsDarkMode: () => {},
  setOpenedDay: () => null
};

const AdventCalendarContext = createContext<AdventCalendarContextType>(AdventCalendarContextDefaultValues);

export default AdventCalendarContext;
