import React, { useState, useEffect, useContext } from 'react';
import { EJSON } from 'bson';
import { Menu } from "../../components/Menu";
import { Total } from "../../components/Total";
import { AssetList } from '../../components/AssetList';
import { Container } from './styles';
import { Context } from '../../Context';
import axios from 'axios';

export const Home = () => {
  const [ assets, setAssets ] = useState([]);
  const [ isChanged, setIsChanged] = useState(false);
  const { userId, authId, isAuth } = useContext(Context);

  useEffect(function() {
    axios.get(`http://localhost:3000/asset/${userId}/${authId}`, {
      headers: { authorization: `Bearer ${isAuth}` }
    })
      .then(res => {
        setAssets(EJSON.deserialize(res.data.body))
      })
  }, [isChanged])

  return (
    <Container>
      <Menu isChanged={isChanged} setIsChanged={setIsChanged} />
      <Total assets={assets}/>
      <AssetList isChanged={isChanged} setIsChanged={setIsChanged} assets={assets} setAssets={setAssets}/>
    </Container>
  );
}