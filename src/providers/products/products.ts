import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsProvider {

  products: any;

  constructor(public http: Http) {

  }

  load () {
    this.http.get('assets/data/products.json').map((res: any) => res.json()).subscribe(data => {
      this.products = data.products;
    });
  }

}
