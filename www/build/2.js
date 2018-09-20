webpackJsonp([2],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { SearchbarComponent } from '../../components/searchbar/searchbar';

var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_expandable_header_expandable_header__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { SearchbarComponent } from './searchbar/searchbar';




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                // SearchbarComponent,
                __WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_expandable_header_expandable_header__["a" /* ExpandableHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NO_ERRORS_SCHEMA */]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
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



var CartComponent = /** @class */ (function () {
    function CartComponent(cartprvdr, navCtrl, navParams, menuCtrl) {
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.newCardAddForm = 0;
        this.totalamt = 0;
    }
    CartComponent.prototype.viewCartInfo = function () {
        this.navCtrl.push("Cart");
    };
    CartComponent.prototype.ngDoCheck = function () {
        this.localCartProducts = this.cartprvdr.localCartProducts;
        // localStorage.setItem('cartitem', JSON.stringify(this.cartprvdr.localCartProducts));
        this.cartLength = this.cartprvdr.cartLength();
        this.priceTotal = this.cartprvdr.priceTotal();
    };
    CartComponent.prototype.addNewCard = function () {
        this.newCardAddForm = 1;
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cart',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\components\cart\cart.html"*/'<div class="cart-component-footer">\n\n  <ion-row>\n    <ion-col col-8>\n      <div class="footer-cartinfo-left">\n        <span style="font-size: 10px; font-weight: normal"> {{cartLength}} Items in cart</span>\n        <h6>&#8377;&nbsp;{{priceTotal.toFixed(2)}}&nbsp;<span style="font-size: 10px;font-weight: normal"> + Tax</span>\n        </h6>\n      </div>\n    </ion-col>\n    <ion-col col-4 (click)="viewCartInfo()">\n      <div class="footer-cart-info-right">\n        <span>View Cart <ion-icon name="arrow-forward"></ion-icon></span>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</div>\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\components\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], CartComponent);
    return CartComponent;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableHeaderComponent = /** @class */ (function () {
    function ExpandableHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ExpandableHeaderComponent Component');
    }
    ExpandableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ExpandableHeaderComponent.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            for (var _i = 0, _a = _this.element.nativeElement.children; _i < _a.length; _i++) {
                var headerElement = _a[_i];
                var totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                if (totalHeight > _this.newHeaderHeight && !headerElement.isHidden) {
                    headerElement.isHidden = false;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0.'); //0.7
                }
                else if (totalHeight <= _this.newHeaderHeight && headerElement.isHidden) {
                    headerElement.isHidden = true;
                    _this.renderer.setElementStyle(headerElement, 'opacity', '0');
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ExpandableHeaderComponent.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ExpandableHeaderComponent.prototype, "headerHeight", void 0);
    ExpandableHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-header',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\components\expandable-header\expandable-header.html"*/'<!-- Generated template for the ExpandableHeaderComponent component -->\n<ng-content></ng-content>\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\components\expandable-header\expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ExpandableHeaderComponent);
    return ExpandableHeaderComponent;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeader = /** @class */ (function () {
    function ShrinkingSegmentHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeader.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ShrinkingSegmentHeader);
    return ShrinkingSegmentHeader;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, viewCtrl, popoverCtrl, alertCtrl, loadingCtrl, restprovider, cartprovider, event, googlemapprovider, zone, maps, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restprovider = restprovider;
        this.cartprovider = cartprovider;
        this.event = event;
        this.googlemapprovider = googlemapprovider;
        this.zone = zone;
        this.maps = maps;
        this.geolocation = geolocation;
        this.query = '';
        this.places = [];
        this.markers = [];
        this.dataForSorting = 1;
        this.dataForFilter = 1;
        this.totalamt = 0;
        this.userAllOutletData();
        this.success_color = '#16ac42';
        this.avrg_color = '#e48900';
        // console.log(this.outletsAll)
        this.localCartProducts = JSON.parse(localStorage.getItem('cartitem'));
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartLength = this.localCartProducts.length;
        }
    }
    HomePage.prototype.userAllOutletData = function () {
        var _this = this;
        var data = { 'username': '', 'password': '' };
        this.restprovider.getAllStoresData(data).subscribe(function (data) {
            _this.result_data = data.data;
            _this.resultdata = _this.result_data;
            _this.outletsAll = _this.resultdata.outlets;
            _this.recomOutlets = _this.resultdata.recom_outlets;
            //  console.log(this.resultdata);
        });
    };
    HomePage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create('Location', { userId: 8675309 });
        profileModal.present();
    };
    HomePage.prototype.filterdata = function (action) {
        if (action == 'Sorting') {
            this.dataForSorting = 1;
            this.dataForFilter = 0;
        }
        else if (action == 'Filter') {
            this.dataForFilter = 1;
            this.dataForSorting = 0;
        }
        var popover = this.modalCtrl.create('Filter', { 'sort': this.dataForSorting, 'filter': this.dataForFilter });
        popover.present({
            ev: action
        });
    };
    HomePage.prototype.dismissLocationModal = function () {
        this.viewCtrl.dismiss();
    };
    HomePage.prototype.goToMenu = function (store_id, org_id) {
        var _this = this;
        store_id = "JAY01";
        org_id = "JAY";
        this.presentWithGif1();
        var data = { 'store_id': store_id, 'org_id': org_id };
        this.restprovider.getStoreData(data).subscribe(function (data) {
            _this.loaderDismiss();
            _this.result_data = data;
            console.log('rest', _this.result_data);
            _this.navCtrl.push('Storemenu', { 'data': _this.result_data });
        });
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push("Search");
    };
    // loader method start
    HomePage.prototype.presentWithGif1 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n        <img class=\"loading\" width=\"120px\" src=\"assets/imgs/loader.gif\" />\n      </div>"
        });
        return this.loading.present();
    };
    HomePage.prototype.loaderDismiss = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loading) {
                return _this.loading.dismiss(resolve(true)).catch(function (error) {
                    console.log('loading error: ', error);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["Observable"].timer(20, 50);
        timer.subscribe(function () { return _this.getLiveLocation(); });
    };
    // loader method end
    HomePage.prototype.ngDoCheck = function () {
        this.localCartProducts = this.cartprovider.localCartProducts;
        this.cartLength = this.cartprovider.cartLength();
        this.priceTotal = this.cartprovider.priceTotal();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(function () {
            _this.autocompleteService = new google.maps.places.AutocompleteService();
            _this.placesService = new google.maps.places.PlacesService(_this.maps.map);
            console.log(_this.placesService);
            _this.searchDisabled = false;
        });
    };
    HomePage.prototype.getLiveLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var pos = {
                lat: resp.coords.latitude,
                lng: resp.coords.longitude
            };
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                var geocoder = new google.maps.Geocoder;
                geocoder.geocode({ 'location': pos }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            this.currentLocation = results[1].formatted_address;
                            console.log(this.currentLocation);
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
            }
            else {
                _this.currentLocation = 'Choose Location';
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
    ], HomePage.prototype, "pleaseConnect", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons (click)="presentProfileModal()" class="selected-location">\n      <button ion-button icon-only>\n        <ion-label class="selected-location-title">{{currentLocation}} &nbsp;<ion-icon end name="arrow-dropdown"></ion-icon></ion-label>    \n      </button>\n      </ion-buttons>\n\n    <ion-buttons end>   \n    <button ion-button  icon-only class="top-nav-search" (click)="goToSearch()">\n      <ion-icon  name="search"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides pager class="homeSlider">\n\n    <ion-slide>\n     <img src="assets/imgs/1.jpg">\n    </ion-slide>\n  \n    <ion-slide>\n      <img src="assets/imgs/2.jpg">\n    </ion-slide>\n  \n    <ion-slide>\n      <img src="assets/imgs/3.jpg">\n    </ion-slide>\n  \n  </ion-slides>\n  <div class="home-curved-bg">\n\n        \n  </div>\n\n\n  <ion-grid class="store-grid-result">\n     \n<!-- recomendations -->\n<ion-item>\n    <ion-title class="preferces-title"><h2>Recommended Restaurants</h2></ion-title>\n  </ion-item>\n\n\n\n\n\n<ion-scroll scrollX="true" style="width:100vw; height:100px" >\n    <ion-row nowrap class="headerChip outer">\n          <ion-card class="slide-card-recom inner"  *ngFor="let recomStore of recomOutlets" (click)="goToMenu(recomStore.store_id,recomStore.org_id)">\n              <ion-item >\n                <ion-avatar item-start>\n                  <img src="assets/imgs/{{recomStore.logo}}">\n                </ion-avatar>\n                <h2>{{recomStore.store_name}}</h2>\n                <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n              </ion-item>    \n              <ion-row >                \n                <ion-col style="text-align:center">\n                    <ion-icon name="heart" color="danger"></ion-icon>\n                    <span>{{recomStore.favourite}}</span>\n                </ion-col>\n                <ion-col >\n                    <span class="recom-rating" [style.background-color]=\'success_color\'>{{recomStore.rating}}</span>                  \n                </ion-col>\n              </ion-row>    \n            </ion-card>\n    </ion-row>\n  </ion-scroll>\n\n  <!-- recommendations end -->\n\n  <ion-item>\n      <ion-label end class="veg_type_title"> \n        <span (click)="filterdata(\'Sorting\')">Sort&nbsp;<img src="assets/imgs/sort-order.png" style="width:12px"></span\n          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span (click)="filterdata(\'Filter\')">Filter&nbsp;<img src="assets/imgs/filter.png" style="max-height: 10px;"></span></ion-label>\n  \n    </ion-item>\n\n    <!-- first row started -->\n    <ion-list>\n      <span class="spark-anim"></span>\n        <ion-item class="home-outlet">\n          <ion-thumbnail item-start>\n         \n            <img src="https://www.parhlo.com/wp-content/uploads/2017/01/63-80x80.jpg">\n        \n            <div class="rank-label-container">\n                <span class="label label-default rank-label">EXCLUSIVE</span>\n            </div>\n          \n              <!-- <div class="ribbon"><span>POPULAR</span></div> -->\n          </ion-thumbnail>\n          <div class="home-outlet-info">\n          <h2>Thick Shake Factory - Kondapur</h2>\n          <p>Burgers, Cakes, Chocolates, Milkshakes..</p>\n\n          <div class="home-outlet-offer-info">\n              <div class="burst-8-point">%</div>&nbsp;Free Delivery, 10% OFF\n            </div>\n\n          <!-- <div class="home-outlet-open-close">\n            <p>Restaurant will open shortly</p>\n          </div> -->\n          <hr>\n          \n          <ul class="outlet-extra-info">\n            <li><span><i class="far fa-clock"></i>&nbsp;30 MIN </span></li>\n                <li>|</li>\n                <li>\n                   <span class="far fa-star"></span>&nbsp;4.2\n    \n                </li>\n                <li>|</li>\n                <li>\n                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->\n                  <span><i class="fa fa-rupee-sign"></i></span>&nbsp;200 FOR TWO\n                </li>\n          </ul>\n         </div>\n        </ion-item>\n      </ion-list>\n\n    \n    <ion-list *ngFor="let allStore of outletsAll">\n        \n        <ion-item class="home-outlet">\n          <ion-thumbnail item-start>\n              <span class="spark-anim"></span>\n            <img src="https://www.parhlo.com/wp-content/uploads/2017/01/63-80x80.jpg">\n            <div class="rank-label-container">\n                <span class="label label-default rank-label">Popular</span>\n            </div>\n              <!-- <div class="ribbon"><span>POPULAR</span></div> -->\n          </ion-thumbnail>\n          <div class="home-outlet-info">\n          <h2>{{allStore.store_name}}</h2>\n          <p>Burgers, Cakes, Chocolates, Milkshakes..</p>\n\n          <!-- <div class="home-outlet-offer-info">\n              <p>Offer Available</p>\n            </div> -->\n\n          <div class="home-outlet-open-close">\n            <p>Restaurant will open shortly</p>\n          </div>\n          <hr>\n          \n          <ul class="outlet-extra-info">\n            <li><span><i class="far fa-clock"></i>&nbsp;30 MIN </span></li>\n                <li>|</li>\n                <li>\n                   <span class="far fa-star"></span>&nbsp;4.2\n    \n                </li>\n                <li>|</li>\n                <li>\n                <!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->\n                  <span><i class="fa fa-rupee-sign"></i></span>&nbsp;200 FOR TWO\n                </li>\n          </ul>\n         </div>\n        </ion-item>\n      </ion-list>\n\n\n      \n\n            <!-- second row end -->\n        </ion-grid>\n       \n         \n    <div #pleaseConnect id="please-connect">\n      <p>Please connect to the Internet...</p>\n  </div>\n\n  <div #map id="map">\n      <ion-spinner></ion-spinner>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf="cartLength > 0">\n  <cart cartdata=\'cartitem\'></cart>\n</ion-footer>\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _r || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map