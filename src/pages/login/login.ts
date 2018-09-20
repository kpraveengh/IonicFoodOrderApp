import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

@IonicPage({name:"Login"})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rmchecked:any;
  public result_data:any;
  private username: string;
  private password: string;
  loading:any;
  constructor(public restprovider:RestProvider, public navCtrl: NavController, 
    public navParams: NavParams,public loadingCtrl:LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  LoginRemCheck(){
    this.rmchecked='rmchecked';
  }
  login(){
    this.presentWithGif1();
    const data={'username':this.username , 'password':this.password}
    this.restprovider.getLoginData(data).subscribe((data:any)=>{
      this.result_data=data.data;   
      this.loaderDismiss();
      this.navCtrl.push('Home');
    })
  }



// loader method start

  presentWithGif1() {
    this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
      <div class="custom-spinner-container">
        <img class="loading" width="120px" src="assets/imgs/loader.gif" />
      </div>`
    });
    
    return this.loading.present();
}

loaderDismiss() {
  return new Promise((resolve, reject) => {
      if (this.loading) {
          return this.loading.dismiss(resolve(true)).catch(error => {
              console.log('loading error: ', error);
          });
      } else {
          resolve(true);
      }
  });

}

public createAccount() {
  this.navCtrl.push('SignupPage');
}

// loader method end

}
