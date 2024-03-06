import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddQuestionModal from './AddQuestionModal.jsx';

function AddQuestion({ productId }) {
  const [productName, setProductName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [askQuestion, setAskQuestion] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then((response) => {
        // console.log("response data name", response.data.name);
        setProductName(response.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  const openModal = () => {
    console.log('opened Modal');
    setIsOpenModal(true);
  };

  const closeModal = () => {
    console.log('closed Modal');
    setIsOpenModal(false);
  };

  const handleQuestionSubmit = (askQuestion, nickName, email, productId) => {
    event.preventDefault();

    if (askQuestion.length === 0) {
      setErrorMessage('You must enter a question.');
    } else if (nickName.length === 0) {
      setErrorMessage('You must enter a name.');
    } else if (!isValidEmail(email)) {
      setErrorMessage('The email address provided is not in the correct email format.');
    } else {
      setErrorMessage('');
      axios.post('/api/qa/questions', {
        body: askQuestion, name: nickName, email, product_id: productId,
      })
        .then(() => {
          closeModal();
          console.log('successful posted question');
        })
        .catch((err) => {
          console.log('failed to post question', err);
        });
    }
  };

  // found this email validator online
  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div>
      <button onClick={openModal}>ADD A QUESTION</button>
      <AddQuestionModal isOpen={isOpenModal} onClose={closeModal} productName={productName}>
        <form onSubmit={(e) => handleQuestionSubmit(askQuestion, nickName, email, productId)}>
          <label htmlFor="modal-question">
            Your Question:
            <span>*</span>
          </label>
          <textarea
            cols="48"
            rows="8"
            onChange={(e) => setAskQuestion(e.target.value)}
            id="modal-question"
            name="modal-question"
            required
            value={askQuestion}
          />

          <label htmlFor="modal-nickname">
            What is your nickname:
            <span>*</span>
          </label>
          <input
            onChange={(e) => setNickName(e.target.value)}
            id="modal-nickname"
            name="modal-nickname"
            placeholder="Example: jackson11!"
            maxLength={60}
            required
            value={nickName}
          />
          <p>For privacy reasons, do not use your full name or email address.</p>

          <label htmlFor="modal-email">
            Your email:
            <span>*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="modal-email"
            name="modal-email"
            placeholder="Why did you like the product or not?"
            required
            maxLength={60}
            value={email}
          />
          <p>For authentication reasons, you will not be emailed.</p>

          <button type="submit">Submit question</button>
          {errorMessage
            && (
            <div>
              <p>
                You must enter the following:
                {errorMessage}
              </p>
            </div>
            )}
        </form>
      </AddQuestionModal>
    </div>
  );
}

export default AddQuestion;
