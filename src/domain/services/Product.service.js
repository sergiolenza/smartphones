import productRepository from '../../infrastructure/repositories/product.repository';

const productService = {
  getProducts: () => {
    return productRepository.getProducts();
  },
  getProductById: (productId) => {
    return productRepository.getProductById(productId);
  },
};

export default productService;
