import { useContext, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import AdventCalendarContext from "src/context/AdventCalendarContext";
import Tape from "src/components/giftBoxes/Tape";

import calendarDay01 from "src/assets/peach_cat_pat_head.gif";
import calendarDay02 from "src/assets/peach_cat_watergun.gif";
import calendarDay03 from "src/assets/peach_cat_window.png";
import calendarDay04 from "src/assets/peach_cat_drink_tea_together.gif";
import calendarDay05 from "src/assets/peach_cat_lay_on_ground.gif";
import calendarDay06 from "src/assets/peach_cat_santa_star.png";
import calendarDay07 from "src/assets/peach_cat_flower.gif";
import calendarDay08 from "src/assets/peach_cat_round_round.gif";
import calendarDay09 from "src/assets/peach_cat_tag.gif";
import calendarDay10 from "src/assets/peach_cat_shopping.png";
import calendarDay11 from "src/assets/peach_cat_cook.gif";
import calendarDay12 from "src/assets/peach_cat_game.gif";
import calendarDay13 from "src/assets/peach_cat_heart_gun.gif";
import calendarDay14 from "src/assets/peach_cat_cute.png";
import calendarDay15 from "src/assets/peach_cat_hug.gif";
import calendarDay16 from "src/assets/peach_cat_wall.png";
import calendarDay17 from "src/assets/peach_cat_blanket_jump.gif";
import calendarDay18 from "src/assets/peach_cat_angry.gif";
import calendarDay19 from "src/assets/peach_cat_slide.gif";
import calendarDay20 from "src/assets/peach_cat_duck.gif";
import calendarDay21 from "src/assets/peach_cat_dance.gif";
import calendarDay22 from "src/assets/peach_cat_hold_up.gif";
import calendarDay23 from "src/assets/peach_cat_sad_slide.gif";
import calendarDay24 from "src/assets/peach_cat_christmas_tree.png";

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
    quote: (
      <>
        <div>"Kéz a kézben, s csendben álmodunk,</div>
        <div>szívünk dallamán együtt ringatódzunk."</div>
      </>
    )
  },
  {
    day: 6,
    image: calendarDay06,
    quote: (
      <>
        <div>"Csillag szórja fényét, itt a Mikulás,</div>
        <div>legszebb ajándékom nekem te vagy,</div>
        <div>senki más."</div>
      </>
    )
  },
  {
    day: 7,
    image: calendarDay07,
    quote: (
      <>
        <div>"Virágot virágnak, szívem neked adom,</div>
        <div>üde mosolyodban az öröm otthonom."</div>
      </>
    )
  },

  {
    day: 8,
    image: calendarDay08,
    quote: (
      <>
        <div>"Karomba forgatlak és száll velünk a lét,</div>
        <div>örvénylő boldogság, együtt minden szép."</div>
      </>
    )
  },
  {
    day: 9,
    image: calendarDay09,
    quote: (
      <>
        <div>"Szökellve futunk, kacaj kél nyomán,</div>
        <div>huncutkodunk egymással</div>
        <div>a szerelem ritmusán."</div>
      </>
    )
  },
  {
    day: 10,
    image: calendarDay10,
    quote: (
      <>
        <div>"Kosárban kacagás, szemünk a pályán,</div>
        <div>együtt a vásárlás is egy</div>
        <div>nagy kaland az életünk moziján." </div>
      </>
    )
  },
  {
    day: 11,
    image: calendarDay11,
    quote: (
      <>
        <div>"Kedvesem főz, szívből készül az étel,</div>
        <div>nemcsak táplál, életünket is fűszerezi</div>
        <div>lélekkel és szívvel."</div>
      </>
    )
  },
  {
    day: 12,
    image: calendarDay12,
    quote: (
      <>
        <div>"Játék közben szívünk összefonódik,</div>
        <div>minden pillanatban</div>
        <div>szeretetünk megújhodik."</div>
      </>
    )
  },
  {
    day: 13,
    image: calendarDay13,
    quote: (
      <>
        <div>"Szívek repülnek, a levegő megtelik,</div>
        <div>kellemes hangulatban a szívünk</div>
        <div>összemelegedik."</div>
      </>
    )
  },
  {
    day: 14,
    image: calendarDay14,
    quote: (
      <>
        <div>"Ujjad érint, mosolyunk megcsillan,</div>
        <div>csend egy pillanatban, szívünk csak</div>
        <div>dobban és dobban."</div>
      </>
    )
  },
  {
    day: 15,
    image: calendarDay15,
    quote: (
      <div className={styles.modifiedRow}>
        <div>"Összefonódunk egymás karjaiban,</div>
        <div>mint szívünk,</div>
        <div>puszit nyomva a homlokodra</div>
        <div>összemelegedünk."</div>
      </div>
    )
  },
  {
    day: 16,
    image: calendarDay16,
    quote: (
      <>
        <div>"Leskelődve nézlek, vajon merre jársz,</div>
        <div>bújócskázol netán te kis ravasz?</div>
        <div>Titokban már rég rám vársz."</div>
      </>
    )
  },
  {
    day: 17,
    image: calendarDay17,
    quote: (
      <>
        <div>Pihenek egyedül, fekszem a takaró alatt,</div>
        <div>mégis hideg van, hiányzik valami,</div>
        <div>de be is ugrik mellém percek alatt."</div>
      </>
    )
  },
  {
    day: 18,
    image: calendarDay18,
    quote: (
      <>
        <div>"Kicsi a lány, cuki és édes,</div>
        <div>de mint a bors, mint a bolondgomba,</div>
        <div>amikor csak mérges."</div>
      </>
    )
  },
  {
    day: 19,
    image: calendarDay19,
    quote: (
      <>
        <div>"Kicsi csúszda, nagy csúszás,</div>
        <div>együtt, mint az élet,</div>
        <div>úgy sokkal jobb, mókás."</div>
      </>
    )
  },
  {
    day: 20,
    image: calendarDay20,
    quote: (
      <>
        <div>"Rugó hintán pattogva kacag a világ,</div>
        <div>örömünk szárnyal, mint szabad madár."</div>
      </>
    )
  },
  {
    day: 21,
    image: calendarDay21,
    quote: (
      <div className={styles.modifiedRow}>
        <div>"Életünk egy tánc, hatalmas pörgés,</div>
        <div>elkaplak ha elesnél,</div>
        <div>támaszod vagyok, sose szomorkodj,</div>
        <div>csak mindig nevessél."</div>
      </div>
    )
  },
  {
    day: 22,
    image: calendarDay22,
    quote: (
      <>
        <div>"Szülinap, ma nekem szülinap,</div>
        <div>de mit is kérjek magamnak?</div>
        <div>Nem kell nekem más, csak te,</div>
        <div>jajj de nagyon megleszel ölelve."</div>
      </>
    )
  },
  {
    day: 23,
    image: calendarDay23,
    quote: (
      <>
        <div>"Szomorkodok néha,</div>
        <div>sok mindenhez nincsen kedvem,</div>
        <div>na de ilyenkor mindig segít</div>
        <div>nekem a drága kedvesem."</div>
      </>
    )
  },
  {
    day: 24,
    image: calendarDay24,
    quote: (
      <>
        <div>"Itt van a karácsony,</div>
        <div>itt vannak az ünnepek,</div>
        <div>a kalendár elköszönöm,</div>
        <div>jövőre újra integet."</div>
      </>
    )
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
            <img
              alt="Peach pat head"
              className={classNames("center", { [styles.biggerImg]: openedDay === 23 })}
              src={calendarDay.image}
            />
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
