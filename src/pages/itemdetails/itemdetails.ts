import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({name:"Itemdetail"})
@Component({
  selector: 'page-itemdetails',
  templateUrl: 'itemdetails.html',
})
export class ItemdetailsPage {


localCartProducts=[];
cartLength:any;

  menu:any;
  menuNames:any=['Description', 'Reviews', 'Nutrition', 'Making'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.menu="Description";


  this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
  if(this.localCartProducts !=null || this.localCartProducts !=undefined ){
    this.cartLength=this.localCartProducts.length;
  }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemdetailsPage');
  }
  goToCart(){
    this.navCtrl.push("Cart");
  }

}
