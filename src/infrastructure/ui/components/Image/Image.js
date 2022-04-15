import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  display: block;
  max-height: 180px;
  min-height: 180px;
  margin: 0 2rem;
  align-self: center;
  justify-self: center;
`;

const Image = ({ src, alt, lazyLoading }) => {
  return <StyledImage src={src} alt={alt} loading={lazyLoading ? 'lazy' : ''} />;
};

export default Image;
