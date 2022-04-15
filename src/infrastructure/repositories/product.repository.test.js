import http from '../http/http';
import mockProducts from './product.repository.mock.json';
import productRepository from './product.repository';

jest.mock('../http/http');

describe('Product repository', () => {
  it('should fetch all the products', async () => {
    http.get.mockImplementation(() => Promise.resolve(mockProducts));
    const products = await productRepository.getProducts();
    expect(products).toMatchObject(mockProducts);
  });
  it('should fetch a product given the id', async () => {
    http.get.mockImplementation(() => Promise.resolve(mockProducts[0]));
    const product = await productRepository.getProductById('ZmGrkLRPXOTpxsU4jjAcv');
    expect(product).toMatchObject(mockProducts[0]);
  });
});
