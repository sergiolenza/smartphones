import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({ onSelectProduct }) => {
  // const { status, data, error, isFetching } = useProducts();
  const { status, data } = useProducts();

  // if (isFetching) {
  //   return null;
  // }

  return (
    <ul>
      {status === 'loading'
        ? 'Loading...'
        : data.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} onAddToCart={onSelectProduct} />
            </li>
          ))}
    </ul>
  );
};

export default ProductsList;
