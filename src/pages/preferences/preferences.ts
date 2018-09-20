import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'Preferences'})
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {

  favRestaurants:any;
  favType:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl:MenuController) {
    

  this.favType="favRestaurants";
   
  this.menuCtrl.enable(false);
  this.menuCtrl.swipeEnable(false);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }
  
  fav_data(event){

    console.log(event)
  }

  




}
