import { useQuery } from 'react-query';
import productRepository from '../../repositories/product.repository';

const useProduct = (id) => {
  return useQuery(['product', id], async () => productRepository.getProductById(id));
};

export default useProduct;
