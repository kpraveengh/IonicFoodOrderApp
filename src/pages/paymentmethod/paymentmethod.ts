import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CartProvider } from "../../providers/cart/cart";




@IonicPage({name:'Paymentmethod'})
@Component({
  selector: 'page-paymentmethod',
  templateUrl: 'paymentmethod.html',
})
export class PaymentmethodPage {

  newCardForm:any=0;
  localCartProducts:any;

  constructor(public cartprvdr:CartProvider,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

    this.localCartProducts=this.cartprvdr.localCartProducts;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentmethodPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  addNewCard(){
    if( this.newCardForm == 0 ){
      this.newCardForm=1;
    }else{
      this.newCardForm=0;
    }
    
  }

  pay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'demo@email.com',
        contact: '1234567890',
        name: 'My Name'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function() {
          alert('dismissed')
        }
      }
    };

    var successCallback = function(payment_id) {

      let alert = this.alertCtrl.create({
        title: 'Thank you',
        subTitle: '#order number is : ' + payment_id,
        buttons: ['Dismiss']
      });
      alert.present();
    };

    var cancelCallback = function(error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }


  payorder(){

    // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
    this.localCartProducts=this.cartprvdr.localCartProducts;
  

  
      let alert = this.alertCtrl.create({
        title: 'Thank you',
        subTitle: 'Order Placed',
        buttons: ['Dismiss']
      });
      alert.present();
  
      this.navCtrl.push('Home');
    }

  


}
