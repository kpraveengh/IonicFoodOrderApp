import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';

@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})


export class CartComponent {

  text: string;
  cartItems: any;
  itemsCount: any;
  grandTotal: any;
  localCartProducts: any;
  newCardAddForm: any = 0;
  totalamt: Number = 0;
  cartLength: Number;
  priceTotal: Number;

  constructor(public cartprvdr: CartProvider, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {

    // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));


  }

  viewCartInfo() {
    this.navCtrl.push("Cart");
  }

  ngDoCheck() {
    this.localCartProducts = this.cartprvdr.localCartProducts;
    // localStorage.setItem('cartitem', JSON.stringify(this.cartprvdr.localCartProducts));

    this.cartLength = this.cartprvdr.cartLength();
    this.priceTotal = this.cartprvdr.priceTotal();

  }

  addNewCard() {
    this.newCardAddForm = 1;
  }




}
