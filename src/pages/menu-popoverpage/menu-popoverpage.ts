import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the MenuPopoverpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'MenuPopoverPage'})
@Component({
  selector: 'page-menu-popoverpage',
  templateUrl: 'menu-popoverpage.html',
})



export class MenuPopoverpagePage {

  storeMenu=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {

   this.storeMenu=this.navParams.data;
console.log(this.storeMenu)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPopoverpagePage');
  }

  scrollToElement(menu){

    this.events.publish('scrollMenu', menu);

  }

}
