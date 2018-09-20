webpackJsonp([0],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoremenuPageModule", function() { return StoremenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storemenu__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(732);
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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoremenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(352);
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
    function StoremenuPage(cartprvdr, navCtrl, navParams, menuCtrl, zone, myElement, popoverCtrl, restprovider, alertCtrl, events) {
        this.cartprvdr = cartprvdr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.zone = zone;
        this.myElement = myElement;
        this.popoverCtrl = popoverCtrl;
        this.restprovider = restprovider;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.hideShowAnimator = true;
        // shrinking page for top store info
        this.section = 'two';
        this.somethings = new Array(20);
        this.outlet_data = this.navParams.get('data');
        // Initial cart values from localstorage
        // cartitem: any=localStorage.getItem('cartitem');
        this.cartitem = this.cartprvdr.localCartProducts;
        this.product_tax = [];
        this.menuList = [];
        this.cartProducts = [];
        this.addToCartButton = 1;
        this.cartQtyButton = 0;
        this.hidebutton = [];
        this.showButton = [];
        this.cartProductQty = [];
        this.openMenu = false;
        // test/////////////
        this.start = 0;
        this.threshold = 100;
        this.slideHeaderPrevious = 0;
        this.toggleProducts = [];
        ////////////////////////
        // for menu popup overlay
        this.overlayHidden = false;
        this.menublockHidden = false;
        this.prodcutSearchbar = false;
        this.openSearchMenu = false;
        this.dietType = false;
        ////////////////// --FILTER PRODUCTS--///////
        this.test = [];
        this.newAr = [];
        this.search = '';
        this.highlighted = false;
        this.hideMenulist = true;
        this.showheader = false;
        this.hideheader = true;
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeEnable(false);
        this.qty = 1;
        this.getProducts();
    }
    StoremenuPage.prototype.hideShowAnimation = function () {
        this.hideShowAnimator = !this.hideShowAnimator;
    };
    // get products data from server
    StoremenuPage.prototype.getProducts = function () {
        this.outlet_active_tax = this.outlet_data.outlet_tax;
        this.information = this.outlet_data.menus;
        console.log(this.information);
        var outlet = {
            "name": "Pista House - Gachibowli",
            "category": "Biryani, Hyderabadi, North Indian, Tandoor, Mughlai, Kebabs, Chinese",
            "address": "Gachibowli, Hyderabad, Telangana- 500082"
        };
        this.outletName = outlet.name;
        this.outletCat = outlet.category;
        this.outletAddress = outlet.address;
        this.nestedProducts();
    };
    StoremenuPage.prototype.nestedProducts = function () {
        this.nestedMenu = this.information.filter(function (child) {
            return child.menu_name;
        });
        this.submenu = this.nestedMenu;
    };
    StoremenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.localCartProducts = _this.cartprvdr.localCartProducts;
            console.log(+_this.localCartProducts.length);
            if (_this.localCartProducts.length >= 1) {
                {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Cart items will remove from the cart',
                        message: 'wish to continue?',
                        buttons: [
                            {
                                text: 'Disagree',
                                handler: function () {
                                    console.log('Disagree clicked');
                                }
                            },
                            {
                                text: 'Agree',
                                handler: function () {
                                    _this.localCartProducts = [];
                                    _this.cartprvdr.localCartProducts = _this.localCartProducts;
                                    _this.navCtrl.pop();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            }
            else {
                _this.localCartProducts = [];
                _this.cartprvdr.localCartProducts = _this.localCartProducts;
                _this.navCtrl.pop();
            }
        };
    };
    StoremenuPage.prototype.goToCart = function () {
        this.navCtrl.push("Cart");
    };
    StoremenuPage.prototype.addTocart = function (item) {
        // console.log(item)
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        // console.log("local products data", this.localCartProducts,this.cartprvdr.localCartProducts)
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartprodnum = this.localCartProducts.filter(function (element) {
                return (element.prodnum == item.prodnum);
            });
        }
        // to enable disable addtocart button
        this.cartProductQty[item.prodnum] = 1;
        this.hideAddcartBtn(item.prodnum);
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
                this.taxObj.taxprice = (parseFloat(item.price)) * (data.Tax_Percentage / 100);
                this.product_tax.push(this.taxObj);
            }
        }
        this.cartItem = {
            'prodnum': item.prodnum,
            'ProductName': item.prodname,
            'productQty': 1,
            'store_id': item.store_id,
            'productPrice': item.price1,
            'subTotal': item.price1,
            'Modifier': [],
            'Tax': this.product_tax
        };
        this.cartProducts.push(this.cartItem);
        //localStorage.setItem('cartitem',JSON.stringify(this.cartProducts));
        this.cartprvdr.localCartProducts = this.cartProducts;
        // console.log("cartData",this.cartprvdr.localCartProducts,this.cartProducts)
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
            this.existCartprodnum = this.localCartProducts.filter(function (element) {
                return (element.prodnum == product.prodnum);
            });
        }
        var cartItem = this.existCartprodnum;
        cartItem[0].productQty++;
        this.cartProductQty[product.prodnum] = cartItem[0].productQty;
        console.log(cartItem[0].productQty);
        // cartItem[0].subTotal=(parseFloat(cartItem[0].productQty)*parseFloat(cartItem[0].Price1));
        product.qty++;
        // console.log(product.qty)
        this.cartprvdr.localCartProducts = this.localCartProducts;
        //localStorage.setItem('cartitem',JSON.stringify(this.localCartProducts));
    };
    // decrement product qty
    StoremenuPage.prototype.decrementQty = function (product, index) {
        var _this = this;
        //this.localCartProducts=JSON.parse(localStorage.getItem('cartitem'));
        this.localCartProducts = this.cartprvdr.localCartProducts;
        if (this.localCartProducts != null || this.localCartProducts != undefined) {
            this.existCartprodnum = this.localCartProducts.filter(function (element) {
                return (element.prodnum == product.prodnum);
            });
        }
        var cartItem = this.existCartprodnum;
        cartItem[0].productQty--;
        product.qty--;
        cartItem[0].productQty = product.qty;
        this.cartProductQty[product.prodnum] = product.qty;
        if (product.qty < 1) {
            this.localCartProducts.forEach(function (item, index) {
                if (item === cartItem[0])
                    _this.localCartProducts.splice(index, 1);
            });
            this.showAddcartBtn(product.prodnum);
            delete cartItem[0].productQty;
        }
        this.cartprvdr.localCartProducts = this.localCartProducts;
    };
    // setFilteredItems(prod) {
    //   // console.log('searchval',prod);
    //   for (let a in this.products) {
    //     this.newAr.push(this.products[a]);
    //     for (let bds of this.newAr) {
    //       for (let c in bds) {
    //         this.test.push(bds[c]);
    //         // console.log(bds[c])
    //       }
    //     }
    //   }
    //   // console.log('testarray',this.test);
    //   this.products = this.test.find(function (element) {
    //     return (element.prodname == prod);
    //   });
    //   // console.log(this.products);
    // }
    StoremenuPage.prototype.goToBack = function () {
        this.navCtrl.push('Home');
    };
    StoremenuPage.prototype.openMenuforOutlet = function () {
        this.openMenu = true;
    };
    StoremenuPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    StoremenuPage.prototype.toggleItem = function (i, j) {
        this.information[i].pages[j].open = !this.information[i].pages[j].open;
    };
    StoremenuPage.prototype.scrollToElement = function (menu) {
        console.log(menu);
        var yOffset = document.getElementById(menu).offsetTop;
        this.content.scrollTo(0, yOffset, 2000);
    };
    StoremenuPage.prototype.prodcutSearchToggle = function () {
        this.openSearchMenu = !this.openSearchMenu;
        this.prodcutSearchbar = !this.prodcutSearchbar;
        this.hideMenulist = false;
        this.filterInfo = [];
        this.getProducts();
    };
    StoremenuPage.prototype.searchFilterProducts = function (data) {
        var searchKey = data.target.value;
        if (searchKey && searchKey.trim() != '') {
            this.getProducts();
            this.filterInfo = this.information.filter(function search(res) {
                var children;
                if (res.name.toUpperCase().search(searchKey.toUpperCase()) != -1) {
                    return true;
                }
                if (!Array.isArray(res.pages)) {
                    return false;
                }
                children = res.pages.filter(search);
                if (children.length) {
                    res.products = children;
                    return true;
                }
            });
        }
        else {
            this.getProducts();
            this.filterInfo = [];
        }
    };
    StoremenuPage.prototype.dietFilterProducts = function () {
        this.dietType = !this.dietType;
        if (this.dietType) {
            var diet_name_1 = 'Veg';
            this.information = this.information.filter(function search(a) {
                var children;
                if (a.diet_type === diet_name_1) {
                    return true;
                }
                if (!Array.isArray(a.children)) {
                    return false;
                }
                children = a.children.filter(search);
                if (children.length) {
                    a.children = children;
                    return true;
                }
            });
        }
        else {
            this.getProducts();
        }
    };
    StoremenuPage.prototype.backdropEvent = function () {
        this.openMenu = !this.openMenu;
    };
    StoremenuPage.prototype.backdropforSearchEvent = function () {
        this.openSearchMenu = !this.openSearchMenu;
        this.prodcutSearchbar = !this.prodcutSearchbar;
    };
    StoremenuPage.prototype.ngDoCheck = function () {
        this.localCartProducts = this.cartprvdr.localCartProducts;
        this.cartLength = this.cartprvdr.cartLength();
        this.grandTotal = this.cartprvdr.priceTotal();
        this.cartprvdr.cartTax();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Navbar */])
    ], StoremenuPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], StoremenuPage.prototype, "content", void 0);
    StoremenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-storemenu',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\storemenu\storemenu.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons class="top-nav-cart-icon">\n      <!-- <button ion-button icon-only (click)="goToBack()">\n               Back\n          </button>         -->\n    </ion-buttons>\n    <ion-row class="item-filter-store animated fadeInTop" *ngIf="prodcutSearchbar">\n      <ion-searchbar class="filterProducts" (keyup)="searchFilterProducts($event)" name="searchTerm" placeholder="Enter dish name"\n        animated="true" showCancelButton="false"></ion-searchbar>\n    </ion-row>\n    <ion-buttons end>\n      <button *ngIf="!prodcutSearchbar" ion-button icon-only class="top-nav-search" (click)="prodcutSearchToggle()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button *ngIf="prodcutSearchbar" ion-button icon-only class="top-nav-search" (click)="prodcutSearchToggle()">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent>\n\n  <!-- test -->\n\n\n\n  <div class="store-info-top">\n    <div>\n      <div class="store-title-top">\n        <div class="PpfYW">{{ outletName }}</div>\n      </div>\n      <div class="store-address-top">\n        <div class="store-address">{{ outletCat }}</div>\n      </div>\n      <hr>\n      <div class="store-address-top">\n        <div class="store-address">{{ outletAddress }}</div>\n      </div>\n    </div>\n    <div class="_3ae0I _3SklS">\n      <label class="diet-switch switch">\n        <input class="switch-input" type="checkbox" [(ngModal)]="dietType" />\n        <span class="switch-label" (click)="dietFilterProducts()" data-on="Veg" data-off="All"></span>\n        <span class="switch-handle"></span>\n      </label>\n    </div>\n\n  </div>\n\n\n\n  <!-- test -->\n  <div *ngFor="let item of information; let i = index " color="primary" [id]="item.menu_name">\n\n    <div *ngIf="item.level == 1">\n      <h2 ion-item>\n        {{ item.menu_name }}\n      </h2>\n      <div class="item-with-image">\n        <ion-row>\n          <ion-col col-6 *ngFor="let product of item.pages; let j = index">\n            <img [src]="product.prodimage">\n            <span class="item-title"><span class="diet-icon"><img [src]="product.diet"> </span>{{product.prodname}}</span>\n            <ion-row>\n              <ion-col col-5>\n                <h1 class="item-price pull-left">&#8377;{{product.price}}<br>\n                  <span *ngIf="product.offer" small class="item-bottom-offer">{{product.offer}}</span>\n                </h1>\n              </ion-col>\n              <ion-col col-7 class="addBtn">\n\n                <button [hidden]="hidebutton[product.prodnum]" ion-button small item-end color="themecolor"\n                  (click)="addTocart(product)">\n                  <ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add\n                </button>\n                <ion-buttons style="width:72px;">\n                  <div [hidden]="!hidebutton[product.prodnum]">\n                    <input (click)="decrementQty(product,index)" type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                    <input type=\'text\' readonly name=\'quantity\' [(ngModel)]="cartProductQty[product.prodnum]"\n                      class=\'qty\' />\n                    <input (click)="incrementQty(product)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                  </div>\n                </ion-buttons>\n                <span *ngIf="product.addons" class="custom-option"> Customisable </span>\n              </ion-col>\n            </ion-row>\n\n            <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n            <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Minutes</ion-badge>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-padding [class]="\'level\' +item.level" [id]="item.menu_name">\n\n      <div>\n        <!-- Toggle Button -->\n        <h2 ion-item>\n          {{ item.menu_name }}\n        </h2>\n\n        <ion-list>\n          <!-- Second Level -->\n          <ion-list-header *ngFor="let product of item.pages; let j = index" no-padding>\n            <!-- Toggle Button -->\n            <!-- image checkon products -->\n            <button ion-item (click)="toggleItem(i, j)" *ngIf="product.products" class="child" detail-none>\n              <ion-icon item-end name="arrow-forward" *ngIf="!product.open"></ion-icon>\n              <ion-icon item-end name="arrow-down" *ngIf="product.open"></ion-icon>\n              <span>{{ product.page_name }}</span><br>\n              <span class="page-tagline text-small">Pork chop meatloaf rump, meatball.</span>\n            </button>\n\n            <!-- Direct Add Button as Fallback -->\n            <div *ngIf="!product.products && item.level != 1" ion-item detail-none class="child-item" text-wrap\n              no-lines>\n\n              <ion-row class="item-status-block">\n\n                <ion-col col-8>\n                  <h2 class="item-title"><span class="diet-icon"><img [src]="product.diet"> </span>{{product.prodname}}</h2>\n                  <p class="page-tagline text-small">{{ product.information }}</p>\n\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge>\n\n                  &nbsp;|&nbsp;<span class="item-price">&#8377;{{product.price1}}<br>\n                    <span *ngIf="product.offer" small class="item-bottom-offer">{{product.offer}}</span>\n                  </span>\n                </ion-col>\n                <ion-col col-4 class="addBtn">\n                  <button [hidden]="hidebutton[product.prodnum]" ion-button small item-end color="themecolor"\n                    (click)="addTocart(product)">\n                    <ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add\n                  </button>\n                  <ion-buttons>\n                    <div [hidden]="!hidebutton[product.prodnum]">\n                      <input (click)="decrementQty(product)" type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                      <input type=\'text\' readonly name=\'quantity\' [(ngModel)]="cartProductQty[product.prodnum]"\n                        class=\'qty\' />\n                      <input (click)="incrementQty(product)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                    </div>\n                  </ion-buttons>\n                  <span *ngIf="product.addons" class="custom-option"> Customisable </span>\n                </ion-col>\n              </ion-row>\n            </div>\n\n            <div *ngIf="product.products && product.open">\n              <!-- Third Level -->\n              <ion-row class="item-status-block" *ngFor="let item of product.products; let k = index" detail-none class="child-item"\n                text-wrap>\n\n                <ion-col col-8>\n                  <h2 class="item-title"><span class="diet-icon"><img [src]="item.diet"> </span>{{item.prodname}}</h2>\n                  <p class="page-tagline text-small">{{ item.information }}</p>\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                  <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge>\n                  &nbsp;|&nbsp;<span class="item-price">&#8377;{{item.price1}}<br>\n                    <span *ngIf="product.offer" small class="item-bottom-offer">{{item.offer}}</span>\n                  </span>\n                </ion-col>\n                <ion-col col-4 class="addBtn">\n                  <button [hidden]="hidebutton[item.prodnum]" ion-button small item-end color="themecolor"\n                    (click)="addTocart(item)">\n                    <ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add\n                  </button>\n                  <ion-buttons>\n                    <div [hidden]="!hidebutton[item.prodnum]">\n                      <input (click)="decrementQty(item)" type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                      <input type=\'text\' readonly name=\'quantity\' [(ngModel)]="cartProductQty[item.prodnum]" class=\'qty\' />\n                      <input (click)="incrementQty(item)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                    </div>\n                  </ion-buttons>\n                  <span *ngIf="item.addons" class="custom-option"> Customisable </span>\n                </ion-col>\n              </ion-row>\n\n            </div>\n\n          </ion-list-header>\n        </ion-list>\n      </div>\n    </ion-list-header>\n  </ion-list>\n\n  <ion-row class="animate fadeInBottom search-pd-popup" [ngClass]="{\'is-visible\': openSearchMenu == true}" role="alert">\n\n    <ion-list class="accordion-list">\n      <!-- First Level -->\n      <ion-list-header *ngFor="let item of filterInfo; let i = index" no-padding [class]="\'level\' +item.level" [id]="item.name">\n\n        <div>\n          <!-- Toggle Button -->\n          <h2 ion-item>\n            {{ item.menu_name }}\n          </h2>\n\n          <ion-list>\n            <!-- Second Level -->\n            <ion-list-header *ngFor="let product of item.children; let j = index" no-padding>\n              <!-- Toggle Button -->\n              <!-- image checkon products -->\n              <button ion-item *ngIf="product.children" class="child" detail-none>\n                <span>{{ product.name }}</span><br>\n                <span class="page-tagline text-small">Pork chop meatloaf rump, meatball.</span>\n              </button>\n\n              <!-- Direct Add Button as Fallback -->\n              <div *ngIf="!product.children" ion-item detail-none class="child-item" text-wrap no-lines>\n\n                <ion-row class="item-status-block">\n\n                  <ion-col col-8>\n                    <h2 class="item-title"><span class="diet-icon"><img [src]="product.diet"> </span>{{product.name}}</h2>\n                    <p class="page-tagline text-small">{{ product.information }}</p>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge>\n                  </ion-col>\n                  <ion-col col-4 class="addBtn">\n                    <button [hidden]="hidebutton[product.prodnum]" ion-button small item-end color="themecolor"\n                      (click)="addTocart(product)">\n                      <ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add\n                    </button>\n                    <ion-buttons>\n                      <div [hidden]="!hidebutton[product.prodnum]">\n                        <input (click)="decrementQty(product)" type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                        <input type=\'text\' readonly name=\'quantity\' [(ngModel)]="cartProductQty[product.prodnum]"\n                          class=\'qty\' />\n                        <input (click)="incrementQty(product)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                      </div>\n                    </ion-buttons>\n                    <span *ngIf="product.addons" class="custom-option"> Customisable </span>\n                  </ion-col>\n                </ion-row>\n              </div>\n\n              <div *ngIf="product.children">\n                <!-- Third Level -->\n                <ion-row class="item-status-block" *ngFor="let item of product.children; let k = index" detail-none\n                  class="child-item" text-wrap>\n\n                  <ion-col col-8>\n                    <h2 class="item-title"><span class="diet-icon"><img [src]="item.diet"> </span>{{item.name}}</h2>\n                    <p class="page-tagline text-small">{{ item.information }}</p>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">24 Available</ion-badge>\n                    <ion-badge class="duration_avaialability_badge" small outline color="themecolor">5 Min Wait</ion-badge>\n                  </ion-col>\n                  <ion-col col-4 class="addBtn">\n                    <button [hidden]="hidebutton[item.prodnum]" ion-button small item-end color="themecolor"\n                      (click)="addTocart(item)">\n                      <ion-icon ios="ios-add" md="md-add"></ion-icon>&nbsp;Add\n                    </button>\n                    <ion-buttons>\n                      <div [hidden]="!hidebutton[item.prodnum]">\n                        <input (click)="decrementQty(item)" type=\'button\' value=\'-\' class=\'qtyminus\' field=\'quantity\' />\n                        <input type=\'text\' readonly name=\'quantity\' [(ngModel)]="cartProductQty[item.prodnum]"\n                          class=\'qty\' />\n                        <input (click)="incrementQty(item)" type=\'button\' value=\'+\' class=\'qtyplus\' field=\'quantity\' />\n                      </div>\n                    </ion-buttons>\n                    <span *ngIf="item.addons" class="custom-option"> Customisable </span>\n                  </ion-col>\n                </ion-row>\n\n              </div>\n\n            </ion-list-header>\n          </ion-list>\n        </div>\n      </ion-list-header>\n    </ion-list>\n  </ion-row>\n\n  <ion-row *ngIf="submenu?.length > 0">\n    <ion-row class="animate fadeInBottom cd-popup" (click)="backdropEvent()" [ngClass]="{\'is-visible\': openMenu == true}"\n      role="alert">\n      <div class="cd-popup-container">\n        <ion-list>\n          <ion-item class="bottom-menu-title" *ngFor="let menu of submenu">\n\n            <ion-label color="dark" (click)="scrollToElement(menu.menu_name)">{{menu.menu_name}}</ion-label>\n\n          </ion-item>\n        </ion-list>\n      </div> <!-- cd-popup-container -->\n    </ion-row>\n\n\n    <ion-row class="bottom-menu-btn">\n\n      <button small *ngIf="hideMenulist" (click)="openMenuforOutlet()" ion-button round color="dark">Menu&nbsp;<ion-icon\n          name="restaurant"></ion-icon></button>\n    </ion-row>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer *ngIf="cartLength >0 ">\n  <cart cartdata=\'cartitem\'></cart>\n</ion-footer>\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\storemenu\storemenu.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('hideShowAnimator', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ color: 'red' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ color: 'green' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.5s')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.9s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], StoremenuPage);
    return StoremenuPage;
}());

//# sourceMappingURL=storemenu.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menulist_menulist__ = __webpack_require__(734);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__["a" /* SearchproductsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__menulist_menulist__["a" /* MenulistPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__searchproducts_searchproducts__["a" /* SearchproductsPipe */],
                __WEBPACK_IMPORTED_MODULE_2__menulist_menulist__["a" /* MenulistPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 733:
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

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenulistPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenulistPipe = /** @class */ (function () {
    function MenulistPipe() {
    }
    MenulistPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a[args] < b[args]) {
                return -1;
            }
            else if (a[args] > b[args]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    MenulistPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'menulist',
        })
    ], MenulistPipe);
    return MenulistPipe;
}());

//# sourceMappingURL=menulist.js.map

/***/ })

});
//# sourceMappingURL=0.js.map