import React from 'react';
import styled from 'styled-components';

const Placeholder = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

const EmptyPlaceholder = ({ text }) => {
  return (
    <Placeholder role="article" aria-label="error-placeholder">
      <h3 className="placeholder--main-text">There is no data to show!</h3>
      <p className="placeholder--secondary-text">{text}</p>
    </Placeholder>
  );
};

export default EmptyPlaceholder;
