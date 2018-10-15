webpackJsonp([2],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_menu__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { TranslateModule } from '@ngx-translate/core';


var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_menu__["a" /* ListMemnuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_menu__["a" /* ListMemnuPage */])
                // ,
                // TranslateModule.forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__list_menu__["a" /* ListMemnuPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-menu.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMemnuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_master_list_master__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListMemnuPage = /** @class */ (function () {
    function ListMemnuPage(user, app, menu, barcodeScanner, navCtrl, items, modalCtrl, toastCtrl) {
        this.user = user;
        this.menu = menu;
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.accont = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.programasSelect = localStorage.getItem('programasSelect');
        this.programas = JSON.parse(localStorage.getItem('programas'));
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.appMenuItems = [
            { title: 'Inicio', component: 'TutorialPage', icono: 'home' },
            { title: 'Scanner', component: 'WelcomePage', icono: 'qr-scanner' }
        ];
        this.menuset();
    }
    ListMemnuPage.prototype.ionViewDidLoad = function () {
        // this.scanCode();
        this.menuset();
    };
    ListMemnuPage.prototype.menuset = function () {
        this.enableMenuHiden();
        if (this.session == null && this.programasSelect == null) {
            this.enableMenuHiden();
        }
        else {
            this.enableMenu();
        }
    };
    ListMemnuPage.prototype.Programa = function (data) {
        console.log(data);
        localStorage.setItem('programasSelect', data);
        this.menuset();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__list_master_list_master__["a" /* ListMasterPage */]);
    };
    ListMemnuPage.prototype.enableMenu = function () {
        this.menu.enable(true, 'loggedOutMenu');
    };
    ListMemnuPage.prototype.enableMenuHiden = function () {
        this.menu.enable(false, 'loggedOutMenu');
    };
    ListMemnuPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    ListMemnuPage.prototype.codigo = function () {
        if (this.accont.codigo == '1') {
            this.startNotification('si es beneficiario');
            this.Beneficio('data');
        }
        if (this.accont.codigo == '2') {
            this.startNotification(' no beneficiario');
        }
        if (this.accont.codigo == '3') {
            this.startNotification('completar datos');
            this.compledData('data', 'data');
        }
    };
    ListMemnuPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMemnuPage.prototype.logout = function () {
        // localStorage.clear();
        localStorage.removeItem('dependencias');
        localStorage.removeItem('programas');
        localStorage.removeItem('programasSelect');
        localStorage.removeItem('session');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        //this.navCtrl.setRoot(ListMasterPage); 
    };
    ListMemnuPage.prototype.Beneficio = function (data) {
        var addModal = this.modalCtrl.create('BeneficioPage');
        addModal.onDidDismiss(function (item) {
            console.log(item);
        });
        addModal.present();
    };
    ListMemnuPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ListMemnuPage.prototype.compledData = function (datas, data) {
        console.log(datas);
        this.navCtrl.push('UpdateInfoPage', {
            item: datas,
            items: data
        });
    };
    ListMemnuPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    ListMemnuPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>" + barcodeData.text + "</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
            // var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>iLlrLpBfI0cpqKiqUrU5d+LL9j9Wpuf7wvLttyKK4KtHcxWyyJvSmuz5sMPS7K/F</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            var thas = _this;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var cadena = this.responseText.replace(/<[^>]*>/g, '');
                    //  var cadena= "|ACEVEDO|ABAD|NAYELI|16/05/08|MUJER|15|0|";
                    var parts = cadena.split("|");
                    thas.UserDataQr(parts);
                }
            });
            xhr.open("POST", "http://172.16.7.76:8283/drc/servlet/com.serverdecrypt.apwsdecrypt?wsdl");
            xhr.setRequestHeader("Content-Type", "text/xml");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "4c9d06e0-06e9-45a3-a37d-0ba56ad9d7f8");
            xhr.send(data);
        });
    };
    ListMemnuPage.prototype.UserDataQr = function (data) {
        var _this = this;
        this.user.getDataUserQr(data).then(function (resp) {
            console.log(resp[0].CVE_PERSONA);
            _this.getDataUserBeneficio(resp[0]);
            //this.compledData(resp[0]);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.startNotification(DataL.error.message);
        });
    };
    ListMemnuPage.prototype.getDataUserBeneficio = function (data) {
        var _this = this;
        this.user.getDataUserBeneficio(data).then(function (resp) {
            console.log(resp[0]);
            _this.compledData(resp[0], data);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.startNotification(DataL.error.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ListMemnuPage.prototype, "nav", void 0);
    ListMemnuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-menu',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\list-menu\list-menu.html"*/' \n\n  <ion-content style="color: #199997; ">\n\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icono" style="color: #199997;    "></ion-icon>\n        <span ion-text style="color: #199997; align-content: center ">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" (click)="logout()">\n        <ion-icon item-left name="power" style="color: #199997;    "></ion-icon>\n        <span ion-text style="color: #199997; align-content: center ">Salir</span>\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n<ion-header style="color: #199997; background: #199997">\n\n  <ion-navbar style="color: #199997; background: #199997">\n    <ion-buttons>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end (click)="logout()">\n      <button ion-button icon-only>\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf="programasSelect">\n    <img src="assets/img/logo15429967.png" />\n    <ion-card-content>\n      <ion-grid>\n        <ion-row align="center">\n          <ion-col col-6 align="center">\n\n            <ion-card align="center" style=" background: #199997 ">\n              <ion-icon name="home" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n              <div class="card-title" style=" color: #fff" align="center">Inicio</div>\n            </ion-card>\n\n          </ion-col>\n          <ion-col col-6 align="center">\n\n            <ion-card align="center" (click)="scanCode()" style=" background: #199997 ">\n              <ion-icon name="qr-scanner" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n              <!-- <img src="assets/img/descarga.png"/> -->\n              <div class="card-title" style=" color: #fff" align="center">QR</div>\n              <!-- <div class="card-subtitle" align="center">41 Listings</div> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-card align="center" style=" background: #199997 " (click)="logout()">\n              <ion-icon name="power" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n              <div class="card-title" style="color: #fff " align="center">Salir</div>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n            <ion-card align="center" style=" background: #199997  ">\n              <ion-icon name="speedometer" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n              <div class="card-title" style=" color: #fff" align="center">Estadisticas</div>\n            </ion-card> \n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="!programasSelect">\n    <img src="assets/img/logo15429967.png" />\n\n    <h2>Selecciona Programa</h2>\n\n    <div *ngFor="let itemProgrma of  programas">\n      <button ion-button block style=" background: #199997 ; color: #fff" (click)="Programa(itemProgrma)">\n        {{ itemProgrma.PROGRAMANOMBRECORTO }}\n      </button>\n    </div>\n\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\list-menu\list-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ListMemnuPage);
    return ListMemnuPage;
}());

//# sourceMappingURL=list-menu.js.map

/***/ })

});
//# sourceMappingURL=2.js.map