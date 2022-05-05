import React from 'react';
import useProduct from '../../hooks/useProduct';

const DynamicProductBreadcrumb = ({ match }) => {
  const { data: product } = useProduct(match.params.productId);

  if (!product) {
    return null;
  }

  return <span>{product.model}</span>;
};

export default DynamicProductBreadcrumb;
