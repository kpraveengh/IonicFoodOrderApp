import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Filter'})
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  dataForSorting:any=this.navParams.get('sort');
  dataForFilter:any=this.navParams.get('filter');

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController, 
    public  viewCtrl:ViewController) {



  }
  ionViewDidLoad() { 
    console.log('ionViewDidLoad FilterPage');
  }
  
 
  closeFilterModal() {
    this.navCtrl.pop();
  }
  

}
