import { ProductsProvider } from './products';

let productsProvider:any = null;

describe('Provider: Products', () => {

    beforeEach(() => {
      productsProvider = new ProductsProvider();
    });

    it('should have a non empty array called products', () => {

        let products = productsProvider.products;

        expect(Array.isArray(products)).toBeTruthy();
        expect(products.length).toBeGreaterThan(0);
    });

});
