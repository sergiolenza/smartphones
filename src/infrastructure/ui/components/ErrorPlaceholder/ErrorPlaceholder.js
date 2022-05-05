import React from 'react';
import styled from 'styled-components';
import icon from './error-placeholder-icon.svg';

const Placeholder = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .placeholder--icon {
    max-width: 100px;
  }
  .placeholder--main-text {
    color: #132337;
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .placeholder--secondary-text {
    color: #595959;
  }
`;

const ErrorPlaceholder = ({ text }) => {
  return (
    <Placeholder role="article" aria-label="error-placeholder">
      <img className="placeholder--icon" src={icon} alt="Error icon" />
      <h3 className="placeholder--main-text">Oops!</h3>
      <p className="placeholder--secondary-text">{text}</p>
    </Placeholder>
  );
};

export default ErrorPlaceholder;
