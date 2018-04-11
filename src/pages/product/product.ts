import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsProvider: ProductsProvider, public zone: NgZone) {
  }

  ionViewDidLoad() {
    this.productsProvider.load().subscribe();
  }
}
