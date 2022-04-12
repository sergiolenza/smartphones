import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ProductsList from './infrastructure/components/ProductsList/ProductsList';
import ProductDetails from './infrastructure/components/ProductDetails/ProductDetails';
import { addProductToShoppingCart } from './domain/services/ShoppingCart.service';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

const App = () => {
  const [shoppingCart, setShoppingCart] = useState(null);

  const handleAddToShoppingCart = (product) => {
    setShoppingCart(addProductToShoppingCart(product, shoppingCart));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          {/* <Header shoppingCartItems={shoppingCart.items.length} /> */}

          <Routes>
            <Route path="/" element={<ProductsList onSelectProduct={handleAddToShoppingCart} />} />
            <Route path=":productId" element={<ProductDetails />} />
          </Routes>

          {/* <Routes>
            <Route
              index
              element={
                <>
                  <ProductsList onSelectProduct={handleAddToShoppingCart} />
                  {shoppingCart && <p>Items on shopping cart: {shoppingCart.items.length}</p>}
                </>
              }
            />
            <Route
              path="products"
              element={
                <>
                  <ProductsList onSelectProduct={handleAddToShoppingCart} />
                  {shoppingCart && <p>Items on shopping cart: {shoppingCart.items.length}</p>}
                </>
              }
            >
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Routes> */}
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
