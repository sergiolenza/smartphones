import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useProduct from '../../hooks/useProduct';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';
import ErrorPlaceholder from '../../components/ErrorPlaceholder/ErrorPlaceholder';

const GoBack = styled.div`
  margin-bottom: 2rem;
  .goback--link {
    color: #595959;
    text-decoration: none;
  }
`;
const ProductDetail = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(180px, 280px), 1fr));
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 2rem;
  .product-detail--paragraph {
    margin-bottom: 8px;
  }
  .product-detail--key {
    font-weight: 800;
  }
  .product-detail--form {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

const ProductDetails = ({ onAddToCart }) => {
  const params = useParams();
  const { status, data: product } = useProduct(params.productId);

  const [colorCode, setColorCode] = useState();
  const [storageCode, setStorageCode] = useState();

  useEffect(() => {
    if (status === 'success') {
      setColorCode(product.options.colors[0].code);
      setStorageCode(product.options.storages[0].code);
    }
  }, [product]);

  const onClickAddToCart = (ev) => {
    ev.preventDefault();
    onAddToCart({
      id: product.id,
      colorCode,
      storageCode,
    });
  };

  if (status === 'loading') {
    return <LoadingPlaceholder />;
  }

  if (status === 'error') {
    return <ErrorPlaceholder text="We can't seem to find the product you are looking for" />;
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
    primaryCamera,
    secondaryCmera,
  } = product;

  const { colors, storages } = options;

  const isString = (value) => typeof value === 'string' || value instanceof String;

  return (
    <>
      <GoBack>
        <Link className="goback--link" to="/">
          ← Products list
        </Link>
      </GoBack>
      <ProductDetail role="article" aria-label="product-details">
        <Image src={imgUrl} alt={`${brand} ${model}`} lazyLoading />
        <div>
          <div>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Brand: </span>
              {brand}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Model: </span>
              {model}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Price: </span>
              {price ? `${price} €` : 'Not available'}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">CPU: </span>
              {cpu}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">RAM: </span>
              {ram}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Operative system: </span>
              {os}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Display resolution: </span>
              {displayResolution}
            </p>
            <p className="product-detail--paragraph">
              <span className="product-detail--key">Battery: </span>
              {battery}
            </p>
            {primaryCamera ? (
              <p className="product-detail--paragraph">
                <span className="product-detail--key">Back camera: </span>
                {isString(primaryCamera) ? primaryCamera : primaryCamera.join(', ')}
              </p>
            ) : null}
            {secondaryCmera ? (
              <p className="product-detail--paragraph">
                <span className="product-detail--key">Front camera: </span>
                {isString(secondaryCmera) ? secondaryCmera : secondaryCmera.join(', ')}
              </p>
            ) : null}
            {dimentions !== '-' ? (
              <p className="product-detail--paragraph">
                <span className="product-detail--key">Dimensions: </span>
                {dimentions}
              </p>
            ) : null}
            {weight ? (
              <p className="product-detail--paragraph">
                <span className="product-detail--key">Weight: </span>
                {weight} gr
              </p>
            ) : null}
          </div>

          <form className="product-detail--form">
            <Select name="colors" options={colors} value={colorCode} onChange={setColorCode} />
            <Select
              name="storages"
              options={storages}
              value={storageCode}
              onChange={setStorageCode}
            />
            <Button type="button" onClick={onClickAddToCart} disabled={!price}>
              Add to cart
            </Button>
          </form>
        </div>
      </ProductDetail>
    </>
  );
};

export default ProductDetails;
