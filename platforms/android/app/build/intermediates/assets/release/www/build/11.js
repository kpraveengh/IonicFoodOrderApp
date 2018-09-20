webpackJsonp([11],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageModule", function() { return OrderhistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderhistory__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderhistoryPageModule = /** @class */ (function () {
    function OrderhistoryPageModule() {
    }
    OrderhistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orderhistory__["a" /* OrderhistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orderhistory__["a" /* OrderhistoryPage */]),
            ],
        })
    ], OrderhistoryPageModule);
    return OrderhistoryPageModule;
}());

//# sourceMappingURL=orderhistory.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderhistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderhistoryPage = /** @class */ (function () {
    function OrderhistoryPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    OrderhistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderhistoryPage');
    };
    OrderhistoryPage.prototype.goToOrderView = function () {
        var orderModal = this.modalCtrl.create('Pastorderdetail');
        orderModal.present();
    };
    OrderhistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-orderhistory',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\orderhistory\orderhistory.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons >\n        <button ion-button icon-only>\n          <ion-label class="open-page-title">Order History</ion-label>    \n        </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n            <ion-card class="order-history-data" (click)="goToOrderView()">\n                <ion-item>\n                  <h2 color="themecolor">Thick Shake Factory</h2>\n                  <p>MilkShake, Chocolate Candies ..</p>\n                  <span class="price-orderdate">Total &#8377;&nbsp;58.00\n                    </span>,\n                    <span class="price-orderdate"><ion-icon name="calendar"></ion-icon> 03/12/2018 02:30:20 PM</span>                  \n                  <ion-icon small item-end color="themecolor" name="arrow-forward"></ion-icon>           \n                </ion-item>\n              </ion-card>\n\n              <ion-card>\n                  <div class="well well-sm">\n                      <ion-row class="row">\n                          <ion-col col-3 class="text-center">\n                              <img src="assets/imgs/testitem.png" alt="bootsnipp"\n                                  class="img-rounded img-responsive" />\n                          </ion-col>\n                          <ion-col col-9 class="section-box">\n                              <h2>\n                                  The Thickshake Factory\n                              </h2>\n                              <p  class="store_category_slogan">North Indian, Chinese, Burgers</p>\n                           \n                              <ion-row class="row rating-desc">\n                                  <ion-col class="col-md-12">\n                                      <ion-icon name="heart-outline"></ion-icon>&nbsp;36<span class="separator">|</span>\n                                      <ion-icon name="chatboxes"></ion-icon>&nbsp;100 Reviews\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                          </ion-row>\n                  </div>\n              </ion-card>\n              <ion-card>\n                  <div class="well well-sm">\n                      <ion-row class="row">\n                          <ion-col col-3 class="text-center">\n                              <img src="assets/imgs/testitem.png" alt="bootsnipp"\n                                  class="img-rounded img-responsive" />\n                          </ion-col>\n                          <ion-col col-9 class="section-box">\n                              <h2>\n                                  The Thickshake Factory\n                              </h2>\n                              <p  class="store_category_slogan">North Indian, Chinese, Burgers</p>\n                           \n                              <ion-row class="row rating-desc">\n                                  <ion-col class="col-md-12">\n                                      <ion-icon name="heart-outline"></ion-icon>&nbsp;36<span class="separator">|</span>\n                                      <ion-icon name="chatboxes"></ion-icon>&nbsp;100 Reviews\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                          </ion-row>\n                  </div>\n              </ion-card>\n              <ion-card>\n                  <div class="well well-sm">\n                      <ion-row class="row">\n                          <ion-col col-3 class="text-center">\n                              <img src="assets/imgs/testitem.png" alt="bootsnipp"\n                                  class="img-rounded img-responsive" />\n                          </ion-col>\n                          <ion-col col-9 class="section-box">\n                              <h2>\n                                  The Thickshake Factory\n                              </h2>\n                              <p  class="store_category_slogan">North Indian, Chinese, Burgers</p>\n                           \n                              <ion-row class="row rating-desc">\n                                  <ion-col class="col-md-12">\n                                      <ion-icon name="heart-outline"></ion-icon>&nbsp;36<span class="separator">|</span>\n                                      <ion-icon name="chatboxes"></ion-icon>&nbsp;100 Reviews\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                          </ion-row>\n                  </div>\n              </ion-card>\n              <ion-card>\n                  <div class="well well-sm">\n                      <ion-row class="row">\n                          <ion-col col-3 class="text-center">\n                              <img src="assets/imgs/testitem.png" alt="bootsnipp"\n                                  class="img-rounded img-responsive" />\n                          </ion-col>\n                          <ion-col col-9 class="section-box">\n                              <h2>\n                                  The Thickshake Factory\n                              </h2>\n                              <p  class="store_category_slogan">North Indian, Chinese, Burgers</p>\n                           \n                              <ion-row class="row rating-desc">\n                                  <ion-col class="col-md-12">\n                                      <ion-icon name="heart-outline"></ion-icon>&nbsp;36<span class="separator">|</span>\n                                      <ion-icon name="chatboxes"></ion-icon>&nbsp;100 Reviews\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                          </ion-row>\n                  </div>\n              </ion-card>\n\n            \n\n\n      </ion-content>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\orderhistory\orderhistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], OrderhistoryPage);
    return OrderhistoryPage;
}());

//# sourceMappingURL=orderhistory.js.map

/***/ })

});
//# sourceMappingURL=11.js.map