import React, { lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './infrastructure/ui/components/Header/Header';
import LoadingPlaceholder from './infrastructure/ui/components/LoadingPlaceholder/LoadingPlaceholder';
import shoppingCartService from './domain/services/ShoppingCart.service';

const ProductsList = lazy(() => import('./infrastructure/ui/views/ProductsList/ProductsList'));
const ProductDetails = lazy(() =>
  import('./infrastructure/ui/views/ProductDetails/ProductDetails')
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

const Container = styled.div`
  flex: 1;
  overflow: auto;
  padding: 2rem;
`;

const App = () => {
  const [shoppingCart, setShoppingCart] = useState({ items: [] });

  const handleAddToShoppingCart = (product) => {
    const newShoppingCart = shoppingCartService.addProductToShoppingCart(product, shoppingCart);
    setShoppingCart(newShoppingCart);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header shoppingCartItems={shoppingCart.items.length} />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingPlaceholder />}>
                  <ProductsList />
                </Suspense>
              }
            />
            <Route
              path=":productId"
              element={
                <Suspense fallback={<LoadingPlaceholder />}>
                  <ProductDetails onAddToCart={handleAddToShoppingCart} />
                </Suspense>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
