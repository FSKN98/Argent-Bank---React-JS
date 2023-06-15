import React, { useState } from "react";
import "../userNameForm/UserNameForm.css"; //Importation des modules nécessaires, notamment useState pour la gestion des états

function UserNameForm({ firstName, lastName }) {
  const [newUserName, setNewUserName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  //Pour afficher les valeurs initiales des champs "FirstName" et "LastName"
  //useState permet de stocket les valeurs saisi par l'itulisateur dans les champs

  const handleUserNameChange = (event) => {
    setNewUserName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setNewFirstName(event.target.value);
  };
  //Fonctions pour la gestion des évènements de modification (les mettre à jour)

  const handleCancel = () => {
    setNewUserName("");
  };
  //Fonction pour réinitialiser l'état "newUserName" à une chaine vide quand l'utilisateur clique sur "Cancel"

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pour que la page ne recharge pas
    updateUserName(newUserName);
    updateFirstName(newFirstName);
  };

  const updateUserName = (newUserName) => {
    // Appel à l'API pour mettre à jour le nom d'utilisateur
    console.log(`Updating username: ${newUserName}`);
  };

  const updateFirstName = (newFirstName) => {
    // Appel à l'API pour mettre à jour le prénom
    console.log(`Updating first name: ${newFirstName}`);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={newUserName}
            onChange={handleUserNameChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            readOnly
            className="grayButton"
          />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} readOnly className="grayButton" />
        </label>

        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserNameForm;
