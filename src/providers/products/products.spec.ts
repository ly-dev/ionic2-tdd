import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend } from '@angular/http/testing';
import { ProductsService } from './products';

let productsService:any = null;

describe('Service: ProductsService', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

        declarations: [

        ],

        providers: [
            ProductsService,
        ],

        imports: [
          HttpClientTestingModule
        ]

    }).compileComponents();

  }));

  beforeEach(() => {

  });


  it('should have a non empty array called products', () => {
    const productsService = TestBed.get(ProductsService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const mockResponse = {"products": [{"title": "Cool shoes", "description": "Isnt it obvious?", "price": "39.99"}, {"title": "Broken shoes", "description": "You should probably get the other ones", "price": "89.99"}, {"title": "Socks", "description": "The essential footwear companion", "price": "2.99"} ] };

    productsService.load().subscribe(() => {
      expect(Array.isArray(productsService.products)).toBeTruthy();
      expect(productsService.products.length).toBeGreaterThan(0);
    });

    http.expectOne('assets/data/products.json').flush(mockResponse);
  });

});
