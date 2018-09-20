webpackJsonp([15],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]),
            ],
        })
    ], LocationPageModule);
    return LocationPageModule;
}());

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
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
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.cities = ["Hyderabad", "Bangalore", "Mumbai", "Chennai", "Pune"];
        this.cityArea = {
            "Hyderabad": [
                { 'area': 'Madhapur' },
                { "area": "Hitech-City" },
                { "area": "Kondapur" },
                { "area": "Gachibowli" }
            ],
            "Bangalore": [
                { "area": "Electronic-city" },
                { "area": "Marathahalli" },
                { "area": "GS Palya" }
            ],
            "Mumbai": [
                { "area": "Mumba-Electronic-city" },
                { "area": "Mumba-Marathahalli" },
                { "area": "Mumba-GS Palya" }
            ],
            "Chennai": [
                { "area": "Chennai-Electronic-city" },
                { "area": "Chennai-Marathahalli" },
                { "area": "Chennai-GS Palya" }
            ],
            "Pune": [
                { "area": "Pune-Electronic-city" },
                { "area": "Pune-Marathahalli" },
                { "area": "Pune-GS Palya" }
            ]
        };
    }
    LocationPage.prototype.showAllAreas = function (event, city) {
        this.buttonColor = '#440499';
        this.selectedCity = city;
        this.areas = this.cityArea[city];
    };
    LocationPage.prototype.showAllLocation = function (event, area) {
        this.buttonColor = '#440499';
        this.textcolor = '#fff';
        this.selectedArea = area;
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.dismissLocationModal = function () {
        this.viewCtrl.dismiss();
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\location\location.html"*/'\n\n<ion-content class="location-modal">\n    <ion-buttons end class="close-location-block">\n        <button ion-button icon-only outline small color="light" (click)="dismissLocationModal()">\n            <ion-icon name="close"></ion-icon>\n        </button>\n  </ion-buttons>\n    <div class="choose-location-city-bg">\n  <ion-row class="choose-location-bg">\n    <ion-col col-12 class="choose-location-city-title">\n    <h5 clear text-center color="light">Choose City</h5>\n  </ion-col>\n    <ion-col col-sm-4 co-xs-4  *ngFor="let city of cities">\n        <button ion-button medium outline color="light" [style.backgroundColor]="city == selectedCity ? buttonColor:light "  (click)="showAllAreas($event,city)">{{city}} </button>\n    </ion-col>\n  </ion-row>\n  \n</div>\n\n<ion-row class="choose-location-bg">\n    <ion-col col-12 class="choose-location-city-title">\n    <h5 clear text-center color="light">Choose Area</h5>\n  </ion-col>\n    <ion-col col-md-12  *ngFor="let area of areas">\n        <button ion-button medium outline color="themecolor" [style.backgroundColor]="area.area == selectedArea ? buttonColor:light " [style.color]="area.area == selectedArea ? themecolor:light " (click)="showAllLocation($event,area.area)">{{area.area}}</button>\n    </ion-col>\n  </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=15.js.map