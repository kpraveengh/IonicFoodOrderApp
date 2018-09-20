import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the CurrentordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Currentorders'})
@Component({
  selector: 'page-currentorders',
  templateUrl: 'currentorders.html',
})
export class CurrentordersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentordersPage');
  }
  goToOrderView(){
    let orderModal = this.modalCtrl.create('Pastorderdetail');
    orderModal.present();
  
    }
}
