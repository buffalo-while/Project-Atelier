import React from 'react';
import ReactDOM from 'react-dom';

function AddAnswerModal({
  isOpen, onClose, children, questionBody, productName,
}) {
  const modalRoot = document.getElementById('modal');
  // need productNAME AND QUESTION BODY

  const modalContent = (
    <dialog open>
      <h2>Submit your Answer</h2>
      <p>
        {productName}
        :
        {' '}
        {questionBody}
        {' '}
      </p>
      <button type="submit" onClick={onClose}>Close</button>
      <div>{children}</div>
    </dialog>
  );

  return isOpen ? ReactDOM.createPortal(modalContent, modalRoot) : null;
}

export default AddAnswerModal;
