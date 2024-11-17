import { useEffect, useRef, useState } from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen, hasCloseBtn = true, onClose, children } = props;

  const [isModalOpen, setModalOpen] = useState(isOpen);

  const modalRef = useRef<HTMLDialogElement | null>(null);

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

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <div className={styles.hole}>
              <div className={styles.hanger}></div>
            </div>
            <div className={styles.hole}>
              <div className={styles.hanger}></div>
            </div>
          </div>
        </div>
        <div className={styles.body}>{children}</div>
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
