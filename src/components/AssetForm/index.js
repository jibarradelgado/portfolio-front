import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import axios from 'axios';

export const AssetForm = ({ showForm, setShowForm, isChanged, setIsChanged}) => {
  const [ name, setName ] = useState('');
  const [ value, setValue ] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(value);
    axios.post(`http://localhost:3000/asset`, {
      "user": "623a36817ccde434ed0c0e77",
      name,
      value
    }).then( res => {
      console.log(res.error);
      if (!res.error) {
        setIsChanged(!isChanged);
        cancelForm();
      }
    });
  }

  const cancelForm = () => {
    setName('');
    setValue('');
    setShowForm(!showForm);
  }

  const renderForm = () => {
    return (
      <Container className={showForm ? 'active' : ''}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="asset_name">Name</label>
            <input type="text" id="type_name" name="type_name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label for="value">Value</label>
            <input type="number" id="value" name="value" placeholder="0" onChange={(e) => setValue(e.target.value)} />
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