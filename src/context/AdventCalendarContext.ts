import { createContext } from "react";

type AdventCalendarContextType = {
  currentDateTime: Date;
  isDarkMode: boolean;
  isFirstGiftOpen: boolean;
  openedDay: null | number;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFirstGiftOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDay: React.Dispatch<React.SetStateAction<null | number>>;
  setShouldShowCalendarDay: React.Dispatch<React.SetStateAction<boolean>>;
  shouldShowCalendarDay: boolean;
};

const AdventCalendarContextDefaultValues: AdventCalendarContextType = {
  currentDateTime: new Date(),
  isDarkMode: false,
  isFirstGiftOpen: false,
  openedDay: null,
  setIsDarkMode: () => {},
  setIsFirstGiftOpen: () => {},
  setOpenedDay: () => null,
  setShouldShowCalendarDay: () => {},
  shouldShowCalendarDay: false
};

const AdventCalendarContext = createContext<AdventCalendarContextType>(AdventCalendarContextDefaultValues);

export default AdventCalendarContext;
