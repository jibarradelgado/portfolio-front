import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export const AssetForm = ({ name="", value="", showForm, setShowForm }) => {
  const handleSubmit = e => {
    e.preventDefault();
    //onSubmit({ email: email.value, password: password.value });
  }

  const cancelForm = () => {
    setShowForm(!showForm);
  }

  const renderForm = () => {
    return (
      <Container className={showForm ? 'active' : ''}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="asset_name">Name</label>
            <input type="text" id="type_name" name="type_name" />
          </div>
          <div className="form-group">
            <label for="value">Value</label>
            <input type="number" id="value" name="value" />
          </div>
          <div className="form-group">
            <input type="submit" id="submit" value="Add" />
            <button type="button" id="cancel" value="Cancel" onClick={cancelForm}>Cancel</button>
          </div>
        </form>
      </Container>
    );
  }

  return (
    renderForm()
  )
}