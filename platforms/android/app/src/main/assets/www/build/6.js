webpackJsonp([6],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(353);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        if (this.registerCredentials.password != this.registerCredentials.confirmation_password) {
            this.showPopup("Error", 'The password confirmation does not match.');
        }
        else {
            this.auth.register(this.registerCredentials).subscribe(function (success) {
                if (success) {
                    _this.createSuccess = true;
                    _this.showPopup("Success", "Account created.");
                }
                else {
                    _this.showPopup("Error", "Problem creating account.");
                }
            }, function (error) {
                _this.showPopup("Error", error);
            });
        }
    };
    SignupPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.backtoLogin = function () {
        this.navCtrl.push('Login');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\signup\signup.html"*/'\n\n<ion-content class="login-second-style">\n  <ion-grid class="login-title-grid">\n    <div class="login-title-bg">\n     <h2>COZY ORDERS</h2>\n    </div>\n    </ion-grid>\n<ion-grid class="login-info-grid" padding >\n    <ion-card>\n      <ion-card-content>\n          <form (ngSubmit)="register()" #registerForm="ngForm">\n        <ion-item>\n          <ion-label floating color="primary">Name</ion-label>\n          <ion-input type="text"  name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="password"  name="password" [(ngModel)]="registerCredentials.email" required></ion-input>\n          </ion-item>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password"  name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n          <ion-input type="password"  name="confirmation_password" [(ngModel)]="registerCredentials.confirmation_password" required></ion-input>\n        </ion-item>\n        <ion-grid>\n            <button ion-button class="submit-btn" round block type="submit" [disabled]="!registerForm.form.valid" style="background-image: linear-gradient(to left, #440499, #4804aa, #4c03bc, #4f04ce, #5205e1);">Register</button>\n        </ion-grid>\n      </form>\n      </ion-card-content>\n    </ion-card>\n    <ion-row class="text-center" style="margin:10px auto">\n        <span style="color: #4b03b7;" (click)="backtoLogin()"><ion-icon name="arrow-back"></ion-icon>&nbsp;&nbsp;Back to Login</span>\n        </ion-row>\n \n</ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=6.js.map