webpackJsonp([11],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastorderdetailPageModule", function() { return PastorderdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pastorderdetail__ = __webpack_require__(723);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PastorderdetailPageModule = /** @class */ (function () {
    function PastorderdetailPageModule() {
    }
    PastorderdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pastorderdetail__["a" /* PastorderdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pastorderdetail__["a" /* PastorderdetailPage */]),
            ],
        })
    ], PastorderdetailPageModule);
    return PastorderdetailPageModule;
}());

//# sourceMappingURL=pastorderdetail.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastorderdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PastorderdetailPage = /** @class */ (function () {
    function PastorderdetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    PastorderdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PastorderdetailPage');
    };
    PastorderdetailPage.prototype.dismissPastorderdetailModal = function () {
        this.viewCtrl.dismiss();
    };
    PastorderdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pastorderdetail',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\pastorderdetail\pastorderdetail.html"*/'\n<ion-content>\n        <div class="container">\n		\n        \n                <ion-row class="row bs-wizard" style="border-bottom:0;">\n                    \n                    <ion-col class="col-4 bs-wizard-step complete">\n                      <div class="text-center bs-wizard-stepnum">Confirmed</div>\n                      <div class="progress"><div class="progress-bar"></div></div>\n                      <a href="#" class="bs-wizard-dot"></a>\n                      <div class="text-center" style="font-size:9px">13/11/2018 02:35:21 PM</div>\n                    </ion-col>\n                    \n                    <ion-col class="col-4 bs-wizard-step complete"><!-- complete -->\n                      <div class="text-center bs-wizard-stepnum">Prepared</div>\n                      <div class="progress"><div class="progress-bar"></div></div>\n                      <a href="#" class="bs-wizard-dot"></a>\n                      <div class="text-center" style="font-size:9px">13/11/2018 02:35:21 PM</div>\n                      \n                    </ion-col>\n                    \n                    <ion-col class="col-4 bs-wizard-step active"><!-- complete -->\n                      <div class="text-center bs-wizard-stepnum">Delivery</div>\n                      <div class="progress"><div class="progress-bar"></div></div>\n                      <a href="#" class="bs-wizard-dot orderActiveStatus"></a>\n                      <div class="text-center" style="font-size:9px">13/11/2018 02:35:21 PM</div>\n                      \n                    </ion-col>\n                    \n                </ion-row>\n            \n            \n            \n            \n            \n        </div>\n\n  <ion-row>\n    <ion-col text-center>\n      <img src="assets/icon/frame.png" style="width:280px;">\n      <br>\n      <span  class="order-number-below-qr">Order no&nbsp;#ORD327R1J</span>\n    </ion-col>\n  </ion-row>\n    <ion-row class="cart-list-items" >\n        <ion-col class="cart-list-item-details">  \n              <ion-row class="cart-item-single">              \n                  <ion-col col-5 class="item-info-block">\n                      <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                    <h2 text-wrap class="item-title">Super Woman Shake</h2>\n                    </ion-col>           \n                    <ion-col col-4>\n                  4&nbsp;X&nbsp;120\n                 </ion-col> \n                 <ion-col col-3 class="item-status-block">\n                    <h4 class="item-price">&#8377;&nbsp;758.00 </h4>\n                </ion-col>      \n                </ion-row>  \n            </ion-col>\n            </ion-row>\n            <ion-row class="cart-list-items" >\n                <ion-col class="cart-list-item-details">  \n                      <ion-row class="cart-item-single">              \n                          <ion-col col-5 class="item-info-block">\n                              <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                            <h2 text-wrap class="item-title">Super Woman Shake</h2>\n                            </ion-col>           \n                            <ion-col col-4>\n                                4&nbsp;X&nbsp;120\n                               </ion-col> \n                         <ion-col col-3 class="item-status-block">\n                            <h4 class="item-price">&#8377;&nbsp;758.00 </h4>\n                        </ion-col>        \n                        </ion-row>  \n                    </ion-col>\n        \n                    </ion-row>\n\n                    <!-- first style item-end -->\n\n                  <ion-row class="cart-list-items" >\n                      <ion-col>\n                        <ion-card>    \n                            <ion-row class="cart-item-single">              \n                                <ion-col col-5 class="item-info-block">\n                                    <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                                  <h2 text-wrap class="item-title">Super Woman Shake</h2>\n                                  </ion-col>           \n                                  <ion-col col-4>\n                                      4&nbsp;X&nbsp;120\n                                     </ion-col>  \n                               <ion-col col-3 class="item-status-block">\n                                  <h4 class="item-price text-right">&#8377;&nbsp;758.00 </h4>\n                              </ion-col>       \n                              </ion-row>            \n                          </ion-card>\n                          </ion-col>\n                          </ion-row>\n                          <ion-row class="cart-list-items" >\n                              <ion-col>\n                                <ion-card>    \n                                    <ion-row class="cart-item-single">              \n                                        <ion-col col-5 class="item-info-block">\n                                            <img class="diet-logo" src="assets/imgs/veg.png" >&nbsp;\n                                          <h2 text-wrap class="item-title">Super Woman Shake</h2>\n                                          </ion-col>           \n                                          <ion-col col-4>\n                                              4&nbsp;X&nbsp;120\n                                             </ion-col> \n                                       <ion-col col-3 class="item-status-block">\n                                          <h4 class="item-price text-right">&#8377;&nbsp;758.00 </h4>\n                                      </ion-col>        \n                                      </ion-row>            \n                                  </ion-card>\n                                  </ion-col>\n                                  </ion-row>\n\n\n                                  <!-- cart billing information -->\n\n       \n              <ion-row class="cart-pricing-info" >\n                <ion-col col-8 text-right>Sub Total</ion-col>\n                <ion-col col-4 item-end text-right>&#8377;&nbsp;758.00</ion-col>\n             \n                  <ion-col col-8 text-right>CGST</ion-col>\n                  <ion-col col-4 item-end text-right>&#8377;&nbsp;00.00</ion-col>\n              \n                    <ion-col col-8 text-right>SGST</ion-col>\n                    <ion-col col-4 item-end text-right>&#8377;&nbsp;00.00</ion-col>\n               \n                      <ion-col col-8 text-right>Discount</ion-col>\n                      <ion-col col-4 item-end text-right>&#8377;&nbsp;58.00</ion-col>\n                      </ion-row>\n                 \n                    <hr>\n                    <ion-row class="cart-pricing-info" >\n                        <ion-col col-8 text-right class="grand-total-title">Grand Total</ion-col>\n                        <ion-col col-4 item-end text-right class="grand-total-title">&#8377;&nbsp;700.00</ion-col>\n                      </ion-row>\n\n                      <ion-row class="checkout-action-block">\n                          <ion-col col-12 text-center>\n                              <button ion-button round default item-end color="light" (click)="dismissPastorderdetailModal()"> <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>&nbsp;Back</button>                                          \n                          </ion-col>\n                        </ion-row>\n\n     \n\n\n \n\n\n    </ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\pastorderdetail\pastorderdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], PastorderdetailPage);
    return PastorderdetailPage;
}());

//# sourceMappingURL=pastorderdetail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map