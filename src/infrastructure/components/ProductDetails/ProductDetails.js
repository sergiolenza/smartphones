import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  return <span>{params.productId}</span>;
};

export default ProductDetails;
