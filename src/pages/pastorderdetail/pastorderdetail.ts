import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage({name:'Pastorderdetail'})
@Component({
  selector: 'page-pastorderdetail',
  templateUrl: 'pastorderdetail.html',
})
export class PastorderdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastorderdetailPage');
  }

  dismissPastorderdetailModal() {
    this.viewCtrl.dismiss();
  }

}
