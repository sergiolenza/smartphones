import http from '../http/http';

const productRepository = {
  getProducts: async () => {
    try {
      const products = await http.get('https://front-test-api.herokuapp.com/api/product');
      return products;
    } catch (e) {
      throw new Error(e);
    }
  },
  getProductById: async (id) => {
    try {
      const product = await http.get(`https://front-test-api.herokuapp.com/api/product/${id}`);
      return product;
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default productRepository;
