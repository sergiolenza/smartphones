import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Header = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #132337;
  color: white;
  .header--title-and-breadcrumbs {
    display: flex;
    flex-direction: column;
  }
  .header--title {
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: inherit;
    color: inherit;
  }
`;

const AppHeader = ({ shoppingCartItems }) => {
  return (
    <Header role="banner" aria-label="app-header">
      <div className="header--title-and-breadcrumbs">
        <Link to="/" className="header--title">
          Smartphones
        </Link>
        <Breadcrumbs />
      </div>
      {shoppingCartItems !== 0 ? <div>Cart: {shoppingCartItems} item/s</div> : null}
    </Header>
  );
};

export default AppHeader;
