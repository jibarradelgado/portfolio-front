import React, { Fragment } from 'react';
import { Link, Nav } from './styles';
import { MdPersonOutline } from 'react-icons/md';
import Context from "../../Context";

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Context.Consumer>
      {
        ({ isAuth }) => 
        isAuth ? 
          <Fragment>
            <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
            <Link to='/login'>Logout</Link>
          </Fragment>
        :
          <Fragment></Fragment>
      }
      </Context.Consumer>
    </Nav>
  )
}