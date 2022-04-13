const shoppingCartService = {
  addProductToShoppingCart: (product, shoppingCart) => {
    return {
      ...shoppingCart,
      items: [...shoppingCart.items, product],
    };
  },
};

export default shoppingCartService;
