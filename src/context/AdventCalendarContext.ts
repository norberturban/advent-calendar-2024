import { createContext } from "react";

type AdventCalendarContextType = {
  openedDay: null | number;
  setOpenedDay: React.Dispatch<React.SetStateAction<null | number>>;
};

const AdventCalendarContextDefaultValues: AdventCalendarContextType = {
  openedDay: null,
  setOpenedDay: () => null
};

const AdventCalendarContext = createContext<AdventCalendarContextType>(AdventCalendarContextDefaultValues);

export default AdventCalendarContext;
