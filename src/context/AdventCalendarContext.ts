import { createContext } from "react";

type AdventCalendarContextType = {
  isDarkMode: boolean;
  openedDay: null | number;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDay: React.Dispatch<React.SetStateAction<null | number>>;
  setShouldShowCalendarDay: React.Dispatch<React.SetStateAction<boolean>>;
  shouldShowCalendarDay: boolean;
};

const AdventCalendarContextDefaultValues: AdventCalendarContextType = {
  isDarkMode: false,
  openedDay: null,
  setIsDarkMode: () => {},
  setOpenedDay: () => null,
  setShouldShowCalendarDay: () => {},
  shouldShowCalendarDay: false
};

const AdventCalendarContext = createContext<AdventCalendarContextType>(AdventCalendarContextDefaultValues);

export default AdventCalendarContext;
