import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing';
import { ProductsProvider } from './products';

let productsProvider:any = null;

describe('Provider: ProductsProvider', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

        declarations: [

        ],

        providers: [
            ProductsProvider,
        ],

        imports: [
          HttpClientTestingModule
        ]

    }).compileComponents();

  }));

  beforeEach(() => {

  });


  it('should have a non empty array called products', () => {
    const productsProvider = TestBed.get(ProductsProvider);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const mockResponse = {"products": [{"title": "Cool shoes", "description": "Isnt it obvious?", "price": "39.99"}, {"title": "Broken shoes", "description": "You should probably get the other ones", "price": "89.99"}, {"title": "Socks", "description": "The essential footwear companion", "price": "2.99"} ] };

    productsProvider.load().subscribe(() => {
      expect(Array.isArray(productsProvider.products)).toBeTruthy();
      expect(productsProvider.products.length).toBeGreaterThan(0);
    });

    http.expectOne('assets/data/products.json').flush(mockResponse);
  });

});
