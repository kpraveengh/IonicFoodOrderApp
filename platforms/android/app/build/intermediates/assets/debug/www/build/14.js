webpackJsonp([14],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPopoverpagePageModule", function() { return MenuPopoverpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_popoverpage__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPopoverpagePageModule = /** @class */ (function () {
    function MenuPopoverpagePageModule() {
    }
    MenuPopoverpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_popoverpage__["a" /* MenuPopoverpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_popoverpage__["a" /* MenuPopoverpagePage */]),
            ],
        })
    ], MenuPopoverpagePageModule);
    return MenuPopoverpagePageModule;
}());

//# sourceMappingURL=menu-popoverpage.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPopoverpagePage; });
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
 * Generated class for the MenuPopoverpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPopoverpagePage = /** @class */ (function () {
    function MenuPopoverpagePage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.storeMenu = [];
        this.storeMenu = this.navParams.data;
        console.log(this.storeMenu);
    }
    MenuPopoverpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPopoverpagePage');
    };
    MenuPopoverpagePage.prototype.scrollToElement = function (menu) {
        this.events.publish('scrollMenu', menu);
    };
    MenuPopoverpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu-popoverpage',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\menu-popoverpage\menu-popoverpage.html"*/'\n<ion-content>\n    <ion-list>       \n        <ion-item class="bottom-menu-title" *ngFor="let menu of storeMenu" > \n       \n         <ion-label color="dark" (click)="scrollToElement(menu.name)">{{menu.name}}</ion-label>\n         \n        </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\menu-popoverpage\menu-popoverpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MenuPopoverpagePage);
    return MenuPopoverpagePage;
}());

//# sourceMappingURL=menu-popoverpage.js.map

/***/ })

});
//# sourceMappingURL=14.js.map