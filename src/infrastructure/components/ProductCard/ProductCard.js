import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProductCard = styled.div`
  padding: 16px;
`;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Link to={`/${product.id}`}>
      <StyledProductCard>
        {product.model}
        <button onClick={() => onAddToCart(product)}>Add to cart</button>
      </StyledProductCard>
    </Link>
  );
};

export default ProductCard;
