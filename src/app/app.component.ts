import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "Login";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
  public alertCtrl:AlertController, public toastCtrl:ToastController, public network:Network) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: "Home" },
      { title: 'Profile', component: "Profile" },
      { title: 'Order History', component: "Orderhistory" },
      { title: 'Orders In Progress', component: "Currentorders"},
      { title: 'Favourites', component: "Preferences"},
      { title: 'Offers', component: "Specialoffers"},
      { title: 'About', component: "About"},
      { title: 'Change Password', component: "Changepassword"}
    ];


    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      let alert = this.alertCtrl.create({
      title:'Network was disconnected :-(',
      message:'Please check your network status',
      cssClass:'alertCustomCss',
      buttons: ['ok']
      });
      alert.present();
      });
      this.network.onConnect().subscribe(()=>{
      let toast = this.toastCtrl.create({
      message:'Network was connected :-)',
      duration: 6000,
      cssClass: "networkConnected",
      position: 'bottom'
      });
      toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      });
      toast.present();
      });



  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  



}


