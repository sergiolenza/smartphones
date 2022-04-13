import { useQuery } from 'react-query';
import productRepository from '../../repositories/product.repository';

const useProducts = () => {
  return useQuery('products', () => productRepository.getProducts());
};

export default useProducts;
