import React from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
  item: { id: number; image: string; name: string } | null;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          &times;
        </button>
        <img className={styles.modalImage} src={`/src/img/${item.image}`} alt={item.name} />
        <h2 className={styles.modalName}>{item.name}</h2>
      </div>
    </div>
  );
};

export default Modal;
