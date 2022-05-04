import http from '../http/http';

const productRepository = {
  getProducts: async () => http.get('https://front-test-api.herokuapp.com/api/product'),
  getProductById: async (id) => http.get(`https://front-test-api.herokuapp.com/api/product/${id}`),
};

export default productRepository;
