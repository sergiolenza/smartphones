import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 150px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const CardModel = styled.h3`
  font-weight: 500;
  color: black;
`;

const CardBrand = styled.h5`
  text-transform: uppercase;
  color: darkgrey;
`;

// const CardFooter = styled.div`
//   display: flex;
//   padding: 1rem;
//   text-align: center;
// `;

const CardPrice = styled.h3`
  font-weight: bold;
  color: black;
`;

const ProductCard = ({ product }) => {
  // const onClickCard = useCallback((ev) => {
  //   ev.preventDefault();
  //   onAddToCart(product);
  // }, []);

  return (
    <Card>
      <CardHeader>
        <Image src={product.imgUrl} />
      </CardHeader>

      <CardBody>
        <CardModel>{product.model}</CardModel>
        <CardBrand>{product.brand}</CardBrand>
        <CardPrice>{product.price || '0'} €</CardPrice>
      </CardBody>

      {/* <CardFooter>
        <button type="button" onClick={onClickCard}>
          Add to cart
        </button>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
