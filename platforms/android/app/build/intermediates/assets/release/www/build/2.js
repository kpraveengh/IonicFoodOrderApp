webpackJsonp([2],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(695);
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

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_expandable_header_expandable_header__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(698);
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
                // SearchbarComponent,
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

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(345);
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
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.newCardAddForm = 0;
        this.totalamt = 0;
        // this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartItems = this.localCartProducts.length;
            // console.log('c',this.cartItems);
        }
        this.priceTotal();
    }
    CartComponent.prototype.viewCartInfo = function () {
        // this.cartItems=localStorage.getItem('cartData');
        // this.cartItems=this.cartprvdr.localCartProducts.len;
        this.navCtrl.push("Cart");
    };
    CartComponent.prototype.addNewCard = function () {
        this.newCardAddForm = 1;
    };
    CartComponent.prototype.priceTotal = function () {
        this.totalamt = 0;
        this.localCartProducts = this.cartprvdr.localCartProducts;
        for (var _i = 0, _a = this.localCartProducts; _i < _a.length; _i++) {
            var item = _a[_i];
            this.grandTotal = (this.totalamt) + (item.productPrice);
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cart',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\components\cart\cart.html"*/'<div class="cart-component-footer">\n\n<ion-row>\n  <ion-col col-8>\n    <div class="footer-cartinfo-left">\n      <span style="font-size: 10px; font-weight: normal"> {{cartItems}} Items in cart</span>      \n       <h6>&#8377;&nbsp;{{grandTotal}}&nbsp;<span style="font-size: 10px;font-weight: normal">*Incl Tax</span> </h6>\n       \n    </div>\n  </ion-col>\n  <ion-col col-4 (click)="viewCartInfo()">\n <div class="footer-cart-info-right">\n   <span>View Cart <ion-icon name="arrow-forward"></ion-icon></span>      \n    </div>\n  </ion-col>\n</ion-row>\n\n</div>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\components\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], CartComponent);
    return CartComponent;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 697:
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
            selector: 'expandable-header',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\components\expandable-header\expandable-header.html"*/'<!-- Generated template for the ExpandableHeaderComponent component -->\n<ng-content></ng-content>\n'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\components\expandable-header\expandable-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ExpandableHeaderComponent);
    return ExpandableHeaderComponent;
}());

//# sourceMappingURL=expandable-header.js.map

/***/ }),

