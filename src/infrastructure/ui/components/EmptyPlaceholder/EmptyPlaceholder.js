import React from 'react';
import styled from 'styled-components';

const Placeholder = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EmptyPlaceholder = ({ text }) => {
  return <Placeholder>{text}</Placeholder>;
};

export default EmptyPlaceholder;
