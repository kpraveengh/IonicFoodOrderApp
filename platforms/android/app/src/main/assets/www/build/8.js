webpackJsonp([8],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.person = { name: undefined, gender: undefined, birthdate: undefined };
        this.dob = undefined;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.showProfileInfo = 1;
        var person = JSON.parse(localStorage.getItem('PERSON'));
        if (person) {
            this.person = person;
            this.age = this.getAge(this.person.birthdate);
            this.dob = new Date(this.person.birthdate).toISOString();
        }
    };
    ProfilePage.prototype.editProfileInfo = function () {
        this.showProfileInfo = 0;
    };
    ProfilePage.prototype.profileUpdateConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to update your profile?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.showProfileInfo = 1;
                        _this.ionViewDidLoad();
                    }
                },
                {
                    text: 'Update',
                    handler: function () {
                        _this.save();
                    }
                }
            ]
        });
        alert.present();
    };
    // reset(){
    //   this.person = {name: null, company: null, birthdate: null};
    //   this.dob = null;
    //   this.showProfile = false;
    // }
    ProfilePage.prototype.save = function () {
        this.showProfileInfo = 1;
        this.person.birthdate = new Date(this.dob).getTime();
        this.age = this.getAge(this.person.birthdate);
        this.showProfile = true;
        localStorage.setItem('PERSON', JSON.stringify(this.person));
    };
    ProfilePage.prototype.getAge = function (birthdate) {
        var currentTime = new Date().getTime();
        return ((currentTime - birthdate) / 31556952000).toFixed(0);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"G:\Angular\CozyOrderResto\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons >\n        <button ion-button icon-only>\n          <ion-label class="open-page-title">Profile</ion-label>    \n        </button>\n        </ion-buttons>\n  \n      <ion-buttons end>\n      <button ion-button  icon-only class="top-nav-search" (click)="editProfileInfo()">\n      <img src="assets/icon/pencil.png">\n      </button>\n    </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  \n  \n  <ion-content >\n     \n   <ion-card>\n    <form #formCtrl="ngForm">\n        <div align="center" *ngIf="formCtrl.form.valid">            \n          <div class="profile-view-bg text-center">\n              <ion-row class="profile-view-page">\n                <ion-col col-12 class="choose-location-city-title text-center">\n                    <img class="profile-image" src="assets/imgs/avatar.png">               \n                   </ion-col>\n              </ion-row>\n            </div>       \n        </div>\n        <ion-list *ngIf="showProfileInfo" class="profile-info-view">\n              <ion-item>\n              <ion-icon name="person">\n                 <span class="profile-data"> {{person.name}}</span>\n              </ion-icon>\n             </ion-item>\n             <ion-item>\n                <ion-icon name="checkbox">\n                    <span class="profile-data"> {{person.gender}}</span>\n                </ion-icon>\n               </ion-item>\n               <ion-item>\n                  <ion-icon name="calendar">\n                      <span class="profile-data">  {{age}}</span>\n                  </ion-icon>\n                 </ion-item>\n          </ion-list>\n\n    <ion-list *ngIf="!showProfileInfo">\n\n      \n    <form #profileUpdateForm="ngForm" (ngSubmit)="profileUpdateConfirm()" autocomplete="off">\n\n        <ion-row  inset>\n          <ion-col class="profile-update-block-input-section"  col-md-3 offset-md-3 col-md-6 col-sm-12 col-xs-12>\n            <ion-list>\n              <ion-item class="login-block-option-one">\n                  <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                  <ion-input type="text" [(ngModel)]="person.name" name="name" required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Gender</ion-label>\n                  <ion-select class="selectGender" [(ngModel)]="person.gender" name="gender" required>\n                    <ion-option value="Male">Male</ion-option>\n                    <ion-option value="Female">Female</ion-option>\n                  </ion-select>\n                </ion-item>\n              <ion-item>\n                  <ion-datetime full required name="birthdate" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="dob" [ngModelOptions]="{standalone:true}"></ion-datetime>\n              </ion-item>    \n          <ion-col class="update-btn-bottom">\n            <button ion-button color="themecolor" class="submit-btn" round type="Update" [disabled]="!profileUpdateForm.form.valid">Update\n            </button>\n          </ion-col>\n        </ion-list>\n      </ion-col>\n        </ion-row>\n      </form>\n      \n    <!-- <button color="danger" ion-button block (click)="reset()">Reset</button> -->\n  </ion-list>\n  </form>\n</ion-card>   \n  </ion-content>'/*ion-inline-end:"G:\Angular\CozyOrderResto\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map