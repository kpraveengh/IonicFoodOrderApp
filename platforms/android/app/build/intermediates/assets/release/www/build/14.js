webpackJsonp([14],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(restprovider, navCtrl, navParams, loadingCtrl) {
        this.restprovider = restprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.LoginRemCheck = function () {
        this.rmchecked = 'rmchecked';
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.presentWithGif1();
        var data = { 'username': this.username, 'password': this.password };
        this.restprovider.getLoginData(data).subscribe(function (data) {
            _this.result_data = data.data;
            _this.loaderDismiss();
            _this.navCtrl.push('Home');
        });
    };
    // loader method start
    LoginPage.prototype.presentWithGif1 = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n        <img class=\"loading\" width=\"120px\" src=\"assets/imgs/loader.gif\" />\n      </div>"
        });
        return this.loading.present();
    };
    LoginPage.prototype.loaderDismiss = function () {
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\Angular\Cozyorder\CozyOrders\src\pages\login\login.html"*/'<!-- \n  <ion-content padding id="login-block" >\n    <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n\n      <ion-row  inset>\n        <ion-col class="login-block-input-section"  col-md-3 offset-md-3 col-md-6 col-sm-12 col-xs-12>\n            <h1 text-center>Cozy Corporate</h1>\n          <ion-list>\n            <ion-item class="login-block-option-one">\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input placeholder="Email" name="username" id="loginField" type="text" required [(ngModel)]="username" #email></ion-input>\n            </ion-item>\n            <ion-item class="login-block-option-two">\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input placeholder="Password" name="password" id="passwordField" type="password" required [(ngModel)]="password"></ion-input>\n            </ion-item>\n              <ion-item no-lines color="trans">\n                  <ion-label color="light">Remember me</ion-label>\n                  <ion-checkbox name="Remember" color="primary"  [(ngModel)]="rmchecked" checked=\'rmchecked\'  (ionChange)="LoginRemCheck()"></ion-checkbox>\n                  </ion-item>\n  \n        <ion-col responsive-sm class="login-btn-bottom">\n          <button ion-button color="themecolor" class="submit-btn login-btn" round block type="submit" [disabled]="!loginForm.form.valid">Login\n          </button>\n        </ion-col>\n      </ion-list>\n    </ion-col>\n      </ion-row>\n    </form>\n  </ion-content> -->\n\n    <ion-content class="login-second-style">\n        <ion-grid class="login-title-grid">\n          <div class="login-title-bg">\n           <h2>COZY ORDERS</h2>\n          </div>\n          </ion-grid>\n      <ion-grid class="login-info-grid" padding >\n          <ion-card>\n            <ion-card-content>\n                <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n              <ion-item>\n                <ion-label floating color="primary">Username</ion-label>\n                <ion-input type="text" #username></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" #password></ion-input>\n              </ion-item>\n              <ion-item no-lines color="trans">\n                  <ion-label color="light">Remember me</ion-label>\n                  <ion-checkbox name="Remember" color="primary"  [(ngModel)]="rmchecked" checked=\'rmchecked\'  (ionChange)="LoginRemCheck()"></ion-checkbox>\n                  </ion-item>\n              <ion-grid>\n                <button ion-button class="submit-btn login-btn" round block type="submit" [disabled]="!loginForm.form.valid" style="background-image: linear-gradient(to left, #440499, #4804aa, #4c03bc, #4f04ce, #5205e1);">Login</button>\n              </ion-grid>\n            </form>\n            </ion-card-content>\n          </ion-card>\n      </ion-grid>\n    </ion-content>'/*ion-inline-end:"G:\Angular\Cozyorder\CozyOrders\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=14.js.map