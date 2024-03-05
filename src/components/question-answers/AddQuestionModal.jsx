import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const AddQuestionModal = ({ isOpen, onClose, children, productName }) => {
  const modalRoot = document.getElementById('modal');

  const modalContent = (
        <dialog open>
          <h2>Ask Your Question</h2>
          <p>About the {productName} </p>
          <button onClick={onClose}>Close</button>
          <div>{children}</div>
        </dialog>
  );

  return isOpen ? ReactDOM.createPortal(modalContent, modalRoot) : null;
};

export default AddQuestionModal;
