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
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  :hover {
    background-color: ${({ disabled }) => (disabled ? '#fff' : '#132337')};
    color: ${({ disabled }) => (disabled ? '#132337' : '#fff')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Button = ({ type, onClick, disabled, children }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
