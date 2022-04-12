import * as uuid from 'uuid';
import ShoppingCart from '../models/ShoppingCart';

const hasProduct = (shoppingCart, product) => {
  return shoppingCart.items.find((item) => item.id === product.id);
};

const createShoppingCart = (product) => {
  return new ShoppingCart({ id: uuid.v4(), items: [product] });
};

const increaseShoppingCart = (shoppingCart, product) => {
  return {
    ...shoppingCart,
    items: [...shoppingCart.items, product],
  };
};

const addProductToShoppingCart = (product, shoppingCart) => {
  // eslint-disable-next-line no-nested-ternary
  return shoppingCart
    ? hasProduct(shoppingCart, product)
      ? shoppingCart
      : increaseShoppingCart(shoppingCart, product)
    : createShoppingCart(product);
};

// eslint-disable-next-line import/prefer-default-export
export { addProductToShoppingCart };
