webpackJsonp([8],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesPageModule", function() { return PreferencesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preferences__ = __webpack_require__(714);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreferencesPageModule = /** @class */ (function () {
    function PreferencesPageModule() {
    }
    PreferencesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preferences__["a" /* PreferencesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preferences__["a" /* PreferencesPage */]),
            ],
        })
    ], PreferencesPageModule);
    return PreferencesPageModule;
}());

//# sourceMappingURL=preferences.module.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
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
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreferencesPage = /** @class */ (function () {
    function PreferencesPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.favType = "favRestaurants";
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeEnable(false);
    }
    PreferencesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreferencesPage');
    };
    PreferencesPage.prototype.fav_data = function (event) {
        console.log(event);
    };
    PreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-preferences',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\preferences\preferences.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons>\n        <button ion-button icon-only>\n          <ion-label class="open-page-title">My Favourites</ion-label>    \n        </button>\n        </ion-buttons>\n  \n      <ion-buttons end>\n      <button ion-button  icon-only class="top-nav-search" (click)="goToSearch()">\n        <ion-icon  name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n\n\n\n    <ion-navbar color="light" class="menu-category-list">\n        <ion-header>\n            <ion-toolbar>\n              <ion-segment [(ngModel)]="favType" color="themecolor">            \n                <ion-segment-button class="favtype_option" value="favRestaurants" (ionSelect)="fav_data(\'favRestaurants\')">\n                  Restaurants\n                </ion-segment-button>\n          \n                <ion-segment-button class="favtype_option" value="favFood" (ionSelect)="fav_data(\'favFood\')">\n                 Favourite Food\n                </ion-segment-button>          \n              </ion-segment>\n            </ion-toolbar>\n          </ion-header>       \n      </ion-navbar>\n  </ion-header>\n\n\n\n\n  <ion-content>\n    <ion-item>\n      <ion-title class="preferces-title"><h2>Favourite Restaurants</h2></ion-title>\n    </ion-item>\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/tsf-logo.png">\n        </ion-avatar>\n        <h2>Thick Shake Factory</h2>\n        <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n      </ion-item>    \n      <ion-row>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="star"></ion-icon>\n            <div>5/78</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="heart"></ion-icon>\n            <div>40</div>\n          </button>\n        </ion-col>\n      </ion-row>    \n    </ion-card>\n\n    <!-- second store -->\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/tsf-logo.png">\n        </ion-avatar>\n        <h2>Thick Shake Factory</h2>\n        <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n      </ion-item>    \n      <ion-row>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="star"></ion-icon>\n            <div>5/78</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="heart"></ion-icon>\n            <div>40</div>\n          </button>\n        </ion-col>\n      </ion-row>    \n    </ion-card>\n    \n\n    <ion-list>\n\n\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/tsf-logo.png">\n        </ion-avatar>\n        <h2>Thick Shake Factory</h2>\n        <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n      </ion-item>    \n      <ion-row>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="star"></ion-icon>\n            <div>5/78</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="themecolor" icon-start clear small>\n            <ion-icon name="heart"></ion-icon>\n            <div>40</div>\n          </button>\n        </ion-col>\n      </ion-row>    \n    </ion-card>\n    \n    </ion-list>\n    <ion-item>\n        <ion-title class="preferces-title"><h2>Popular Restaurants</h2></ion-title>\n      </ion-item>\n\n    <ion-scroll scrollX="true" style="width:100vw; height:150px" >\n        <ion-row nowrap class="headerChip">\n              <ion-card>\n                  <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/imgs/tsf-logo.png">\n                    </ion-avatar>\n                    <h2>Thick Shake Factory</h2>\n                    <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n                  </ion-item>    \n                  <ion-row>\n                    <ion-col>\n                      <button ion-button color="themecolor" icon-start clear small>\n                        <ion-icon name="star"></ion-icon>\n                        <div>5/78</div>\n                      </button>\n                    </ion-col>\n                    <ion-col>\n                      <button ion-button color="themecolor" icon-start clear small>\n                        <ion-icon name="heart"></ion-icon>\n                        <div>40</div>\n                      </button>\n                    </ion-col>\n                  </ion-row>    \n                </ion-card>\n                <ion-card>\n                    <ion-item>\n                      <ion-avatar item-start>\n                        <img src="assets/imgs/tsf-logo.png">\n                      </ion-avatar>\n                      <h2>Thick Shake Factory</h2>\n                      <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n                    </ion-item>    \n                    <ion-row>\n                      <ion-col>\n                        <button ion-button color="themecolor" icon-start clear small>\n                          <ion-icon name="star"></ion-icon>\n                          <div>5/78</div>\n                        </button>\n                      </ion-col>\n                      <ion-col>\n                        <button ion-button color="themecolor" icon-start clear small>\n                          <ion-icon name="heart"></ion-icon>\n                          <div>40</div>\n                        </button>\n                      </ion-col>\n                    </ion-row>    \n                  </ion-card>\n                  <ion-card>\n                      <ion-item>\n                        <ion-avatar item-start>\n                          <img src="assets/imgs/tsf-logo.png">\n                        </ion-avatar>\n                        <h2>Thick Shake Factory</h2>\n                        <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n                      </ion-item>    \n                      <ion-row>\n                        <ion-col>\n                          <button ion-button color="themecolor" icon-start clear small>\n                            <ion-icon name="star"></ion-icon>\n                            <div>5/78</div>\n                          </button>\n                        </ion-col>\n                        <ion-col>\n                          <button ion-button color="themecolor" icon-start clear small>\n                            <ion-icon name="heart"></ion-icon>\n                            <div>40</div>\n                          </button>\n                        </ion-col>\n                      </ion-row>    \n                    </ion-card>\n                    <ion-card>\n                        <ion-item>\n                          <ion-avatar item-start>\n                            <img src="assets/imgs/tsf-logo.png">\n                          </ion-avatar>\n                          <h2>Thick Shake Factory</h2>\n                          <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n                        </ion-item>    \n                        <ion-row>\n                          <ion-col>\n                            <button ion-button color="themecolor" icon-start clear small>\n                              <ion-icon name="star"></ion-icon>\n                              <div>5/78</div>\n                            </button>\n                          </ion-col>\n                          <ion-col>\n                            <button ion-button color="themecolor" icon-start clear small>\n                              <ion-icon name="heart"></ion-icon>\n                              <div>40</div>\n                            </button>\n                          </ion-col>\n                        </ion-row>    \n                      </ion-card>\n        </ion-row>\n      </ion-scroll>\n\n\n  </ion-content>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\preferences\preferences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], PreferencesPage);
    return PreferencesPage;
}());

//# sourceMappingURL=preferences.js.map

/***/ })

});
//# sourceMappingURL=8.js.map