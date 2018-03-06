webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connexion_connexion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enregistrement_enregistrement__ = __webpack_require__(51);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connexionPage = __WEBPACK_IMPORTED_MODULE_3__connexion_connexion__["a" /* ConnexionPage */];
        this.enregistrementPage = __WEBPACK_IMPORTED_MODULE_4__enregistrement_enregistrement__["a" /* EnregistrementPage */];
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/login/login.html"*/'\n<ion-content class="bg-imgkaraoke scroll">\n  <img src="../assets/images/logo.png" alt="logo" class="logo">\n\n  <div>\n    <ion-list inset class="list">\n      <ion-item class="item">\n        <ion-label style="font-size=12px;color:#fff" stacked>Nom d\'utilisateur</ion-label>\n        <ion-input type="text" placeholder="Entrez votre nom d\'utilisateur"></ion-input>\n      </ion-item>\n\n      <ion-item class="item">\n          <ion-label style="font-size=12px;color:#fff" stacked>Mot de passe</ion-label>\n        <ion-input type="text" placeholder="Entrez votre mot de passe"></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <p class="text" style="font-family:open-sans; font-size:14px; color:#ebebeb;">\n    <a href="#">Mot de passe perdu ?</a>\n  </p>\n\n  <div text-center>\n      <button class="btn-login" ion-button color=\'secondary\' round [navPush]="connexionPage">Connexion</button>\n    </div>\n  <div text-center>\n    <button class="btn-reg" ion-button round outline [navPush]="enregistrementPage">S\'enregistrer</button>\n  </div>\n\n  <p class="text-or" style="font-family:open-sans; font-size:14px; color:#ebebeb;">\n      Ou\n    </p>\n\n  <img src="assets/images/facebook.png" class="btn-fb">\n\n  \n</ion-content>'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/principal/principal.html"*/'<!--\n  Generated template for the PrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>,\n\n  <ion-navbar>\n    <!-- <ion-title>principal</ion-title> -->\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="scroll bg">\n  <img src="../assets/images/logom.jpeg" alt="logo" class="logo">\n  <h1 text-center style="color: rgb(99, 99, 99)">App Karaoke</h1>\n  <p text-center style="color: rgb(99, 99, 99); font-family:open-sans; font-size:14px;">Démontrez vos talents de chanteur !</p>\n  <br>\n  <div text-center>\n    <button class="btn" ion-button color=\'secondary\' round [navPush]="nextPage">Voir comment ça marche</button>\n  </div>\n  <div class="secondPage">\n    <h3 class="sousTitre" text-center style="color: rgb(129, 111, 125)">Choisissez votre catégorie</h3>\n    <div class="categories">\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/rock.jpg">\n        <span class="catTitre">Rock</span>\n      </div>\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/pop.jpg">\n        <span class="catTitre">Pop</span>\n      </div>\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/rap.jpg">\n        <span class="catTitre">Rap</span>\n      </div>\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/jazz.png">\n        <span class="catTitre">Jazz</span>\n      </div>\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/disney.jpg">\n        <span class="catTitre">Walt Disney</span>\n      </div>\n      <div class="cat">\n        <img class="catImg" src="../assets/images/categories/love.jpeg">\n        <span class="catTitre">Love</span>\n      </div>\n\n    </div>\n<br><br>\n    <h3 class="sousTitre" text-center style="color: rgb(129, 111, 125)">Visitez notre établissement</h3>\n    <div class="accesTexte" text-center>Situé dans le nord de Bruxelles, notre bar est facilement accessible via les transports publics ou en voiture. Voir plan ci-dessous.</div>\n    <img src="../assets/images/googlemap.jpg" style="min-width:100%;max-width:100%;margin:auto;display: block;">\n<br><br>\n<h3 class="sousTitre" text-center style="color: rgb(129, 111, 125)">Contact</h3>\n    <div class="accesTexte" text-center>Vous souhaitez en savoir plus sur notre établissement ?</div>\n    <div text-center>\n      <button class="btn" ion-button color=\'secondary\' outline [navPush]="nextPage">Contactez-nous</button>\n    </div>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(102);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nextPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.principalPage = __WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/welcome/welcome.html"*/'<ion-slides pager>\n\n  <ion-slide style="background-color: #d49898" class="bg-imgkaraoke2">\n    <i class="fa fa-video-camera" style="font-size:130px; color:#ebebeb;"></i>\n    <h1 style="color: #ebebeb">Mission Karaoké</h1>\n    <p [navPush]="principalPage" style="color: #ebebeb; font-family:open-sans; font-size:14px;">Ajoutez les playlists que vous voulez !</p>\n  </ion-slide>\n\n  <ion-slide style="background-color: #f1c40f" class="bg-imgkaraoke">\n    <i class="fa fa-headphones" style="font-size:130px; color:#ebebeb;"></i>\n    <h1 style="color: #ebebeb">Un moment unique</h1>\n    <p style="color: #ebebeb; font-family:open-sans; font-size:14px;">Une expérience à partager entre amis !</p>\n  </ion-slide>\n\n  <ion-slide class="bg-img">\n    <h1 style="color: #ebebeb">Bienvenue sur App Karaoké</h1>\n    <p class="slider-p" style="color: #ebebeb; font-family:open-sans; font-size:14px;">Qu\'attendez-vous pour commencer ? Let\'s go !</p>\n   <br>\n   \n    <button ion-button color="light" style="text-align:center;" outline [navPush]="nextPage">Commencer !</button>\n  </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connexion/connexion.module": [
		279,
		4
	],
	"../pages/enregistrement/enregistrement.module": [
		280,
		3
	],
	"../pages/login/login.module": [
		281,
		2
	],
	"../pages/principal/principal.module": [
		282,
		1
	],
	"../pages/welcome/welcome.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_music__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__accueil_accueil__["a" /* AccueilPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__music_music__["a" /* MusicPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Music" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="News" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicPage = (function () {
    function MusicPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-music',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/music/music.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/music/music.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = (function () {
    function NewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/news/news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccueilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccueilPage = (function () {
    function AccueilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccueilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accueil',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/accueil/accueil.html"*/'<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="../../assets/images/logo.png" alt="logo" class="logo">\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="background" scrollbar-y-auto>\n\n\n  <h1 text-center class="titre">App Karaoke</h1>\n  <h6 text-center class="soustitre">Une application à partager entre amis !</h6>\n\n  <div text-center>\n    <button class="btn" ion-button color=\'secondary\' round [navPush]="nextPage">Voir comment ça marche</button>\n\n    \n  </div>\n  \n\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/accueil/accueil.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccueilPage);
    return AccueilPage;
}());

//# sourceMappingURL=accueil.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_music_music__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_accueil_accueil__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_enregistrement_enregistrement__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_enregistrement_enregistrement__["a" /* EnregistrementPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__["a" /* PrincipalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connexion/connexion.module#ConnexionPageModule', name: 'ConnexionPage', segment: 'connexion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enregistrement/enregistrement.module#EnregistrementPageModule', name: 'EnregistrementPage', segment: 'enregistrement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_music_music__["a" /* MusicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_accueil_accueil__["a" /* AccueilPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_enregistrement_enregistrement__["a" /* EnregistrementPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_principal_principal__["a" /* PrincipalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enregistrement_enregistrement__ = __webpack_require__(51);
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
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnexionPage = (function () {
    function ConnexionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.enregistrementPage = __WEBPACK_IMPORTED_MODULE_2__enregistrement_enregistrement__["a" /* EnregistrementPage */];
    }
    ConnexionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnexionPage');
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/connexion/connexion.html"*/'<!--\n  Generated template for the ConnexionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <p [navPush]="enregistrementPage">-> S\'enregistrer</p>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>back-end à faire : si login et pass ok, direction accueil, sinon erreur et remettre formulaire</p>\n</ion-content>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/connexion/connexion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConnexionPage);
    return ConnexionPage;
}());

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnregistrementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connexion_connexion__ = __webpack_require__(50);
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
 * Generated class for the EnregistrementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnregistrementPage = (function () {
    function EnregistrementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connexionPage = __WEBPACK_IMPORTED_MODULE_2__connexion_connexion__["a" /* ConnexionPage */];
    }
    EnregistrementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnregistrementPage');
    };
    EnregistrementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enregistrement',template:/*ion-inline-start:"/home/user/Desktop/ionic/myApp/src/pages/enregistrement/enregistrement.html"*/'<!--\n  Generated template for the EnregistrementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <p [navPush]="connexionPage">-> Se connecter</p>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-register scroll">\n    <div>\n        <ion-list inset class="list">\n            <ion-item class="item">\n                <!-- <ion-label style="font-size=12px;color:#fff" stacked>Nom d\'utilisateur</ion-label> -->\n                <ion-input type="text" placeholder="Entrez votre nom d\'utilisateur"></ion-input>\n              </ion-item>\n              \n              <ion-item class="item">\n                  <!-- <ion-label style="font-size=12px;color:#fff" stacked>Adresse email</ion-label> -->\n                  <ion-input type="text" placeholder="Entrez votre adresse email"></ion-input>\n                </ion-item>\n    \n                <ion-item class="item">\n                    <!-- <ion-label style="font-size=12px;color:#fff" stacked>Mot de passe</ion-label> -->\n                  <ion-input type="text" placeholder="Entrez votre mot de passe"></ion-input>\n                </ion-item>\n\n                <ion-item class="item">\n                    <!-- <ion-label style="font-size=12px;color:#fff" stacked>Répétition du mot de passe</ion-label> -->\n                  <ion-input type="text" placeholder="Entrez à nouveau votre mot de passe"></ion-input>\n                </ion-item>\n                <br>\n                <div text-center>\n                    <button class="btn" ion-button round [navPush]="enregistrementPage">S\'enregistrer</button>\n                </div>\n          </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/user/Desktop/ionic/myApp/src/pages/enregistrement/enregistrement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EnregistrementPage);
    return EnregistrementPage;
}());

//# sourceMappingURL=enregistrement.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map