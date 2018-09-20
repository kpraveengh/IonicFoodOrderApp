webpackJsonp([0],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoremenuPageModule", function() { return StoremenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storemenu__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoremenuPageModule = /** @class */ (function () {
    function StoremenuPageModule() {
    }
    StoremenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__storemenu__["a" /* StoremenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__storemenu__["a" /* StoremenuPage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NO_ERRORS_SCHEMA */]
            ]
        })
    ], StoremenuPageModule);
    return StoremenuPageModule;
}());

//# sourceMappingURL=storemenu.module.js.map

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

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoremenuPage; });
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



var StoremenuPage = /** @class */ (function () {
    ////////////////////
    function StoremenuPage(cartprvdr, navCtrl, navParams, menuCtrl, zone, myElement, popoverCtrl) {
        var _this = this;
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.zone = zone;
        this.myElement = myElement;
        this.popoverCtrl = popoverCtrl;
        // shrinking page for top store info
        this.section = 'two';
        this.somethings = new Array(20);
        //  Data params from login page
        this.resultdata = this.navParams.get('data');
        // Initial cart values from localstorage
        // cartitem: any=localStorage.getItem('cartitem');
        this.cartitem = this.cartprvdr.localCartProducts;
        // menu pages and products of menu from api data
        this.menuNames = this.resultdata.menu;
        this.products = this.resultdata.products;
        this.outlet_active_tax = this.resultdata.outlet_tax;
        this.product_tax = [];
        this.cartProducts = [];
        this.addToCartButton = 1;
        this.cartQtyButton = 0;
        this.hidebutton = [];
        this.showButton = [];
        this.cartProductQty = [];
        this.searchTerm = '';
        // test/////////////
        this.start = 0;
        this.threshold = 100;
        this.slideHeaderPrevious = 0;
        ////////////////////////
        // for menu popup overlay
        this.overlayHidden = false;
        this.menublockHidden = false;
        this.prodcutSearchbar = false;
        ////////////////// --FILTER PRODUCTS--///////
        this.test = [];
        this.newAr = [];
        this.search = '';
        // console.log(this.outlet_active_tax);
        this.showheader = false;
        this.hideheader = true;
        this.menu = this.menuNames[0].PageName;
        this.menuProducts = this.products[this.menu];
        this.menuProducts = Object.keys(this.menuProducts).map(function (key) { return _this.menuProducts[key]; });
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeEnable(false);
        this.qty = 1;
        this.cartlength();
        this.priceTotal();
    }
    StoremenuPage.prototype.cartlength = function () {
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));\
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.cartLength = this.localCartProducts.length;
        }
        else {
            this.cartLength = 0;
        }
    };
    StoremenuPage.prototype.priceTotal = function () {
        this.totalamt = 0;
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            for (var _i = 0, _a = this.localCartProducts; _i < _a.length; _i++) {
                var item = _a[_i];
                this.grandTotal = (this.totalamt) + (+item.productPrice);
            }
        }
        else {
            this.grandTotal = 0;
        }
    };
    StoremenuPage.prototype.getMenuProducts = function (menuName) {
        var _this = this;
        this.menuProducts = this.products[menuName];
        this.menuProducts = Object.keys(this.menuProducts).map(function (key) { return _this.menuProducts[key]; });
        // console.log(this.menuProducts)
        // this.menuProducts=Object.values(this.menuProducts);
    };
    StoremenuPage.prototype.ionViewDidLoad = function () {
    };
    StoremenuPage.prototype.goToItempage = function () {
        this.navCtrl.push("Itemdetail");
    };
    StoremenuPage.prototype.goToCart = function () {
        this.navCtrl.push("Cart");
    };
    StoremenuPage.prototype.addTocart = function (item) {
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        console.log("local products data", this.localCartProducts, this.cartprvdr.localCartProducts);
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
                return (element.ProductNumber == item.ProdNum);
            });
            // console.log('e',this.existCartProdductNumber);
            this.cartlength();
            this.priceTotal();
        }
        // to enable disable addtocart button
        this.cartProductQty[item.ProdNum] = 1;
        this.hideAddcartBtn(item.ProdNum);
        this.product_tax = [];
        for (var _i = 0, _a = this.outlet_active_tax; _i < _a.length; _i++) {
            var data = _a[_i];
            if (item[data.Tax_Id] == 1 && data.Tax_Percentage > 0) {
                this.taxObj = {
                    tax_id: data.Tax_Id,
                    taxdes: data.tax_Description,
                    taxper: data.Tax_Percentage,
                    taxtype: data.TaxType,
                    taxprice: '',
                    taxflatamount: (data.Tax_Percentage >= 0 ? 0 : data.Flat_Amount),
                };
                this.taxObj.taxprice = (parseFloat(item.Price1)) * (data.Tax_Percentage / 100);
                this.product_tax.push(this.taxObj);
            }
        }
        this.cartItem = { 'ProductNumber': item.ProdNum,
            'ProductName': item.ProdName,
            'productQty': 1,
            'store_id': item.store_id,
            'productPrice': item.Price1,
            'subTotal': item.Price1,
            'Modifier': [],
            'Tax': this.product_tax
        };
        this.cartProducts.push(this.cartItem);
        //localStorage.setItem('cartitem',JSON.stringify(this.cartProducts));
        this.cartprvdr.localCartProducts = this.cartProducts;
        console.log("cartData", this.cartprvdr.localCartProducts, this.cartProducts);
    };
    StoremenuPage.prototype.hideAddcartBtn = function (productId) {
        this.hidebutton[productId] = true;
    };
    StoremenuPage.prototype.showAddcartBtn = function (productId) {
        this.hidebutton[productId] = false;
    };
    // increment product qty
    StoremenuPage.prototype.incrementQty = function (product) {
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
                return (element.ProductNumber == product.ProdNum);
            });
        }
        var cartItem = this.existCartProdductNumber;
        cartItem[0].productQty++;
        // cartItem[0].subTotal=(parseFloat(cartItem[0].productQty)*parseFloat(cartItem[0].Price1));
        product.qty++;
        this.cartProductQty[product.ProdNum] = product.qty;
        // console.log(product.qty)
        this.cartprvdr.localCartProducts = this.localCartProducts;
        //localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));
        this.cartlength();
        this.priceTotal();
    };
    // decrement product qty
    StoremenuPage.prototype.decrementQty = function (product) {
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartProdductNumber = this.localCartProducts.filter(function (element) {
                return (element.ProductNumber == product.ProdNum);
            });
        }
        var cartItem = this.existCartProdductNumber;
        console.log(cartItem[0].productQty);
        cartItem[0].productQty--;
        // cartItem[0].subTotal=(parseFloat(cartItem[0].productQty)*parseFloat(cartItem[0].Price1));
        product.qty--;
        cartItem[0].productQty = product.qty;
        this.cartProductQty[product.ProdNum] = product.qty;
        if (product.qty < 1) {
            this.showAddcartBtn(product.ProdNum);
            delete cartItem[0].productQty;
        }
        // console.log(product.qty)
        //localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));
        this.cartprvdr.localCartProducts = this.localCartProducts;
        this.cartlength();
        this.priceTotal();
    };
    StoremenuPage.prototype.setFilteredItems = function (prod) {
        // console.log('searchval',prod);
        for (var a in this.products) {
            this.newAr.push(this.products[a]);
            for (var _i = 0, _a = this.newAr; _i < _a.length; _i++) {
                var bds = _a[_i];
                for (var c in bds) {
                    this.test.push(bds[c]);
                    // console.log(bds[c])
                }
            }
        }
        // console.log('testarray',this.test);
        this.products = this.test.find(function (element) {
            return (element.ProdName == prod);
        });
        // console.log(this.products);
    };
    StoremenuPage.prototype.goToBack = function () {
        this.navCtrl.push('Home');
    };
    StoremenuPage.prototype.openMenuforOutlet = function () {
        var popover = this.popoverCtrl.create('MenuPopoverPage', this.menuNames);
        popover.present({});
    };
    StoremenuPage.prototype.prodcutSearchToggle = function () {
        this.prodcutSearchbar = !this.prodcutSearchbar;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], StoremenuPage.prototype, "content", void 0);
    StoremenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-storemenu',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\storemenu\storemenu.html"*/'<ion-header>\n    <ion-navbar style="padding: 20px 0px 80px 0px;">\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-buttons class="top-nav-cart-icon">\n          <!-- <button ion-button icon-only (click)="goToBack()">\n               Back\n          </button>         -->\n        </ion-buttons>\n        <ion-buttons end>   \n            <button *ngIf="!prodcutSearchbar" ion-button  icon-only class="top-nav-search" (click)="prodcutSearchToggle()">\n              <ion-icon  name="search"></ion-icon>\n            </button>\n            <button *ngIf="prodcutSearchbar" ion-button  icon-only class="top-nav-search" (click)="prodcutSearchToggle()">\n                <ion-icon name="close-circle"></ion-icon>\n              </button>\n          </ion-buttons>\n  \n      </ion-navbar>\n          <div class="store-info-top">\n              <ion-title>Cozy Restaurant <ion-badge color="success" item-end>3.5</ion-badge></ion-title>\n        \n              <span style="font-size:12px;color:#333">4th Floor, Knowledge Towers, Madhapur</span>\n              \n            </div>\n      <div color="success" class="menu-category-list">\n   \n          <ion-segment [(ngModel)]="menu" (ionChange)="getMenuProducts(menu)" >\n            <ion-segment-button  value={{menu.PageName}} *ngFor="let menu of menuNames" color="themecolor">\n                {{menu.PageName}}\n            </ion-segment-button>\n            </ion-segment>\n        </div>  \n\n  \n         <ion-searchbar *ngIf="prodcutSearchbar" class="filterProducts animated fadeInRight" [(ngModel)]="searchTerm" name="searchTerm" placeholder="Filter Items with Cancel" showCancelButton color="danger"></ion-searchbar>\n   \n  </ion-header>\n\n\n  <ion-content fullscreen #myContent>   \n      <ion-row class="menu-list-items" >\n        <ion-col class="animated fadeInUp delay-3s">\n          <ion-card *ngFor="let product of menuProducts | searchproducts: searchTerm">    \n              <ion-list>\n                  <ion-item (click)="goToItempage()">\n                    <ion-thumbnail item-start>\n                      <img src="assets/imgs/tsf-promo.png">\n                    </ion-thumbnail> \n                    <h2 text-wrap class="item-title">{{product.ProdName}}</h2>\n                    <p class="item-desc" text-wrap>Lorem ipsum lorem ipsum ipsum lorem lorem ipsum</p>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge> \n                 </ion-item>   \n                    <ion-row  class="item-status-block">\n                    <ion-col col-7>\n                      <h1 class="item-price">&#8377;{{product.Price1}}\n                            <span small class="item-bottom-offer">10% Off</span>\n                      </h1>\n                    </ion-col>\n                    <ion-col col-5>\n                  <button [hidden]="hidebutton[product.ProdNum]"  ion-button round small item-end color="themecolor" (click)="addTocart(product)"><ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add</button>                                    \n                  <ion-buttons>\n                    <div [hidden]="!hidebutton[product.ProdNum]"> \n                      <input (click)="decrementQty(product)" type=\'button\'  value=\'-\' class=\'qtyminus\'  field=\'quantity\' />\n                      <input type=\'text\' name=\'quantity\' [(ngModel)]="cartProductQty[product.ProdNum]" class=\'qty\' />\n                      <input (click)="incrementQty(product)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                      </div>\n                 </ion-buttons> \n                </ion-col>\n              </ion-row>                \n                </ion-list>            \n            </ion-card>\n            </ion-col>\n       </ion-row>\n       <!-- <div class="menu-open-overlay" [hidden]="!overlayHidden"></div>\n       <ion-row class="bottom-menu-list" [hidden]="!menublockHidden">\n          <ion-list>       \n              <ion-item class="bottom-menu-title" *ngFor="let menu of menuNames" > \n             \n                <ion-label color="dark"> {{menu.PageName}}</ion-label>\n               \n              </ion-item>\n            </ion-list>\n       </ion-row> -->\n            <ion-row class="bottom-menu-btn">\n            \n                  <button  padding  (click)="openMenuforOutlet()" ion-button round color="dark">Menu&nbsp;<ion-icon name="restaurant"></ion-icon></button>\n            </ion-row>\n      </ion-content>\n\n      <ion-footer *ngIf="cartLength > 0">\n        <cart cartdata=\'cartitem\'></cart>\n      </ion-footer>\n'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\storemenu\storemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], StoremenuPage);
    return StoremenuPage;
}());

// public onSearch(ev: any) {
//   // Reset items back to all of the items
//   this.display_user_Outlets();
//   // set val to the value of the searchbar
//   let val = ev.target.value;
//   // if the value is an empty string don't filter the items
//   if (val && val.trim() != '') {
//   this.outlets_lists = this.outlets_lists.filter((item) => {
//   return (item.store_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
//   });
//   }
//   } 
//# sourceMappingURL=storemenu.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__["a" /* SearchproductsPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__["a" /* SearchproductsPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchproductsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchproductsPipe = /** @class */ (function () {
    function SearchproductsPipe() {
    }
    SearchproductsPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toString().toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toString().toLowerCase().includes(args);
        });
    };
    SearchproductsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'searchproducts',
        })
    ], SearchproductsPipe);
    return SearchproductsPipe;
}());

//# sourceMappingURL=searchproducts.js.map

/***/ })

});
//# sourceMappingURL=0.js.map