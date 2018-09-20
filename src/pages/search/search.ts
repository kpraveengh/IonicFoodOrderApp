import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"Search"})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  items: Array<string>;

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Orange', 'Banana', 'Pear', 'Tomato', 'Grape', 'Apple', 'Cherries', 'Cranberries', 'Raspberries', 'Strawberries', 'Watermelon'];
  }
  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  presentProfileModal() {
    let profileModal = this.modalCtrl.create('Location', { userId: 8675309 });
    profileModal.present();
  }


  dismissLocationModal() {
    this.viewCtrl.dismiss();
  }
}
