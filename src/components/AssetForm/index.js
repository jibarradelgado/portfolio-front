import React, { useContext } from "react";
import { Container } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";
import axios from 'axios';
import { Context } from "../../Context";
import { config } from "../../config";

export const AssetForm = ({ showForm, setShowForm, isChanged, setIsChanged}) => {
  const name =  useInputValue('');
  const value = useInputValue(0);
  const { userId, authId, isAuth } = useContext(Context);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${config.host}${config.dev ? `:${config.port}`: ''}/asset`, {
      user : userId,
      name : name.value,
      value : value.value,
      auth: {
        id: authId
      }}, {
        headers: {
          authorization: `Bearer ${isAuth}`
        }
    }).then( res => {
      if (!res.error) {
        setIsChanged(!isChanged);
        cancelForm();
      }
    });
  }

  const cancelForm = () => {
    name.setValue('');
    value.setValue(0);
    setShowForm(!showForm);
  }

  const renderForm = () => {
    return (
      <Container className={showForm ? 'active' : ''}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="asset_name">Name</label>
            <input type="text" id="asset_name" name="type_name" placeholder="Name" {...name} />
          </div>
          <div className="form-group">
            <label for="value">Value</label>
            <input type="number" id="value" name="value" placeholder="0" {...value} />
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