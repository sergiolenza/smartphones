import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import InputSearch from '../../components/InputSearch/InputSearch';
import EmptyPlaceholder from '../../components/EmptyPlaceholder/EmptyPlaceholder';
import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';

const ProductsListContainer = styled.section`
  --grid-layout-gap: 2rem;
  --grid-column-count: 4;
  --grid-item--min-width: 280px;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  .products-list--list {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
    );
    grid-gap: var(--grid-layout-gap);
    grid-row-gap: 2rem;
  }
  .products-list--list--item {
    text-decoration: none;
  }
`;

const ProductsList = () => {
  const { status, data: products } = useProducts();
  const [query, setQuery] = useState('');

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  let filteredProducts = products;
  if (query !== '') {
    filteredProducts = products.filter(({ brand, model }) => {
      return (
        brand.toLowerCase().includes(query.toLowerCase()) ||
        model.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  if (status === 'loading') {
    return <LoadingPlaceholder />;
  }

  return (
    <ProductsListContainer>
      <InputSearch onChange={debouncedChangeHandler} />
      {filteredProducts.length === 0 ? (
        <EmptyPlaceholder text="No products to display" />
      ) : (
        <ul className="products-list--list">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link className="products-list--list--item" to={`/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ProductsListContainer>
  );
};

export default ProductsList;