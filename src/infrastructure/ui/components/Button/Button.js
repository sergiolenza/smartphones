import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: 2px solid #132337;
  border-radius: 4px;
  color: #132337;
  background-color: white;
  padding: 8px 16px;
  font-weight: 800;
  font-size: 16px;
  height: 40px;
  :hover {
    background-color: #132337;
    color: #fff;
  }
`;

const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
