import React from 'react';
import useProduct from '../../hooks/useProduct';

const DynamicProductBreadcrumb = ({ match }) => {
  const { status, data: product } = useProduct(match.params.productId);

  if (status === 'loading') {
    return '...';
  }

  return <span>{product.model}</span>;
};

export default DynamicProductBreadcrumb;
