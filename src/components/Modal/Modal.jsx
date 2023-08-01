import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    // console.log('listener');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // console.log('remove listener');
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};
