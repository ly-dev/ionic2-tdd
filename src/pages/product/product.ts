import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsService } from '../../providers/products/products';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: ProductsService, public zone: NgZone) {
  }

  ionViewDidLoad() {
    this.productsService.load().subscribe();
  }
}
