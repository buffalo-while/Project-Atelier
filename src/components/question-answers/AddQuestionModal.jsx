import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/QuestionModal.module.css';

function AddQuestionModal({
  isOpen, onClose, children, productName,
}) {
  const modalRoot = document.getElementById('modal');

  const modalContent = (
    <dialog open className={styles.questionModal}>
      <h2>Ask Your Question</h2>
      <p>
        About the
        {' '}
        {productName}
      </p>
      <div>{children}</div>
      <button class={styles.questionModalCloseButton} type="submit" onClick={onClose}>Close</button>
    </dialog>
  );


  return isOpen ? ReactDOM.createPortal(modalContent, modalRoot) : null;
}

export default AddQuestionModal;
