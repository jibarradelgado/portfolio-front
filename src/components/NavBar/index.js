import React, { useContext, Fragment } from 'react';
import { Link, Nav } from './styles';
import { MdPersonOutline } from 'react-icons/md';
import { Context } from "../../Context";

const SIZE = '32px';

export const NavBar = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Nav>
      <Context.Consumer>
      {
        ({ isAuth }) => 
        isAuth ? 
          <Fragment>
            <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
            <Link to='/' onClick={removeAuth}>Logout</Link>
          </Fragment>
        :
          <Fragment></Fragment>
      }
      </Context.Consumer>
    </Nav>
  )
}