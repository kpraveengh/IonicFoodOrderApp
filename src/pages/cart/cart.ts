import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { CartProvider } from "../../providers/cart/cart";


@IonicPage({ name: 'Cart' })
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  offerSuccessMsg: any;
  offerFailureMsg: any;
  offerMsg: any;
  localCartProducts: any;
  cartItems: any;
  grandTotal: any;
  existCartProdductNumber: any;
  totalQty: any;
  priceTotal: any;
  taxArray = [];
  cartTax = [];
  totalbill: any;


  cartLength: any;
  totalamt: any;
  result_data: any;

  constructor(public cartprvdr: CartProvider, public navCtrl: NavController,
    public restprovider: RestProvider, public navParams: NavParams, public events: Events, public alertCtrl: AlertController) {

    this.localCartProducts = this.cartprvdr.localCartProducts;

    if (this.localCartProducts != null || this.localCartProducts != undefined) {
      this.cartItems = this.localCartProducts.length;

    } else {
      console.log('no items in cart')
    }

  }

  ionViewDidLoad() {



  }

  checkoutPay() {
    this.navCtrl.push('Paymentmethod');
  }

  couponVerify(offerCode) {
    this.offerSuccessMsg = 'Offer Applied';
    this.offerFailureMsg = 'Invalid Coupon';

    if (offerCode == undefined) {
      this.offerSuccessMsg = 0;
      this.offerFailureMsg = 'Invalid Coupon';
    } else {
      this.offerSuccessMsg = 'Offer Applied, 10Rs Discount';
      this.offerFailureMsg = 0;

    }

  }



  checkoutorder() {
    this.navCtrl.push('Paymentmethod');
  }

  decrementQty(product, index) {
    this.cartprvdr.decrementQty(product, index);
  }


  incrementQty(product) {
    this.cartprvdr.incrementQty(product);
  }

  removeCartItem(product) {
    this.cartprvdr.removeCartItem(product);
  }

  ngDoCheck() {
    this.localCartProducts = this.cartprvdr.localCartProducts;
    this.cartLength = this.cartprvdr.cartLength();
    this.totalbill = this.cartprvdr.priceTotal();
    this.cartTax = this.cartprvdr.cartTax();
    this.grandTotal = this.cartprvdr.grandTotal();


  }


  // pageclass end here

}











