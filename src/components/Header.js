import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">E-Commerce</Link>
      <nav>
        <Link to="/cart">Cart</Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
