import { useContext, useEffect, useMemo, useRef, useState } from "react";

import styles from "./Modal.module.scss";
import AdventCalendarContext from "src/context/AdventCalendarContext";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen, hasCloseBtn = true, onClose } = props;

  const { openedDay } = useContext(AdventCalendarContext);

  const [isModalOpen, setModalOpen] = useState(isOpen);

  const modalRef = useRef<HTMLDialogElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setModalOpen(false);
        if (onClose) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dayToShow = useMemo(() => {
    let day;
    if (openedDay) {
      day = openedDay < 10 ? `0${openedDay}` : openedDay;
    }

    return day;
  }, [openedDay]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className={styles.modal}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.tape}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
          <div className={styles.center}></div>
        </div>
        <div className={styles.top}>
          <div className={styles.date}>
            December <span>{dayToShow}.</span>
          </div>
          <div className={styles.img}>
            <img src="src/assets/peach_cat_pat_head.gif" alt="Peach pat head" className="center" />
          </div>
        </div>
        <div className={styles.bottom}>
          {/* <div>"Napfény csiklandoz, nevetés kél,</div>
          <div>nyárban az élet mesévé ér."</div> */}
          <div>"Lágy érintés, mosolyod fénye,</div>
          <div>szívem dorombol, ha vagy közelébe."</div>
        </div>
        {hasCloseBtn && (
          <button className={styles.closeButton} onClick={handleCloseModal}>
            Close
          </button>
        )}
      </div>
    </dialog>
  );
};

export default Modal;
