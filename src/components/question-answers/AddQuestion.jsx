import React from 'react';
import { useState, useEffect } from 'react';
import AddQuestionModal from './AddQuestionModal.jsx';
import axios from 'axios';

function AddQuestion({productId}) {

  const [productName, setProductName] = useState('');

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
    .then((response) => {
      // console.log("response data name", response.data.name);
      setProductName(response.data.name);
    })
    .catch((err) => {
      console.log(err);
    })

  },[productId])

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    console.log("opened Modal");
    setIsOpenModal(true);
  }

  const closeModal = () => {
    console.log("closed Modal");
   setIsOpenModal(false);
  }

  return (
    <div>
      <button onClick={openModal}>ADD A QUESTION</button>
      <AddQuestionModal isOpen={isOpenModal} onClose={closeModal} productName={productName}>
        <p>Modal Content here!</p>
      </AddQuestionModal>
    </div>
  )
}

export default AddQuestion;