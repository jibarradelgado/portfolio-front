import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { fadeIn } from '../../styles/Animation';

export const Link = styled(LinkRouter)`
  transition: color .5s ease;
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  max-width: 50px;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-bottom: 1px solid #e0e0e0;
  top: 0;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  left: 0;
  margin: auto;
  max-width: 1200px;
  padding-right: 50px;
  position: fixed;
  right: 0;
  text-align: center;
  width: 100%;
  z-index: 1000;
`
