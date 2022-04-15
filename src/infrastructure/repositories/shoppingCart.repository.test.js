import http from '../http/http';
import shoppingCartRepository from './shoppingCart.repository';

const mockProduct = {
  id: 'ZmGrkLRPXOTpxsU4jjAcv',
  colorCode: 1,
  storageCode: 2,
};
const mockResult = { count: 1 };

jest.mock('../http/http');

describe('Shopping cart repository', () => {
  it('should add a product into the shopping cart', async () => {
    http.post.mockImplementation(() => Promise.resolve(mockResult));
    const result = await shoppingCartRepository.addProduct(mockProduct);
    expect(result).toMatchObject(mockResult);
  });
});
