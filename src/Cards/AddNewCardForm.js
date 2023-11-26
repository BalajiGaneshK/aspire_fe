import { useState } from "react";

import "../Components/ConfirmationModal.scss";

function AddNewCardForm(props) {
  const { newCardData, setNewCardData } = props;
  const [cardName, setCardName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
    setNewCardData({
      name: e.target.value,
    }); // Basic validation: Check if the card name is not empty
    setIsNameValid(e.target.value.trim() !== "");
  };

  return (
    <div className="confirmationmodal__modalform">
      <h2>Add New Card</h2>
      <form>
        <div>
          <label>Card Name:</label>
          <input type="text" value={cardName} onChange={handleCardNameChange} />
          {!isNameValid && (
            <p style={{ color: "red" }}>Name is a mandatory field</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddNewCardForm;
