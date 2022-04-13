import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Header = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #132337;
  color: white;
`;

const HeaderTitleSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: inherit;
  color: inherit;
`;

const AppHeader = ({ shoppingCartItems }) => {
  return (
    <Header>
      <HeaderTitleSection>
        <HeaderTitle as={Link} to="/">
          Smartphones
        </HeaderTitle>
        <Breadcrumbs />
      </HeaderTitleSection>
      <div>{shoppingCartItems}</div>
    </Header>
  );
};

export default AppHeader;
