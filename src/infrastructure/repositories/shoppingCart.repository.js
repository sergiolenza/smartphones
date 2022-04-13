import http from '../http/http';

const shoppingCartRepository = {
  addProduct: async ({ id, colorCode, storageCode }) => {
    try {
      const result = await http.post('https://front-test-api.herokuapp.com/api/cart', {
        id,
        colorCode,
        storageCode,
      });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default shoppingCartRepository;
