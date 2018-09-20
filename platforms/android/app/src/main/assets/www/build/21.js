webpackJsonp([21],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(710);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = /** @class */ (function () {
    function CartPage(cartprvdr, navCtrl, restprovider, navParams, events, alertCtrl) {
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.taxArray = [];
        this.cartTax = [];
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartItems = this.localCartProducts.length;
        }
        else {
            console.log('no items in cart');
        }
    }
    CartPage.prototype.ionViewDidLoad = function () {
    };
    CartPage.prototype.checkoutPay = function () {
        this.navCtrl.push('Paymentmethod');
    };
    CartPage.prototype.couponVerify = function (offerCode) {
        this.offerSuccessMsg = 'Offer Applied';
        this.offerFailureMsg = 'Invalid Coupon';
        if (offerCode == undefined) {
            this.offerSuccessMsg = 0;
            this.offerFailureMsg = 'Invalid Coupon';
        }
        else {
            this.offerSuccessMsg = 'Offer Applied, 10Rs Discount';
            this.offerFailureMsg = 0;
        }
    };
    CartPage.prototype.checkoutorder = function () {
        this.navCtrl.push('Paymentmethod');
    };
    CartPage.prototype.decrementQty = function (product, index) {
        this.cartprvdr.decrementQty(product, index);
    };
    CartPage.prototype.incrementQty = function (product) {
        this.cartprvdr.incrementQty(product);
    };
    CartPage.prototype.removeCartItem = function (product) {
        this.cartprvdr.removeCartItem(product);
    };
    CartPage.prototype.ngDoCheck = function () {
        this.localCartProducts = this.cartprvdr.localCartProducts;
        this.cartLength = this.cartprvdr.cartLength();
        this.totalbill = this.cartprvdr.priceTotal();
        this.cartTax = this.cartprvdr.cartTax();
        this.grandTotal = this.cartprvdr.grandTotal();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n\n    <ion-row class="cart-list-items" *ngFor="let cartproduct of localCartProducts; let i = index">\n        <ion-col class="cart-list-item-details">  \n              <ion-row class="cart-item-single">              \n                  <ion-col col-5 class="item-info-block">\n                      <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                    <h2 text-wrap class="item-title">{{cartproduct.ProductName}}</h2>\n                    </ion-col>           \n                    <ion-col col-4>\n\n                    <input (click)="decrementQty(cartproduct,i)" type=\'button\'  value=\'-\' class=\'qtyminus\'  field=\'quantity\' />\n                      <input type=\'text\' name=\'quantity\' [(ngModel)]="cartproduct.productQty" class=\'qty\' />\n                      <input (click)="incrementQty(cartproduct)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                 </ion-col> \n                 <ion-col col-3 class="item-status-block">\n                    <h4 class="item-price">&#8377;{{(cartproduct.productPrice * cartproduct.productQty).toFixed(2)}} </h4>\n                </ion-col>  \n                 <ion-col>\n                   <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge> \n                  <ion-icon class="itemRemove-icon" small outline pull-right color="danger" name="trash" (click)="removeCartItem(cartproduct)" ></ion-icon>\n                </ion-col>       \n                </ion-row>  \n            </ion-col>\n            </ion-row>\n\n<ion-row>\n    <ion-col>\n            <ion-item>\n                    <ion-input type="text" placeholder="Enter Coupon Code" [(ngModel)]="offerCode" name="offerCode"></ion-input>\n                    <button ion-button small item-end color="themecolor" (click)="couponVerify(offerCode)">Apply</button>                                          \n                   </ion-item>\n                   <ion-label *ngIf="offerFailureMsg" style="color:red">{{offerFailureMsg}}</ion-label>\n                   <ion-label *ngIf="offerSuccessMsg" style="color:green">{{offerSuccessMsg}}</ion-label>\n            </ion-col>\n</ion-row>\n       \n              <ion-row class="cart-pricing-info" >\n                <ion-col col-8 text-right>Sub Total</ion-col>\n                <ion-col col-4 item-end text-right>&#8377;&nbsp;{{totalbill.toFixed(2)}}</ion-col>\n              </ion-row>\n                <ion-row *ngFor="let tax of cartTax" class="cart-pricing-info" >\n                  <ion-col col-8 text-right>{{tax.taxdes}}</ion-col>\n                  <ion-col col-4 item-end text-right>&#8377;&nbsp;{{tax.taxprice.toFixed(2)}}</ion-col>\n          \n                </ion-row>\n             \n            \n           \n                     \n                 \n                    <hr>\n                    <ion-row class="cart-pricing-info" >\n                        <ion-col col-8 text-right class="grand-total-title">Grand Total</ion-col>\n                        <ion-col col-4 item-end text-right class="grand-total-title">&#8377;&nbsp;{{grandTotal.toFixed(2)}} </ion-col>\n                      </ion-row>\n\n                      <ion-row class="checkout-action-block">\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="light"> <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>&nbsp;Back</button>                                          \n                          </ion-col>\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="themecolor" (click)="checkoutorder()">Checkout &nbsp;<ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>                                          \n                          </ion-col>\n                        </ion-row>\n\n    </ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=21.js.map