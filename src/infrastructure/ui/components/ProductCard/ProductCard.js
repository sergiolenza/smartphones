import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  .card--header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }
  .card--body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  .card--body-model {
    font-weight: 500;
    color: black;
  }
  .card--body-brand {
    text-transform: uppercase;
    color: darkgrey;
  }
  .card--body-price {
    font-weight: bold;
    color: black;
  }
`;

const ProductCard = ({ product }) => {
  const { imgUrl, brand, model, price } = product;
  return (
    <Card role="article" aria-label="product-card">
      <div className="card--header">
        <Image src={imgUrl} alt={`${brand} ${model}`} lazyLoading />
      </div>
      <div className="card--body">
        <div className="card--body-model">{model}</div>
        <div className="card--body-brand">{brand}</div>
        <div className="card--body-price">{price ? `${price} €` : 'unavailable'}</div>
      </div>
    </Card>
  );
};

export default ProductCard;
