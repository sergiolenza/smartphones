import { productRepository } from '../../infrastructure/repositories/product.repository';

const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },
  getProductById: (id) => {
    return productRepository.getProductById(id);
  },
};

export default productService;