/***/ 698:
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
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\components\shrinking-segment-header\shrinking-segment-header.html"*/'<ng-content></ng-content>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\components\shrinking-segment-header\shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], ShrinkingSegmentHeader);
    return ShrinkingSegmentHeader;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, viewCtrl, popoverCtrl, alertCtrl, loadingCtrl, restprovider, cartprovider, event) {
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
        this.dataForSorting = 1;
        this.dataForFilter = 1;
        this.totalamt = 0;
        this.userAllOutletData();
        this.success_color = '#16ac42';
        this.avrg_color = '#e48900';
        console.log(this.outletsAll);
        this.localCartProducts = JSON.parse(localStorage.getItem('cartitem'));
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartLength = this.localCartProducts.length;
            this.priceTotal();
        }
        // console.log(this.localCartProducts)
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
        this.presentWithGif1();
        var data = { 'store_id': store_id, 'org_id': org_id };
        this.restprovider.getStoreData(data).subscribe(function (data) {
            _this.loaderDismiss();
            _this.result_data = data.data;
            _this.navCtrl.push('Storemenu', { 'data': _this.result_data });
        });
    };
    HomePage.prototype.goToSearch = function () {
        // let popover = this.modalCtrl.create('Search');
        // popover.present();
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
    // loader method end
    HomePage.prototype.priceTotal = function () {
        this.totalamt = 0;
        this.localCartProducts = JSON.parse(localStorage.getItem('cartitem'));
        for (var _i = 0, _a = this.localCartProducts; _i < _a.length; _i++) {
            var item = _a[_i];
            this.grandTotal = (this.totalamt) + (item.productPrice);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons (click)="presentProfileModal()" class="selected-location">\n      <button ion-button icon-only>\n        <ion-label class="selected-location-title">Madhapur, iLabs, 4th Floor</ion-label>    \n      </button>\n      </ion-buttons>\n\n    <ion-buttons end>   \n    <button ion-button  icon-only class="top-nav-search" (click)="goToSearch()">\n      <ion-icon  name="search"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides pager class="homeSlider">\n\n    <ion-slide>\n     <img src="assets/imgs/1.jpg">\n    </ion-slide>\n  \n    <ion-slide>\n      <img src="assets/imgs/2.jpg">\n    </ion-slide>\n  \n    <ion-slide>\n      <img src="assets/imgs/3.jpg">\n    </ion-slide>\n  \n  </ion-slides>\n  <div class="home-curved-bg">\n\n        \n  </div>\n\n  <ion-grid class="store-grid-result">\n     \n<!-- recomendations -->\n<ion-item>\n    <ion-title class="preferces-title"><h2>Recommended Restaurants</h2></ion-title>\n  </ion-item>\n\n\n\n\n\n<ion-scroll scrollX="true" style="width:100vw; height:100px" >\n    <ion-row nowrap class="headerChip outer">\n          <ion-card class="slide-card-recom inner"  *ngFor="let recomStore of recomOutlets" (click)="goToMenu(recomStore.store_id,recomStore.org_id)">\n              <ion-item >\n                <ion-avatar item-start>\n                  <img src="assets/imgs/{{recomStore.logo}}">\n                </ion-avatar>\n                <h2>{{recomStore.store_name}}</h2>\n                <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n              </ion-item>    \n              <ion-row >                \n                <ion-col style="text-align:center">\n                    <ion-icon name="heart" color="danger"></ion-icon>\n                    <span>{{recomStore.favourite}}</span>\n                </ion-col>\n                <ion-col >\n                    <span class="recom-rating" [style.background-color]=\'success_color\'>{{recomStore.rating}}</span>                  \n                </ion-col>\n              </ion-row>    \n            </ion-card>\n    </ion-row>\n  </ion-scroll>\n\n  <!-- recommendations end -->\n\n  <ion-item>\n      <ion-label end class="veg_type_title"> \n        <span (click)="filterdata(\'Sorting\')">Sort&nbsp;<img src="assets/imgs/sort-order.png" style="width:12px"></span\n          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span (click)="filterdata(\'Filter\')">Filter&nbsp;<img src="assets/imgs/filter.png" style="max-height: 10px;"></span></ion-label>\n  \n    </ion-item>\n\n    <!-- first row started -->\n      <ion-row>\n        <ion-col col-sm-6 col-md-4 col-lg-3>\n      <ion-card *ngFor="let allStore of outletsAll">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/imgs/tsf-logo.png">\n            </ion-avatar>\n            <h2>{{allStore.Billing_Name}}</h2>\n            <p>Breakfast Shakes, Exotic Addictions, Classic Shakes etc...</p>\n          </ion-item>   \n   \n\n          <img src="assets/imgs/tsf-promo.png">\n          <span class="allStore-rating" [style.background-color]=\'success_color\'>{{allStore.rating}}</span>                  \n         \n         \n          <ion-row class="store-footer-info-block">\n              <ion-col col-8>\n                  <div class="add-favourite-icon">\n                      <ion-icon ios="ios-heart" md="md-heart"></ion-icon><span class="fav-count">{{allStore.favourite}}</span>\n                  </div> \n                    </ion-col>\n              <ion-col col-4>\n                  <button ion-button round outline small (click)="goToMenu(allStore.store_id,allStore.org_id)">Order&nbsp;  <ion-icon ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n        \n        </ion-card>\n        </ion-col>\n            \n          \n            </ion-row>\n\n            <!-- second row end -->\n        </ion-grid>\n       \n        \n</ion-content>\n\n<ion-footer *ngIf="cartLength > 0">\n  <cart cartdata=\'cartitem\'></cart>\n</ion-footer>\n'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map