import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsService } from '../../providers/products/products';
import { WishlistPage } from '../wishlist/wishlist';
import { WishlistService } from '../../providers/wishlist/wishlist';

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public productsService: ProductsService, public wishlistService: WishlistService) {
  }

  ionViewDidLoad() {
    this.productsService.load().subscribe();
  }

  launchWishlist() {
    this.navCtrl.push(WishlistPage);
  }

  addToWishlist(product){
    this.wishlistService.addProduct(product);
  }
}
