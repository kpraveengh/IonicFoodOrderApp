import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Orderhistory'})
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public modalCtrl:ModalController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderhistoryPage');
  }

 

  goToOrderView(){
  let orderModal = this.modalCtrl.create('Pastorderdetail');
  orderModal.present();

  }

}
