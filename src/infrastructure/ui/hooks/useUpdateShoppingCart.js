import { useMutation } from 'react-query';
import shoppingCartRepository from '../../repositories/shoppingCart.repository';

const useUpdateShoppingCart = () => {
  return useMutation((newProduct) => shoppingCartRepository.addProduct(newProduct));
};

export default useUpdateShoppingCart;
