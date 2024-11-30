import { useContext, useEffect, useMemo, useRef, useState } from "react";

import AdventCalendarContext from "src/context/AdventCalendarContext";
import Tape from "src/components/giftBoxes/Tape";

import calendarDay01 from "src/assets/peach_cat_pat_head.gif";
import calendarDay02 from "src/assets/peach_cat_watergun.gif";
import calendarDay03 from "src/assets/peach_cat_window.png";
import calendarDay04 from "src/assets/peach_cat_drink_tea_together.gif";

import calendarDay05 from "src/assets/peach_cat_blanket.gif";
import calendarDay06 from "src/assets/peach_cat_santa_star.png";
import calendarDay07 from "src/assets/peach_cat_pat_head.gif";
import calendarDay08 from "src/assets/peach_cat_pat_head.gif";
import calendarDay09 from "src/assets/peach_cat_pat_head.gif";
import calendarDay10 from "src/assets/peach_cat_pat_head.gif";
import calendarDay11 from "src/assets/peach_cat_pat_head.gif";
import calendarDay12 from "src/assets/peach_cat_pat_head.gif";
import calendarDay13 from "src/assets/peach_cat_pat_head.gif";
import calendarDay14 from "src/assets/peach_cat_pat_head.gif";
import calendarDay15 from "src/assets/peach_cat_pat_head.gif";
import calendarDay16 from "src/assets/peach_cat_pat_head.gif";
import calendarDay17 from "src/assets/peach_cat_pat_head.gif";
import calendarDay18 from "src/assets/peach_cat_pat_head.gif";
import calendarDay19 from "src/assets/peach_cat_pat_head.gif";
import calendarDay20 from "src/assets/peach_cat_pat_head.gif";
import calendarDay21 from "src/assets/peach_cat_pat_head.gif";
import calendarDay22 from "src/assets/peach_cat_pat_head.gif";
import calendarDay23 from "src/assets/peach_cat_pat_head.gif";
import calendarDay24 from "src/assets/peach_cat_pat_head.gif";

import styles from "./Modal.module.scss";

const calendarDays = [
  {
    day: 1,
    image: calendarDay01,
    quote: (
      <>
        <div>"Lágy érintés, mosolyod fénye,</div>
        <div>szívem dorombol, ha vagy közelébe."</div>
      </>
    )
  },
  {
    day: 2,
    image: calendarDay02,
    quote: (
      <>
        <div>"Napfény csiklandoz, nevetés kél,</div>
        <div>nyárban az élet mesévé ér."</div>
      </>
    )
  },
  {
    day: 3,
    image: calendarDay03,
    quote: (
      <>
        <div>"Hó hull csendben, odakint tél zenél,</div>
        <div>bennünk a boldogság meleg fénye él."</div>
      </>
    )
  },
  {
    day: 4,
    image: calendarDay04,
    quote: (
      <>
        <div>"Szemed tüzében mézédes varázs,</div>
        <div>gőzölgő csészénkben álmaink kavargás."</div>
      </>
    )
  },
  {
    day: 5,
    image: calendarDay05,
    quote: <></>
  },
  {
    day: 6,
    image: calendarDay06,
    quote: <></>
  },
  {
    day: 7,
    image: calendarDay07,
    quote: <></>
  },
  {
    day: 8,
    image: calendarDay08,
    quote: <></>
  },
  {
    day: 9,
    image: calendarDay09,
    quote: <></>
  },
  {
    day: 10,
    image: calendarDay10,
    quote: <></>
  },
  {
    day: 11,
    image: calendarDay11,
    quote: <></>
  },
  {
    day: 12,
    image: calendarDay12,
    quote: <></>
  },
  {
    day: 13,
    image: calendarDay13,
    quote: <></>
  },
  {
    day: 14,
    image: calendarDay14,
    quote: <></>
  },
  {
    day: 15,
    image: calendarDay15,
    quote: <></>
  },
  {
    day: 16,
    image: calendarDay16,
    quote: <></>
  },
  {
    day: 17,
    image: calendarDay17,
    quote: <></>
  },
  {
    day: 18,
    image: calendarDay18,
    quote: <></>
  },
  {
    day: 19,
    image: calendarDay19,
    quote: <></>
  },
  {
    day: 20,
    image: calendarDay20,
    quote: <></>
  },
  {
    day: 21,
    image: calendarDay21,
    quote: <></>
  },
  {
    day: 22,
    image: calendarDay22,
    quote: <></>
  },
  {
    day: 23,
    image: calendarDay23,
    quote: <></>
  },
  {
    day: 24,
    image: calendarDay24,
    quote: <></>
  }
];

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

  const calendarDay = useMemo(() => {
    const currentDay = calendarDays.find(calendarDay => calendarDay.day === openedDay);
    return currentDay || calendarDays[0];
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
        <Tape position={{ top: "0", left: "16rem" }} rotate="45deg" />
        <div className={styles.top}>
          <div className={styles.date}>
            December <span>{dayToShow}.</span>
          </div>
          <div className={styles.img}>
            <img src={calendarDay.image} alt="Peach pat head" className="center" />
            <div className={styles.picture}></div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.snowman} />
          <div className={styles.snowGlobe} />
          {calendarDay.quote}
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
