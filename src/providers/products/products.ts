import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  products: any;

  constructor(public httpClient: HttpClient) {

  }

  load () {
    return this.httpClient.get('assets/data/products.json').map((data: any) => {
      this.products = data.products;
    });
  }

}
