// Modal.js
import React from "react";
import Modal from "react-modal";
import "./ConfirmationModal.scss";

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
const buttonStyles = {
  backgroundColor: "#325baf",
  color: "#ffffff",
};

const ConfirmationModal = ({ isOpen, message, onRequestClose, action }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Confirmation Modal"
    >
      <div className="confirmationmodal">
        <p>{message}</p>
        <div className="confirmationmodal__buttongroup">
          <div
            className="confirmationmodal__buttongroup__button"
            onClick={() => {
              action();
              onRequestClose({
                isModalOpen: false,
                message: "",
                action: null,
              });
            }}
          >
            <div className="confirmationmodal__buttongroup__button__text">
              Yes, I am sure
            </div>
          </div>
          <div
            className="confirmationmodal__buttongroup__button"
            onClick={() =>
              onRequestClose({
                isModalOpen: false,
                message: "",
                onConfirm: null,
              })
            }
          >
            <div className="confirmationmodal__buttongroup__button__text">
              Cancel
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
