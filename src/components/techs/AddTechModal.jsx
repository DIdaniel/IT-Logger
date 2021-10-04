import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(false);

  const onSubmitHandler = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Plz Enter the first and last name" });
    } else {
      console.log(firstName, lastName);

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First tName
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <input
                type="text"
                className="lastName"
                checked={lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label htmlFor="lastName" className="active">
                Last Name
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmitHandler}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
