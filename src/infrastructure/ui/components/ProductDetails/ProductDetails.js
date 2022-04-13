import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ProductDetails = ({ onAddToCart }) => {
  const params = useParams();
  const { status, data: product } = useProduct(params.productId);

  const onClickAddToCart = (ev) => {
    ev.preventDefault();
    onAddToCart(product);
  };

  if (status === 'loading') {
    return 'Loading...';
  }

  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    dimentions,
    weight,
    options,
  } = product;

  const { colors, storages } = options;

  return (
    <div>
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Price: {price} €</p>
      <p>CPU: {cpu}</p>
      <p>RAM: {ram}</p>
      <p>Operative system: {os}</p>
      <p>Display resolution: {displayResolution}</p>
      <p>Battery: {battery}</p>
      <p>Dimensions: {dimentions}</p>
      <p>Weight: {weight} gr</p>
      <select name="colors">
        {colors.map(({ code, name }) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
      <select name="storages">
        {storages.map(({ code, name }) => {
          return (
            <option key={code} value={code}>
              {name}
            </option>
          );
        })}
      </select>
      <button type="button" onClick={onClickAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
