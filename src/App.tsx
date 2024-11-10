import { useContext } from "react";

import AdventCalendarContext from "./context/AdventCalendarContext";
import ChristmasTree from "./components/tree/ChristmasTree";
import Modal from "./components/modal/Modal";

import styles from "./App.module.scss";

const App = () => {
  const { openedDay, setOpenedDay } = useContext(AdventCalendarContext);

  return (
    <>
      <div className={styles.container}>
        <ChristmasTree />
      </div>

      {openedDay ? (
        <Modal hasCloseBtn={false} isOpen onClose={() => setOpenedDay(null)}>
          <div>{openedDay}</div>
        </Modal>
      ) : null}
    </>
  );
};

export default App;
