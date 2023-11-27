// Modal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./AddNewCardModal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Open Sans",
  },
};

const AddNewCardModal = ({ isOpen, message, onRequestClose, action }) => {
  const [cardName, setCardName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
    // Basic validation: Check if the card name is not empty
    setIsNameValid(e.target.value.trim() !== "");
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="AddNewCard Modal"
    >
      <div className="addnewcardmodal">
        <div className="addnewcardmodal__heading">Add New Card</div>
        <div className="addnewcardmodal__modalform">
          <form>
            <div>
              <label className="addnewcardmodal__modalform__label">
                Card Name
              </label>
              <input
                className="addnewcardmodal__modalform__inputfield"
                type="text"
                value={cardName}
                onChange={handleCardNameChange}
              />
              {
                <p
                  className={
                    !isNameValid
                      ? "addnewcardmodal__modalform__validationmsg"
                      : "addnewcardmodal__modalform__validationmsg addnewcardmodal__modalform__validationmsg--hidden"
                  }
                >
                  Name is a mandatory field
                </p>
              }
            </div>
          </form>
        </div>
        <div className="addnewcardmodal__buttongroup">
          <div
            className="addnewcardmodal__buttongroup__button"
            onClick={() => {
              if (isNameValid) {
                action(cardName);
                setCardName("");
                setIsNameValid(false);
                onRequestClose({
                  isModalOpen: false,
                  message: "",
                  action: null,
                });
              }
            }}
          >
            <div className="addnewcardmodal__buttongroup__button__text">
              Submit
            </div>
          </div>
          <div
            className="addnewcardmodal__buttongroup__button"
            onClick={() => {
              setCardName("");
              onRequestClose({
                isModalOpen: false,
                message: "",
                onConfirm: null,
              });
            }}
          >
            <div className="addnewcardmodal__buttongroup__button__text">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewCardModal;
