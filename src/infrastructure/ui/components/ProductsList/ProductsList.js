import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const List = styled.ul`
  --grid-layout-gap: 2rem;
  --grid-column-count: 4;
  --grid-item--min-width: 280px;
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
  grid-row-gap: 2rem;
`;

const ListItem = styled.li`
  text-decoration: none;
`;

const ProductsList = () => {
  const { status, data } = useProducts();

  if (status === 'loading') {
    return 'Loading...';
  }

  return (
    <List>
      {data.map((product) => (
        <ListItem key={product.id} as={Link} to={`/${product.id}`}>
          <ProductCard product={product} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
