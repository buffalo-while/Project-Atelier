import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAnswerModal from './AddAnswerModal.jsx';
import styles from './styles/AddAnswerButton.module.css';

function AddAnswer({ question, productId }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [yourAnswer, setYourAnswer] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [remainingPhotos, setRemainingPhotos] = useState(5);
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
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  // found this email validator online
  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handlePhotoUpload = (e) => {
    const newPhotos = [...photos];
    const file = e.target.files[0];
    // console.log('file type:', file.type);

    if (file && remainingPhotos > 0) {
      const photoURL = URL.createObjectURL(file);
      newPhotos.push({ file, url: photoURL });
      setPhotos(newPhotos);
      setRemainingPhotos(remainingPhotos - 1);
    }
  };

  const removePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
    setRemainingPhotos(remainingPhotos + 1);
  };

  const handleAnswerSubmit = (yourAnswer, nickName, email, photos) => {
    event.preventDefault();

    if (yourAnswer.length === 0) {
      setErrorMessage('You must enter an answer.');
    } else if (nickName.length === 0) {
      setErrorMessage('You must enter a name.');
    } else if (!isValidEmail(email)) {
      setErrorMessage('The email address provided is not in the correct email format.');
    } else {
      setErrorMessage('');
      closeModal();
      const photoURLs = photos.map((photo) => photo.url);
      console.log('photoURLs', photoURLs);
      axios.post(`/api/qa/questions/${question.question_id}/answers`, {
        body: yourAnswer, name: nickName, email, photos: photoURLs,
      })
        .then(() => {
          setYourAnswer('');
          setNickName('');
          setEmail('');
          setPhotos([]);
          console.log('successful answer submit');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <button className={styles.addAnswerButton} onClick={openModal}>Add Answer</button>
      <AddAnswerModal isOpen={isOpenModal} onClose={closeModal} questionBody={question.question_body} productName={productName}>
        <form onSubmit={(e) => handleAnswerSubmit(yourAnswer, nickName, email, photos)}>
          <label htmlFor="answer-modal-answer">
            Your Answer:
            <span>*</span>
          </label>
          <textarea
            cols="48"
            rows="8"
            onChange={(e) => setYourAnswer(e.target.value)}
            id="answer-modal-answer"
            name="answer-modal-answer"
            required
            value={yourAnswer}
          />

          <label htmlFor="answer-modal-nickname">
            What is your nickname:
            <span>*</span>
          </label>
          <input
            onChange={(e) => setNickName(e.target.value)}
            id="answer-modal-nickname"
            name="answer-modal-nickname"
            placeholder="Example: jack543!"
            maxLength={60}
            value={nickName}
            required
          />
          <p>For privacy reasons, do not use your full name or email address.</p>

          <label htmlFor="answer-modal-email">
            Your email:
            <span>*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="answer-modal-email"
            name="answer-modal-email"
            placeholder="jack@email.com"
            required
            value={email}
            maxLength={60}
          />
          <p>For authentication reasons, you will not be emailed.</p>

          <label htmlFor="answer-modal-photos">Upload your photos:</label>
          <input
            type="file"
            id="answer-modal-photos"
            name="answer-modal-photos"
            accept="image/*"
            onChange={handlePhotoUpload}
            multiple
            disabled={remainingPhotos === 0}
          />
          <div>
            {photos.map((photo, index) => (
              <div>
                <img src={photo.url} alt={`uploaded-${index}`} height="60" width="60" />
                <button type="button" onClick={() => removePhoto(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button type="submit">Submit Answer</button>

        </form>
      </AddAnswerModal>
    </div>
  );
}

export default AddAnswer;
