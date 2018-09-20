webpackJsonp([1],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsPageModule", function() { return ItemdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemdetails__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemdetailsPageModule = /** @class */ (function () {
    function ItemdetailsPageModule() {
    }
    ItemdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__itemdetails__["a" /* ItemdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__itemdetails__["a" /* ItemdetailsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ItemdetailsPageModule);
    return ItemdetailsPageModule;
}());

//# sourceMappingURL=itemdetails.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_expandable_header_expandable_header__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(708);
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

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(350);
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

/***/ 707:
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

/***/ 708:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailsPage; });
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


var ItemdetailsPage = /** @class */ (function () {
    function ItemdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localCartProducts = [];
        this.menuNames = ['Description', 'Reviews', 'Nutrition', 'Making'];
        this.menu = "Description";
        this.localCartProducts = JSON.parse(localStorage.getItem('cartitem'));
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartLength = this.localCartProducts.length;
        }
    }
    ItemdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemdetailsPage');
    };
    ItemdetailsPage.prototype.goToCart = function () {
        this.navCtrl.push("Cart");
    };
    ItemdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-itemdetails',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\itemdetails\itemdetails.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Item details</ion-title>\n      <ion-buttons end class="top-nav-cart-icon">\n            <!-- <button ion-button icon-only (click)="goToCart()">\n                    <img src="assets/imgs/cart.png" >\n                    <span class="cart-qty-block">57</span>\n            </button> -->\n      </ion-buttons>\n    \n    </ion-navbar>\n  </ion-header>\n\n  <ion-content>\n      <ion-row class="menu-list-items">\n          <ion-col>\n              <ion-card>\n        \n                  <ion-item>\n                    <ion-avatar item-start>\n                      <img src="assets/imgs/bubble-logo.png">\n                    </ion-avatar>\n                    <h2>Super Women Thickshake</h2>\n                  </ion-item>\n                  <img src="assets/imgs/bubble-promo.png">\n                  <ion-row>\n                  <ion-navbar color="light" class="menu-category-list">\n                      <ion-segment [(ngModel)]="menu">\n                        <ion-segment-button value={{menu}} *ngFor="let menu of menuNames" color="themecolor">\n                            {{menu}}\n                        </ion-segment-button>\n                        \n                        </ion-segment>\n                      </ion-navbar>\n                      \n                      <ion-row>\n                          <ion-col>\n                       <p>\n                            what you have to do is determine the line-height you want to play with. So, for example, if I have a button who\'s height is truly 90px but I want the line-height to be 80px I would have something like\n                        </p>\n                        </ion-col>\n                   </ion-row>\n                 \n\n                    <ion-row>\n                        <ion-col col-8>\n                            <ion-item class="item-status-block">\n                                <h1 class="item-price">&#8377;&nbsp;58.00\n                                </h1>\n                                <ion-badge small outline color="themecolor">24 Available</ion-badge>\n                                <ion-badge small outline color="themecolor">5 Min Wait</ion-badge> \n                          </ion-item>                  \n                        </ion-col>\n                        <ion-col col-4>\n                            <button ion-button round default item-end color="themecolor"><ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add</button>                                          \n                        </ion-col>\n                    \n                      </ion-row>\n                    \n                    </ion-row>\n\n\n\n\n\n           \n                </ion-card>\n                </ion-col>\n              </ion-row>\n\n\n\n    \n  </ion-content>\n  \n  <ion-footer *ngIf="cartLength > 0">\n        <cart cartdata=\'cartitem\'></cart>\n      </ion-footer>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\itemdetails\itemdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ItemdetailsPage);
    return ItemdetailsPage;
}());

//# sourceMappingURL=itemdetails.js.map

/***/ })

});
//# sourceMappingURL=1.js.map