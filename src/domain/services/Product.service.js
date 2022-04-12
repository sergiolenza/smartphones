import { productRepository } from '../../infrastructure/repositories/product.repository';

export const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },
  getProductById: (id) => {
    return productRepository.getProductById(id);
  },
};
