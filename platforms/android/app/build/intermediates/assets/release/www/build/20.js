webpackJsonp([20],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(700);
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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(345);
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
    function CartPage(cartprvdr, navCtrl, restprovider, navParams, event, alertCtrl) {
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.navParams = navParams;
        this.event = event;
        this.alertCtrl = alertCtrl;
        this.taxArray = [];
        this.taxGroups = [];
        this.cartTax = [];
        this.totalbill = 0;
        this.localCartProducts = this.cartprvdr.localCartProducts;
        // if(this.localCartProducts !=null || this.localCartProducts !=undefined ){
        //   this.cartItems=this.localCartProducts.length;   
        //   }else{
        //     console.log(1)
        //   }
        this.priceTotal();
        // this.final_TaxAmount1();
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
        this.itemtaxes();
        this.cartTaxInfo();
        this.priceTotal();
    };
    CartPage.prototype.checkoutPay = function () {
        this.navCtrl.push('Paymentmethod');
    };
    CartPage.prototype.couponVerify = function (offerCode) {
        this.offerSuccessMsg = 'Offer Applied';
        this.offerFailureMsg = 'Invalid Coupon';
        console.log(offerCode);
        if (offerCode == undefined) {
            this.offerSuccessMsg = 0;
            this.offerFailureMsg = 'Invalid Coupon';
        }
        else {
            this.offerSuccessMsg = 'Offer Applied, 10Rs Discount';
            this.offerFailureMsg = 0;
        }
    };
    // increment product qty
    CartPage.prototype.incrementQty = function (product) {
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
                return (element.ProductNumber == product.ProductNumber);
            });
        }
        var cartItem = this.existCartProdductNumber;
        cartItem[0].productQty++;
        cartItem[0].subTotal = (parseFloat(cartItem[0].productQty) * parseFloat(cartItem[0].Price1));
        // console.log(product.qty)
        // localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));
        this.cartprvdr.localCartProducts = this.localCartProducts;
        this.itemtaxes();
        this.cartTaxInfo();
        this.priceTotal();
    };
    // decrement product qty
    CartPage.prototype.decrementQty = function (product, index) {
        // console.log(product)
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
                return (element.ProductNumber == product.ProductNumber);
            });
        }
        var cartItem = this.existCartProdductNumber;
        cartItem[0].productQty--;
        if (cartItem[0].productQty < 1) {
            var filteredItems = this.localCartProducts.filter(function (item) { return item.ProductNumber !== cartItem[0].ProductNumber; });
            this.localCartProducts = filteredItems;
            this.cartprvdr.localCartProducts = this.localCartProducts;
            // localStorage.setItem('cartitem',JSON.stringify(filteredItems));
        }
        // console.log(product.qty)
        this.cartprvdr.localCartProducts = this.localCartProducts;
        // localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));
        this.itemtaxes();
        // this.cartTaxInfo();
        this.priceTotal();
    };
    CartPage.prototype.cartlength = function () {
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartLength = this.localCartProducts.length;
        }
        else {
            this.cartLength = 0;
        }
    };
    CartPage.prototype.priceTotal = function () {
        this.totalamt = 0;
        this.totalQty = 0;
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            for (var _i = 0, _a = this.localCartProducts; _i < _a.length; _i++) {
                var item = _a[_i];
                this.totalamt = (this.totalamt) + (item.productPrice * item.productQty);
            }
            var taxinit = 0;
            // console.log('t', this.cartTax);
            for (var _b = 0, _c = this.cartTax; _b < _c.length; _b++) {
                var taxamnt = _c[_b];
                taxinit = (taxinit) + (taxamnt.taxprice);
            }
            this.totaltax = taxinit;
            this.grandTotal = (this.totalamt).toFixed(2);
            this.totalbill = (+this.grandTotal + this.totaltax).toFixed(2);
        }
        else {
            this.grandTotal = 0.00;
        }
    };
    CartPage.prototype.itemtaxes = function () {
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            for (var _i = 0, _a = this.localCartProducts; _i < _a.length; _i++) {
                var item = _a[_i];
                var _loop_1 = function (iTax) {
                    if (item.Tax.find(function (x) { return x.tax_id == iTax.tax_id; })) {
                        this_1.taxArray.push({
                            'tax_id': iTax.tax_id,
                            'taxdes': iTax.taxdes,
                            'taxper': iTax.taxper,
                            'taxprice': iTax.taxprice
                        });
                        // console.log(this.taxArray);
                    }
                    else {
                        console.log('2', iTax);
                    }
                };
                var this_1 = this;
                for (var _b = 0, _c = item.Tax; _b < _c.length; _b++) {
                    var iTax = _c[_b];
                    _loop_1(iTax);
                }
            }
            var _loop_2 = function (tax) {
                this_2.taxGroup = this_2.taxArray.filter(function (element) {
                    return (element.tax_id == tax.tax_id);
                });
                this_2.taxGroups.push(this_2.taxGroup);
            };
            var this_2 = this;
            for (var _d = 0, _e = this.taxArray; _d < _e.length; _d++) {
                var tax = _e[_d];
                _loop_2(tax);
            }
        }
    };
    CartPage.prototype.cartTaxInfo = function () {
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            var _loop_3 = function (tax) {
                this_3.taxGroup = this_3.taxArray.filter(function (element) {
                    return (element.tax_id == tax.tax_id);
                });
                this_3.taxGroups.push(this_3.taxGroup);
            };
            var this_3 = this;
            for (var _i = 0, _a = this.taxArray; _i < _a.length; _i++) {
                var tax = _a[_i];
                _loop_3(tax);
            }
            for (var _b = 0, _c = this.taxGroup; _b < _c.length; _b++) {
                var a = _c[_b];
                if (!this[a.tax_id]) {
                    this[a.tax_id] = { tax_id: a.tax_id, taxdes: a.taxdes, taxper: a.taxper, taxprice: 0 };
                    this.cartTax.push(this[a.tax_id]);
                }
                this[a.tax_id].taxprice += a.taxprice;
            }
            console.log('test', this.cartTax);
        }
    };
    CartPage.prototype.removeCartItem = function (product) {
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        var filteredItems = this.localCartProducts.filter(function (item) { return item.ProductNumber !== product.ProductNumber; });
        console.log(filteredItems);
        this.localCartProducts = filteredItems;
        this.cartprvdr.localCartProducts = this.localCartProducts;
        // localStorage.setItem('cartitem',JSON.stringify(filteredItems));
        this.itemtaxes();
        this.cartTaxInfo();
        this.priceTotal();
    };
    CartPage.prototype.checkoutorder = function () {
        var _this = this;
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        var data = { 'store_id': this.localCartProducts[0].store_id };
        this.restprovider.postapidata(data).subscribe(function (data) {
            _this.result_data = data.data;
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: 'Thank you',
                subTitle: 'Order Placed',
                buttons: ['Dismiss']
            });
            alert.present();
            _this.navCtrl.push('Paymentmethod');
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n\n\n    <ion-row class="cart-list-items" *ngFor="let cartproduct of localCartProducts; let i = index">\n        <ion-col class="cart-list-item-details">  \n              <ion-row class="cart-item-single">              \n                  <ion-col col-5 class="item-info-block">\n                      <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                    <h2 text-wrap class="item-title">{{cartproduct.ProductName}}</h2>\n                    </ion-col>           \n                    <ion-col col-4>\n\n                    <input (click)="decrementQty(cartproduct,i)" type=\'button\'  value=\'-\' class=\'qtyminus\'  field=\'quantity\' />\n                      <input type=\'text\' name=\'quantity\' [(ngModel)]="cartproduct.productQty" class=\'qty\' />\n                      <input (click)="incrementQty(cartproduct)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                 </ion-col> \n                 <ion-col col-3 class="item-status-block">\n                    <h4 class="item-price">&#8377;{{(cartproduct.productPrice * cartproduct.productQty).toFixed(2)}} </h4>\n                </ion-col>  \n                 <ion-col>\n                   <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge> \n                  <ion-icon class="itemRemove-icon" small outline pull-right color="danger" name="trash" (click)="removeCartItem(cartproduct)" ></ion-icon>\n                </ion-col>       \n                </ion-row>  \n            </ion-col>\n            </ion-row>\n\n\n                    <!-- first style item-end -->\n\n                  <!-- <ion-row class="cart-list-items" >\n                      <ion-col>\n                        <ion-card>    \n                            <ion-row class="cart-item-single">              \n                                <ion-col col-5 class="item-info-block">\n                                    <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                                  <h2 text-wrap class="item-title">Super Woman Shake</h2>\n                                  </ion-col>           \n                                  <ion-col col-4>\n                                  <input type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                                  <input type=\'text\' name=\'quantity\' value=\'6\' class=\'qty\' />\n                                  <input type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                               </ion-col> \n                               <ion-col col-3 class="item-status-block">\n                                  <h4 class="item-price text-right">&#8377;&nbsp;758.00 </h4>\n                              </ion-col>  \n                               <ion-col>\n                                 <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                                <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge> \n                                <ion-icon  class="itemRemove-icon" small outline item-end color="danger" name="trash"></ion-icon>\n                              </ion-col>       \n                              </ion-row>            \n                          </ion-card>\n                          </ion-col>\n                          </ion-row> -->\n     \n\n\n                                  <!-- cart billing information -->\n<ion-row>\n    <ion-col>\n            <ion-item>\n                    <ion-input type="text" placeholder="Enter Coupon Code" [(ngModel)]="offerCode" name="offerCode"></ion-input>\n                    <button ion-button small item-end color="themecolor" (click)="couponVerify(offerCode)">Apply</button>                                          \n                   </ion-item>\n                   <ion-label *ngIf="offerFailureMsg" style="color:red">{{offerFailureMsg}}</ion-label>\n                   <ion-label *ngIf="offerSuccessMsg" style="color:green">{{offerSuccessMsg}}</ion-label>\n            </ion-col>\n</ion-row>\n       \n              <ion-row class="cart-pricing-info" >\n                <ion-col col-8 text-right>Sub Total</ion-col>\n                <ion-col col-4 item-end text-right>&#8377;&nbsp;{{grandTotal}}</ion-col>\n              </ion-row>\n                <ion-row *ngFor="let tax of cartTax" class="cart-pricing-info" >\n                  <ion-col col-8 text-right>{{tax.taxdes}}</ion-col>\n                  <ion-col col-4 item-end text-right>&#8377;&nbsp;{{tax.taxprice.toFixed(2)}}</ion-col>\n          \n                </ion-row>\n             \n            \n           \n                     \n                 \n                    <hr>\n                    <ion-row class="cart-pricing-info" >\n                        <ion-col col-8 text-right class="grand-total-title">Grand Total</ion-col>\n                        <ion-col col-4 item-end text-right class="grand-total-title">&#8377;&nbsp;{{totalbill}} </ion-col>\n                      </ion-row>\n\n                      <ion-row class="checkout-action-block">\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="light"> <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>&nbsp;Back</button>                                          \n                          </ion-col>\n                          <ion-col col-6 text-center>\n                              <button ion-button round default item-end color="themecolor" (click)="checkoutorder()">Checkout &nbsp;<ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>                                          \n                          </ion-col>\n                        </ion-row>\n\n    </ion-content>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=20.js.map