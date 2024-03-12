import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/AnswerModal.module.css';

function AddAnswerModal({
  isOpen, onClose, children, questionBody, productName,
}) {
  const modalRoot = document.getElementById('modal');
  // need productNAME AND QUESTION BODY

  const modalContent = (
    <dialog open className={styles.answerModal}>
      <h2>Submit your Answer</h2>
      <p>
        {productName}
        :
        {' '}
        {questionBody}
        {' '}
      </p>
      <div>{children}</div>
      <button className={styles.answerModalCloseButton} type="submit" onClick={onClose}>Close</button>
    </dialog>
  );

  return isOpen ? ReactDOM.createPortal(modalContent, modalRoot) : null;
}

export default AddAnswerModal;
