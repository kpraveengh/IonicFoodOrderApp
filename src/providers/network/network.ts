import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform, IonicApp } from 'ionic-angular';
declare var Connection;
@Injectable()
export class NetworkProvider {
  onDevice: boolean;
  toastAlert: any;
  constructor(public platform: Platform, public ionicApp: IonicApp, private network: Network) {
    this.onDevice = this.platform.is('cordova');
  }
  startWatchingConnection() {
    this.network.onDisconnect().subscribe(() => {
      let activePortal = this.ionicApp._toastPortal.getActive();
         if (!activePortal) {
          this.alertOffline();
         }
    });
    this.network.onConnect().subscribe(() => {
         let activePortal = this.ionicApp._toastPortal.getActive();
         if (activePortal) {
           activePortal.dismiss();
         }
    });
  }

  alertOffline() {
    alert('no internet')
    } 

  isOnline(): boolean {
    console.log( this.network.type);
    if (this.onDevice && this.network.type) {
      return this.network.type !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  } 
}