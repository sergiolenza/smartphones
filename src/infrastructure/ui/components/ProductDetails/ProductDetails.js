import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useProduct from '../../hooks/useProduct';

const ProductDetail = styled.div`
  display: flex;
  max-width: 700px;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 2rem;
`;

const ProductDetailImage = styled.img`
  height: 100%;
`;

const ProductDetailDescriptionParagraph = styled.p`
  margin-bottom: 8px;
`;

const ProductDetailDescriptionKey = styled.span`
  font-weight: 800;
`;

const ProductDetailActions = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Dropdown = styled.select`
  outline: none;
  padding: 7px;
  border-radius: 6px;
  font-size: 16px;
  background: #fbfbfb;
  border: 2px solid #ff4742;
  border-radius: 4px;
  color: #ff4742;
  font-weight: 800;
  :focus {
    border: 2px solid #ff4742;
  }
`;

const AddToCartButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border-radius: 2px;
  border: 2px solid #ff4742;
  border-radius: 4px;
  color: #ff4742;
  background: 0 0;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
  font-weight: 800;
  font-size: 16px;
  height: 42px;
  :hover {
    background-color: #ff4742;
    color: #fff;
  }
`;

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
    imgUrl,
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
    <ProductDetail>
      <ProductDetailImage src={imgUrl} />
      <div>
        <div>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Brand: </ProductDetailDescriptionKey>
            {brand}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Model: </ProductDetailDescriptionKey>
            {model}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Price: </ProductDetailDescriptionKey>
            {price} €
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>CPU: </ProductDetailDescriptionKey>
            {cpu}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>RAM: </ProductDetailDescriptionKey>
            {ram}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Operative system: </ProductDetailDescriptionKey>
            {os}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Display resolution: </ProductDetailDescriptionKey>
            {displayResolution}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Battery: </ProductDetailDescriptionKey>
            {battery}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Dimensions: </ProductDetailDescriptionKey>
            {dimentions}
          </ProductDetailDescriptionParagraph>
          <ProductDetailDescriptionParagraph>
            <ProductDetailDescriptionKey>Weight: </ProductDetailDescriptionKey>
            {weight} gr
          </ProductDetailDescriptionParagraph>
        </div>
        <ProductDetailActions>
          <Dropdown name="colors">
            {colors.map(({ code, name }) => {
              return (
                <option key={code} value={code}>
                  {name}
                </option>
              );
            })}
          </Dropdown>
          <Dropdown name="storages">
            {storages.map(({ code, name }) => {
              return (
                <option key={code} value={code}>
                  {name}
                </option>
              );
            })}
          </Dropdown>
          <AddToCartButton type="button" onClick={onClickAddToCart}>
            Add to cart
          </AddToCartButton>
        </ProductDetailActions>
      </div>
    </ProductDetail>
  );
};

export default ProductDetails;
