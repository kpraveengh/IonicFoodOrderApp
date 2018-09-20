webpackJsonp([10],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentmethodPageModule", function() { return PaymentmethodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentmethod__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentmethodPageModule = /** @class */ (function () {
    function PaymentmethodPageModule() {
    }
    PaymentmethodPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paymentmethod__["a" /* PaymentmethodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paymentmethod__["a" /* PaymentmethodPage */]),
            ],
        })
    ], PaymentmethodPageModule);
    return PaymentmethodPageModule;
}());

//# sourceMappingURL=paymentmethod.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentmethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentmethodPage = /** @class */ (function () {
    function PaymentmethodPage(cartprvdr, navCtrl, navParams, alertCtrl) {
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.newCardForm = 0;
        this.localCartProducts = this.cartprvdr.localCartProducts;
    }
    PaymentmethodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentmethodPage');
    };
    PaymentmethodPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PaymentmethodPage.prototype.addNewCard = function () {
        if (this.newCardForm == 0) {
            this.newCardForm = 1;
        }
        else {
            this.newCardForm = 0;
        }
    };
    PaymentmethodPage.prototype.pay = function () {
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
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        var successCallback = function (payment_id) {
            var alert = this.alertCtrl.create({
                title: 'Thank you',
                subTitle: '#order number is : ' + payment_id,
                buttons: ['Dismiss']
            });
            alert.present();
        };
        var cancelCallback = function (error) {
            alert(error.description + ' (Error ' + error.code + ')');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    PaymentmethodPage.prototype.payorder = function () {
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        var alert = this.alertCtrl.create({
            title: 'Thank you',
            subTitle: 'Order Placed',
            buttons: ['Dismiss']
        });
        alert.present();
        this.navCtrl.push('Home');
    };
    PaymentmethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-paymentmethod',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\paymentmethod\paymentmethod.html"*/'\n\n  <ion-header>\n      <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-buttons >\n            <button ion-button icon-only>\n              <ion-label class="open-page-title">Payment Method </ion-label>           \n            </button>\n            </ion-buttons>\n        <ion-buttons end>\n       \n        <button ion-button  icon-only >\n            <ion-label>784.00</ion-label>\n        </button>\n      </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n    \n  <ion-content>\n      <ion-card>\n          <ion-card-header>\n              INTERNAL WALLET\n            </ion-card-header>\n          <ion-list radio-group [(ngModel)]="relationship" style="line-height: 30px;">\n            <ion-row style="display: flex;">\n            <ion-col col-2>\n              <img src="assets/icon/pay1.png">\n            </ion-col>\n            <ion-col col-10 >\n              <ion-item style="line-height: 30px;">\n                <ion-label>Cozy Wallet (Rs 650.00)</ion-label>\n                <ion-label class="cashback-offer-pay">10% Cashback</ion-label>\n             \n                <ion-radio value="friends" checked></ion-radio>\n                <span>10Rs Cashback</span>  \n              </ion-item>\n            </ion-col>\n            </ion-row>\n           \n            </ion-list>\n          </ion-card>\n    \n      <ion-card>\n      <ion-card-header>\n          WALLETS\n        </ion-card-header>\n      <ion-list radio-group [(ngModel)]="relationship">\n          <ion-item>\n            <ion-label>Paytm</ion-label>\n         \n            <ion-radio value="friends" checked></ion-radio>\n            <span>10Rs Cashback</span>  \n          </ion-item>\n          <ion-item>\n            <ion-label>PhonePay</ion-label>\n            <ion-radio value="family"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Freecharge</ion-label>\n            <ion-radio value="enemies" [disabled]="isDisabled"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <ion-item>\n            <button item-end ion-button color="themecolor" round outline (click)="addNewPayMethod()">Add New</button>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n              CREDIT/DEBIT CARDS\n            </ion-card-header>\n          <ion-list radio-group [(ngModel)]="relationship">\n              <ion-item>\n                <ion-label>4582-XXXX-XXXX-5689</ion-label>\n                <ion-radio value="friends" checked></ion-radio>\n              </ion-item>\n            </ion-list>\n            <ion-item>\n                <button item-end ion-button color="themecolor" round outline (click)="addNewCard()">Add New</button>\n            </ion-item>\n          </ion-card>\n\n          <ion-row *ngIf="newCardForm">\n              <ion-card>\n                  <ion-card-header>\n                      ADD NEW CARD\n                    </ion-card-header>\n            <ion-col>\n\n                <form  #registerForm="ngForm">\n                    <ion-row>\n                      <ion-col>\n                        <ion-list inset>\n              \n                          <ion-item>\n                            <ion-input type="text" placeholder="CARD NUMBER" name="name" [(ngModel)]="number" required></ion-input>\n                          </ion-item>\n              \n                          <ion-item>\n                              <ion-datetime full required name="birthdate" displayFormat="DD MMM YYYY" pickerFormat="MMM YYYY" [(ngModel)]="expDate" [ngModelOptions]="{standalone:true}"></ion-datetime>\n                          </ion-item>\n              \n                          <ion-item>\n                            <ion-input type="password" placeholder="CVV" name="cvv" [(ngModel)]="cvv" required></ion-input>\n                          </ion-item>\n\n              \n                        </ion-list>\n                      </ion-col>\n                    </ion-row>\n              \n                    <ion-row>\n                      <ion-col class="signup-col" style="text-align: center">\n                        <button ion-button class="submit-btn" type="submit" [disabled]="!registerForm.form.valid">SAVE & CONTINUE</button>\n                        <button ion-button class="submit-btn" type="submit" [disabled]="!registerForm.form.valid" color="success">PAY 784.00</button>\n                      </ion-col>\n                    </ion-row>\n              \n\n                                <ion-row class="checkout-action-block">\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="light"> <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>&nbsp;Back</button>                                          \n                          </ion-col>\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="themecolor" (click)="checkoutorder()">Checkout &nbsp;<ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>                                          \n                          </ion-col>\n                        </ion-row>\n                  </form>\n          </ion-col>\n          </ion-card>\n          \n          </ion-row>\n          <ion-row class="checkout-action-block">\n            <ion-col col-6 text-center>\n                <button ion-button round default item-end color="light"> <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>&nbsp;Back</button>                                          \n            </ion-col>\n            <ion-col col-6 text-center>\n                <button ion-button round default item-end color="themecolor" (click)="pay()">Pay &nbsp;<ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>                                          \n            </ion-col>\n          </ion-row>\n          \n</ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\paymentmethod\paymentmethod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PaymentmethodPage);
    return PaymentmethodPage;
}());

//# sourceMappingURL=paymentmethod.js.map

/***/ })

});
//# sourceMappingURL=10.js.map