import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist/wishlist'

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController, public wishlistService: WishlistService) {

  }

  ionViewDidLoad() {

  }

  deleteFromWishlist(product){
    this.wishlistService.deleteProduct(product);
  }

}
