webpackJsonp([18],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(713);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */])
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.dataForSorting = this.navParams.get('sort');
        this.dataForFilter = this.navParams.get('filter');
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage.prototype.closeFilterModal = function () {
        this.navCtrl.pop();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\filter\filter.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons>\n      <button ion-button icon-only color="trans" (click)="closeFilterModal()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n        <button ion-button *ngIf="dataForSorting">\n          <ion-label>Sort Restaurants</ion-label>    \n        </button>\n        <button ion-button *ngIf="dataForFilter">\n            <ion-label>Filter Restaurants</ion-label>    \n          </button>\n        </ion-buttons>\n      <ion-buttons end>\n  \n    </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content *ngIf="dataForSorting">\n<ion-list radio-group >\n    <ion-item>\n      <ion-label>Rating (High to Low)</ion-label>\n      <ion-radio value="rating_htol"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Rating (Low to High)</ion-label>\n      <ion-radio value="rating_ltoh"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Price (High to Low)</ion-label>\n      <ion-radio value="price_htol"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Price (Low to High)</ion-label>\n      <ion-radio value="price_ltoh"></ion-radio>\n    </ion-item>\n<ion-item text-center>\n    <button ion-button round small color="themecolor" (click)="closeFilterModal()">Apply&nbsp;  <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n  </ion-item>\n  </ion-list>\n</ion-content>\n<ion-content *ngIf="dataForFilter">\n  <ion-list   scrollY="true"> \n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>Veg</ion-label>\n                <ion-checkbox [(ngModel)]="filter_veg"></ion-checkbox>\n              </ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>\n                <ion-label>Non-Veg</ion-label>\n                <ion-checkbox [(ngModel)]="filter_nonveg"></ion-checkbox>\n              </ion-item>\n        </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>American</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Beverages</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Kebabs</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Pizzas</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Salads</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Snacks</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label>Cafe</ion-label>\n              <ion-checkbox [(ngModel)]="filter_type"></ion-checkbox>\n            </ion-item>\n      </ion-col>\n      <ion-item text-center>\n          <button ion-button round small color="themecolor" (click)="closeFilterModal()">Apply&nbsp;  <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n        </ion-item>\n    </ion-row>\n \n    \n    </ion-list>\n  </ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=18.js.map