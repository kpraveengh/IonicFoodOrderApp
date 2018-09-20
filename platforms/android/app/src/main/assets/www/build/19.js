webpackJsonp([19],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentordersPageModule", function() { return CurrentordersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currentorders__ = __webpack_require__(712);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrentordersPageModule = /** @class */ (function () {
    function CurrentordersPageModule() {
    }
    CurrentordersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__currentorders__["a" /* CurrentordersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__currentorders__["a" /* CurrentordersPage */]),
            ],
        })
    ], CurrentordersPageModule);
    return CurrentordersPageModule;
}());

//# sourceMappingURL=currentorders.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentordersPage; });
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


/**
 * Generated class for the CurrentordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentordersPage = /** @class */ (function () {
    function CurrentordersPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    CurrentordersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentordersPage');
    };
    CurrentordersPage.prototype.goToOrderView = function () {
        var orderModal = this.modalCtrl.create('Pastorderdetail');
        orderModal.present();
    };
    CurrentordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-currentorders',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\currentorders\currentorders.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Running Orders</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n  <ion-content>\n\n\n      <ion-card class="order-history-data" (click)="goToOrderView()">\n          <ion-item>\n            <h2>Thick Shake Factory</h2>\n            <p>MilkShake, Chocolate Candies ..</p>\n            <span class="price-orderdate">Total &#8377;&nbsp;58.00\n              </span>,\n              <span class="price-orderdate"><ion-icon name="calendar"></ion-icon> 03/12/2018 02:30:20 PM</span>                  \n            <ion-icon small item-end color="success" name="arrow-forward"></ion-icon>\n     \n          </ion-item>\n        </ion-card>\n      </ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\currentorders\currentorders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CurrentordersPage);
    return CurrentordersPage;
}());

//# sourceMappingURL=currentorders.js.map

/***/ })

});
//# sourceMappingURL=19.js.map