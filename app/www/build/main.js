webpackJsonp([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AsignaPage = /** @class */ (function () {
    function AsignaPage(loadingCtrl, toastCtrl, user, navParams, navCtrl, viewCtrl, formBuilder, camera) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.account = {};
        this.account.TARJETA = navParams.get('item');
    }
    AsignaPage_1 = AsignaPage;
    AsignaPage.prototype.ionViewDidLoad = function () {
        console.log(this.item);
    };
    // // @param string (string) : Fecha en formato YYYY-MM-DD
    // // @return (string)       : Fecha en formato DD/MM/YYYY
    //   convertDateFormat(string) {
    //   var info = string.split('-');
    //   return info[2] + '/' + info[1] + '/' + info[0];
    // }
    AsignaPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_master_list_master__["a" /* ListMasterPage */]);
    };
    AsignaPage.prototype.Buscar = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.SEGUNDO_APELLIDO && this.account.FECHA_NACIMIENTO && this.account.SEXO) {
            var info = this.account.FECHA_NACIMIENTO.split("-");
            this.account.FECHA_NACIMIENTO = info[2] + '/' + info[1] + '/' + info[0];
            console.log(this.account.FECHA_NACIMIENTO);
            if (this.account.SEXO == 'HOMBRE') {
                this.account.SEXO = 'H';
            }
            else {
                this.account.SEXO = 'M';
            }
            console.log(this.account);
            this.presentLoadingBubbles();
            this.user.buscaUsuartio(this.account).then(function (resp) {
                var array = JSON.stringify(resp);
                var objed = JSON.parse(array);
                _this.loading.dismiss();
                _this.dataUser = resp[0];
                _this.account.CVE_PERSONA = resp[0].CVE_PERSONA;
                _this.account.GXQRPERSONAIDTARJETA = resp[0].GXQRPERSONAIDTARJETA;
                console.log(resp);
            }, function (err) {
                var data = JSON.stringify(err);
                var DataL = JSON.parse(data);
                _this.loading.dismiss();
                // this.startNotification(DataL.error.message); 
                // swal('ERROR', DataL.error.message,'error');
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ATENCION', 'Beneficiario No Encontrado', 'info');
            });
        }
        else {
            // this.startNotification('Campos Vacios'); 
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ATENCION', 'Campos Vacios', 'info');
        }
    };
    AsignaPage.prototype.AsignarID = function () {
        var _this = this;
        this.presentLoadingBubbles();
        this.user.AsignarID(this.account).then(function (resp) {
            var array = JSON.stringify(resp);
            var objed = JSON.parse(array);
            _this.loading.dismiss();
            _this.dataUser = resp[0];
            console.log(resp);
            _this.scanCodeBarras();
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            // this.startNotification(DataL.error.message); 
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ATENCION', DataL.error.message, 'info');
        });
    };
    AsignaPage.prototype.no = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_master_list_master__["a" /* ListMasterPage */]);
    };
    AsignaPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    AsignaPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    AsignaPage.prototype.scanCodeBarras = function () {
        // this.barcodeScanner.scan().then(barcodeData => { 
        var _this = this;
        this.presentLoadingBubbles();
        // this.code= barcodeData.text;
        this.code = this.account.TARJETA;
        this.user.getDataUserBar(this.code).then(function (resp) {
            console.log(resp[0].CVE_PERSONA);
            _this.getDataUserBeneficio(resp[0]);
            //this.compledData(resp[0]);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            if (DataL.error.message == 'Usuario No Existe') {
                // this.startNotification('Beneficiario No Existe'); 
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ATENCION', 'Beneficiario No Encontrado', 'info');
                _this.navCtrl.push(AsignaPage_1, {
                    item: _this.code
                });
            }
        });
    };
    AsignaPage.prototype.getDataUserBeneficio = function (data) {
        var _this = this;
        this.user.getDataUserBeneficio(data).then(function (resp) {
            _this.loading.dismiss();
            console.log(resp[0]);
            _this.compledData(resp[0], data);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            // this.startNotification(DataL.error.message);
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ERRROR', DataL.error.message, 'error');
        });
    };
    AsignaPage.prototype.compledData = function (datas, data) {
        console.log(datas);
        this.navCtrl.push('UpdateInfoPage', {
            item: datas,
            items: data
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], AsignaPage.prototype, "fileInput", void 0);
    AsignaPage = AsignaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-asigna',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\asignar\asigna.html"*/'<ion-header color="dark">\n\n  <ion-navbar color="dark">\n    <ion-title>Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-card>\n\n    <h1 align="center">\n     TARJETA NO EXISTE : {{ account.TARJETA }}\n    </h1>\n<div *ngIf="!dataUser"> \n    <section class="bg-primarydss">\n  \n        <br>\n        <ion-avatar item-start style="  margin: auto;  width: 50%;   padding: 10px;   width: 150px;  height: 150px;">\n            <img src="assets/img/avatar.png">\n          </ion-avatar>\n        <br><br>\n    \n    \n      </section>\n      <h1 align="center">BUSCAR USUARIO</h1>\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>NOMBRE:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.NOMBRE" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>APELLIDO PATERNO:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.PRIMER_APELLIDO" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>APELLIDO MATERNO:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.SEGUNDO_APELLIDO" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="calendar" item-start style="color: #199997"></ion-icon> <b>FECHA NACIMIENTO:</b>\n      </ion-label>\n      <!-- <ion-input type="date" [(ngModel)]="account.FECHA_NACIMIENTO" name="name"></ion-input> -->\n      <ion-datetime displayFormat="D MM YYYY" min="1900" max="2050" [(ngModel)]="account.FECHA_NACIMIENTO"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>SEXO:</b>\n      </ion-label> \n      <ion-select [(ngModel)]="account.SEXO"> \n              <ion-option   [value]="H">HOMBRE</ion-option>\n              <ion-option   [value]="M">MUJER</ion-option> \n        </ion-select>\n    </ion-item>\n    <!-- <ion-card align="center" (click)="Buscar()" style=" background: #199997 ">\n\n      <div class="card-title" style=" color: #fff" align="center">enviar</div>\n\n    </ion-card> -->\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block style=" background: #bb0d0d ; color: #fff" (click)="cancel()">\n            Cancelar\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block style=" background: #199997 ; color: #fff" (click)="Buscar()">\n            Buscar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n\n    <div *ngIf="dataUser"> \n        <section class="bg-primarydss"> \n            <br>\n            <ion-avatar item-start style="  margin: auto;  width: 50%;   padding: 10px;   width: 150px;  height: 150px;">\n                <img src="assets/img/avatar.png">\n              </ion-avatar>\n            <br><br> \n        \n          </section>\n          <div *ngIf="account.GXQRPERSONAIDTARJETA==null ">\n              <h1 align="center">DATOS DE USUARIO </h1> \n              <ion-item> \n                  <h2>  {{ dataUser.NOMBRE }}  {{ dataUser.PRIMER_APELLIDO }} {{ dataUser.SEGUNDO_APELLIDO }}</h2>\n                  <p>{{ dataUser.FECHA_NACIMIENTO }}</p>\n                </ion-item>  \n                <ion-row>\n                    <h1 align="center" > ¿DESEA ASIGNAR TARJETA?</h1>\n                  <ion-col>\n                    <button ion-button icon-start clear small  (click)="AsignarID()" style=" background: #199997 ">\n          \n                        <div class="card-title" style=" color: #fff" align="center">SI</div>\n                    </button>\n                  </ion-col>\n                  <ion-col>\n                    <button ion-button icon-start clear small (click)="no()" style=" background: #950000 ">\n          \n                        <div class="card-title" style=" color: #fff" align="center">NO</div>\n                    </button>\n                  </ion-col>\n                 \n                </ion-row> \n          </div>\n\n          <div *ngIf="account.GXQRPERSONAIDTARJETA !=null ">\n              <h1 align="center">DATOS DE USUARIO </h1> \n              <ion-item> \n                  <h2>  {{ dataUser.NOMBRE }}  {{ dataUser.PRIMER_APELLIDO }} {{ dataUser.SEGUNDO_APELLIDO }}</h2>\n                  <p>{{ dataUser.FECHA_NACIMIENTO }}</p>\n                </ion-item>  \n                <ion-row>\n                    <h1 align="center" >TU TARJETA ES: {{ dataUser.GXQRPERSONAIDTARJETA }} </h1>\n                  \n                  <ion-col>\n                    <button ion-button icon-start clear small (click)="no()" style=" background: #950000 ">\n          \n                        <div class="card-title" style=" color: #fff" align="center">Regresar</div>\n                    </button>\n                  </ion-col>\n                 \n                </ion-row> \n          </div>\n       \n         \n    </div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\asignar\asigna.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], AsignaPage);
    return AsignaPage;
    var AsignaPage_1;
}());

//# sourceMappingURL=asigna.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asignar/asigna.module": [
		308,
		9
	],
	"../pages/beneficio/beneficio.module": [
		309,
		5
	],
	"../pages/item-create/item-create.module": [
		310,
		4
	],
	"../pages/item-detail/item-detail.module": [
		311,
		3
	],
	"../pages/list-master/list-master.module": [
		312,
		8
	],
	"../pages/list-menu/list-menu.module": [
		313,
		2
	],
	"../pages/login/login.module": [
		314,
		7
	],
	"../pages/menu/menu.module": [
		315,
		6
	],
	"../pages/tabs/tabs.module": [
		316,
		1
	],
	"../pages/updateInfo/updateInfo.module": [
		317,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    // url: string = 'http://10.1.1.131:3000';
    function Api(http) {
        this.http = http;
        // url: string = 'http://172.16.7.76:3000';
        // url: string = 'http://10.1.1.131:3000';
        this.url = 'http://148.215.3.96:3123';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.load = function () {
        return this.http.get('assets/data/data.json');
    };
    Api.prototype.post = function (endpoint, body) {
        var reqOpts = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
        };
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_qr_scanner__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;






// import { Transfer, TransferObject , FileUploadOptions} from '@ionic-native/transfer';






var LocalizationPage = /** @class */ (function () {
    function LocalizationPage(qrScanner, user, actionSheetCtrl, toastCtrl, platform, loadingCtrl, transfer, filePath, navCtrl, plt, file, fileOpener, sqlite, geolocation, camera, barcodeScanner) {
        this.qrScanner = qrScanner;
        this.user = user;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.filePath = filePath;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.sqlite = sqlite;
        this.geolocation = geolocation;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        this.letterObj = {
            to: '',
            from: '',
            text: ''
        };
        this.vasiados = [];
        this.vasiadosFotos = [];
        this.pdfObj = null;
        this.names = [];
        this.data = {};
        this.vasiado = [];
        this.vasiadosFoto = [];
        this.account = {};
        this.fotos = [];
        this.session = JSON.parse(localStorage.getItem('session'));
        this.dependencias = JSON.parse(localStorage.getItem('programasSelect'));
        this.url = "http://148.215.3.96:3123";
        var UID = Math.floor(Math.random() * 999999);
        this.miComponente = UID;
    }
    /**
     * sql start
     */
    LocalizationPage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    LocalizationPage.prototype.ionViewWillEnter = function () {
        this.getData();
        this.CREATETABLEUSERT();
        this.CREATETABLEDOCS();
        // this.select();
        this.selectfotos();
        this.getlocalizacion();
    };
    LocalizationPage.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS testtable(id INTEGER, name TEXT)', _this.data)
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    LocalizationPage.prototype.CREATETABLEUSERT = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT,ap1 TEXT, ap2 TEXT, fecha TEXT ,folio TEXT,usuario  INTEGER,programa INTEGER,latitude TEXT, longitude TEXT,estado_civil TEXT, estudio TEXT)', _this.data)
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    LocalizationPage.prototype.CREATETABLEDOCS = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS docs(id INTEGER PRIMARY KEY AUTOINCREMENT,  folio TEXT,ife TEXT ,ife2 TEXT,domicilio TEXT,curp TEXT,fur TEXT,ifename TEXT ,ife2name TEXT,domicilioname TEXT,curpname TEXT,furname TEXT)', _this.data)
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    LocalizationPage.prototype.guardar = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO && this.ine1 && this.ine2 && this.domicilio && this.curp && this.account.estado_civil && this.account.estudio) {
            this.sqlite.create({
                name: 'ionicdb.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql('INSERT INTO user ( nombre ,ap1 , ap2 , fecha,folio,usuario,programa,latitude,longitude,estado_civil , estudio  ) values (?,?,?,?,?,?,?,?,?,?,?)', [_this.account.NOMBRE, _this.account.PRIMER_APELLIDO, _this.account.SEGUNDO_APELLIDO, _this.account.FECHA_NACIMIENTO, _this.miComponente, _this.session.GX_USUARIOSID, _this.dependencias.PROGRAMAID, _this.latitude, _this.longitude, _this.account.estado_civil, _this.account.estudio])
                    .then(function (res) {
                    console.log(res);
                    _this.insert_res = JSON.stringify(res);
                })
                    .catch(function (e) {
                    console.log(e);
                });
                db.executeSql('INSERT INTO docs ( folio ,ife  ,ife2 ,domicilio ,curp ,fur ,ifename  ,ife2name ,domicilioname ,curpname ,furname ) values (?,?,?,?,?,?,?,?,?,?,?)', [_this.miComponente, _this.ine1, _this.ine2, _this.domicilio, _this.curp, _this.fur, _this.ine1name, _this.ine2name, _this.domicilioname, _this.curpname, _this.furname]).then(function (res) {
                    __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('success', 'REGISTRO EXITOSO', 'success');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__list_master_list_master__["a" /* ListMasterPage */]);
                });
            }).catch(function (e) {
                console.log(e);
                // this.toast.show(e, '5000', 'center').subscribe(
                //   toast => {
                //     console.log(toast);
                //   }
                // );
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', 'LLENA TODOS LOS CAMPOS Y FOTOS ', 'error');
        }
    };
    LocalizationPage.prototype.subir = function () {
    };
    LocalizationPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    LocalizationPage.prototype.scanCodeBarras = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            alert('Barcode data' + barcodeData);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    LocalizationPage.prototype.select = function () {
        var _this = this;
        this.presentLoadingBubbles();
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM user,docs WHERE user.folio= docs.folio ', _this.data)
                .then(function (res) {
                _this.select_res = JSON.stringify(res);
                _this.names = [];
                for (var i = 0; i < res.rows.length; i++) {
                    // alert(JSON.stringify(res.rows.item(i)))
                    _this.names.push(res.rows.item(i));
                    _this.vasiado.push("INTO PREREGISTRO (PREPERSONAID, CVE_PERIODO, ESTATUS, PROGRAMAID, PRENOMBRE, PREPRIMERAPELLIDO, PRESEGUNDOAPELLIDO, PREFECNACIMIENTO, PREDOCINEADVERSO, PREDOCINEREVERSO, PREDOCCURP, PREDOCCOMPROBANTE, PREDOCFUR ,PRELONGITUD,PRELATITUD,PREREGEDOCIVIL,PREREGGRADOESTUDIOS) VALUES ('" + res.rows.item(i).id + "','1','15', '" + _this.dependencias.PROGRAMAID + "', '" + res.rows.item(i).nombre + "', '" + res.rows.item(i).ap1 + "', '" + res.rows.item(i).ap2 + "', TO_DATE('" + res.rows.item(i).fecha + "', 'YYYY-MM-DD HH24:MI:SS'), '" + _this.url + "/files/" + res.rows.item(i).ifename + "', '" + _this.url + "/files/" + res.rows.item(i).ife2name + "', '" + _this.url + "/files/" + res.rows.item(i).curpname + "', '" + _this.url + "/files/" + res.rows.item(i).domicilioname + "', '" + _this.url + "/files/" + res.rows.item(i).furname + "','" + res.rows.item(i).longitude + "','" + res.rows.item(i).latitude + "'," + res.rows.item(i).estado_civil + "," + res.rows.item(i).estudio + ")");
                    if (res.rows.item(i).ife && res.rows.item(i).ifename) {
                        var fileTransfer = _this.transfer.create();
                        var options1 = { fileKey: 'file', fileName: res.rows.item(i).ifename, headers: {}
                        };
                        fileTransfer.upload(res.rows.item(i).ife, _this.url + '/upload', options1)
                            .then(function (data) {
                            //  alert("success");
                        }, function (err) {
                            //  alert("error"+JSON.stringify(err));
                        });
                    }
                    if (res.rows.item(i).ife2 && res.rows.item(i).ife2name) {
                        var fileTransfer = _this.transfer.create();
                        var options1 = { fileKey: 'file', fileName: res.rows.item(i).ife2name, headers: {}
                        };
                        fileTransfer.upload(res.rows.item(i).ife2, _this.url + '/upload', options1)
                            .then(function (data) {
                            //  alert("success");
                        }, function (err) {
                            //  alert("error"+JSON.stringify(err));
                        });
                    }
                    if (res.rows.item(i).curp && res.rows.item(i).curpname) {
                        var fileTransfer = _this.transfer.create();
                        var options1 = { fileKey: 'file', fileName: res.rows.item(i).curpname, headers: {}
                        };
                        fileTransfer.upload(res.rows.item(i).curp, _this.url + '/upload', options1)
                            .then(function (data) {
                            //  alert("success");
                        }, function (err) {
                            //  alert("error"+JSON.stringify(err));
                        });
                    }
                    if (res.rows.item(i).domicilio && res.rows.item(i).domicilioname) {
                        var fileTransfer = _this.transfer.create();
                        var options1 = { fileKey: 'file', fileName: res.rows.item(i).domicilioname, headers: {}
                        };
                        fileTransfer.upload(res.rows.item(i).domicilio, _this.url + '/upload', options1)
                            .then(function (data) {
                            //  alert("success");
                        }, function (err) {
                            //  alert("error"+JSON.stringify(err));
                        });
                    }
                    if (res.rows.item(i).fur && res.rows.item(i).furname) {
                        var fileTransfer = _this.transfer.create();
                        var options1 = { fileKey: 'file', fileName: res.rows.item(i).furname, headers: {}
                        };
                        fileTransfer.upload(res.rows.item(i).fur, _this.url + '/upload', options1)
                            .then(function (data) {
                            //  alert("success");
                        }, function (err) {
                            //  alert("error"+JSON.stringify(err));
                        });
                    }
                }
                // var into =this.vasiado.join(" ")
                var cadena = _this.vasiado.toString();
                console.log(cadena);
                var letrasCadena = cadena.split(",INTO");
                console.log(letrasCadena);
                for (var _i = 0, letrasCadena_1 = letrasCadena; _i < letrasCadena_1.length; _i++) {
                    var d = letrasCadena_1[_i];
                    console.log(letrasCadena);
                    var cad = d;
                    if (!letrasCadena[0]) {
                        _this.vasiados.push(cad);
                    }
                    else {
                        _this.vasiados.push("INTO " + cad);
                    }
                }
                var cadena = _this.vasiadosFoto.toString();
                var letrasCadena = cadena.split(",INTO");
                console.log(letrasCadena);
                for (var _a = 0, letrasCadena_2 = letrasCadena; _a < letrasCadena_2.length; _a++) {
                    var d = letrasCadena_2[_a];
                    console.log(letrasCadena);
                    var cad = d;
                    if (!letrasCadena[0]) {
                        _this.vasiadosFotos.push(cad);
                    }
                    else {
                        _this.vasiadosFotos.push("INTO " + cad);
                    }
                }
                _this.names_value = '' + _this.names;
                var into = _this.vasiados.join(" ");
                // var into1 = this.vasiadosFotos.join(" ");
                _this.user.vasiado(into).then(function (res) {
                    _this.removeData();
                    _this.loading.dismiss();
                    __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('correcto', ' datos sincronisados', 'success');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__list_master_list_master__["a" /* ListMasterPage */]);
                }, function (err) {
                    _this.loading.dismiss();
                    __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', 'datos no sincronizados', 'error');
                });
            })
                .catch(function (e) {
                console.log(e);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    LocalizationPage.prototype.selectfotos = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM docs', _this.data)
                .then(function (res) {
                _this.select_res = JSON.stringify(res);
                _this.fotos = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.fotos.push(res.rows.item(i));
                }
                // this.names_value = ''+this.names;
            })
                .catch(function (e) {
                console.log(e);
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    LocalizationPage.prototype.removeData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DROP TABLE IF EXISTS user', _this.data)
                .then(function (res) {
                console.log('Executed SQL');
                // this.toast.show('deleted', '5000', 'center').subscribe(
                //   toast => {
                //     this.navCtrl.popToRoot();
                //   }
                // );        
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('DROP TABLE IF EXISTS docs', _this.data)
                .then(function (res) {
                console.log('Executed SQL');
                // this.toast.show('deleted', '5000', 'center').subscribe(
                //   toast => {
                //     this.navCtrl.popToRoot();
                //   }
                // );        
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    /**
     * sql en
     */
    LocalizationPage.prototype.createPdf = function () {
        var _this = this;
        var docDefinition = {
            content: [
                { text: 'REMINDER', style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'From', style: 'subheader' },
                { text: this.letterObj.from },
                { text: 'To', style: 'subheader' },
                this.letterObj.to,
                { text: this.letterObj.text, style: 'story', margin: [0, 20, 0, 20] },
                {
                    ul: [
                        'Bacon',
                        'Rips',
                        'BBQ',
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        // alert(JSON.stringify(this.pdfObj));
        this.pdfObj.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });
            // alert( JSON.stringify(blob))
            // Save the PDF to the data Directory of our App
            _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                // alert(fileEntry)
                // Open the PDf with the correct OS tools
                _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
            });
        });
    };
    LocalizationPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            // alert('cordova')
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // alert( JSON.stringify(blob))
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // alert(fileEntry)
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // alert('no cordova')
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    LocalizationPage.prototype.scan = function () {
        this.barcodeScanner.scan().then(function (barcodeData) {
            // alert(barcodeData.text);
        });
    };
    LocalizationPage.prototype.takePhoto = function () {
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: 1,
            allowEdit: true,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        // this.camera.getPicture(options).then((imagePath) => {
        //   // Special handling for Android library
        //   if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        //     this.filePath.resolveNativePath(imagePath)
        //       .then(filePath => {
        //         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
        //         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        //       });
        //   } else {
        //     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        //     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        //   }
        // }, (err) => {
        //   this.presentToast('Error while selecting image.');
        // });
        //   this.camera.getPicture( options )
        //   .then(imageData => {
        // 	this.base64Image = `data:image/jpeg;base64,${imageData}`;
        // 	// alert(this.base64Image)
        //   })
        // .catch(error =>{
        //   console.error( error );
        // });
        // const options : CameraOptions = {
        //   quality: 50, // picture quality
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(options) .then((imageData) => {
        //     this.base64Image = "data:image/jpeg;base64," + imageData;
        //     this.photos.push(this.base64Image);
        //     this.photos.reverse();
        //   }, (err) => {
        //     console.log(err);
        //   });
    };
    LocalizationPage.prototype.getlocalizacion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            // alert(this.latitude + "/////" + this.longitude);
        }, function (error) {
            console.log('error', error);
        });
    };
    LocalizationPage.prototype.ine1s = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO) {
            var options = {
                // quality: 80,
                // destinationType: this.camera.DestinationType.FILE_URI,
                // encodingType: this.camera.EncodingType.JPEG,
                // sourceType: 1,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            //  alert(options.encodingType)
            this.camera.getPicture(options).then(function (imagePath) {
                var d = new Date(), n = d.getTime(), newFileName = n + "ine1.jpg";
                _this.file.copyFile(imagePath.substr(0, imagePath.lastIndexOf('/') + 1), imagePath.substr(imagePath.lastIndexOf('/') + 1), imagePath.substr(0, imagePath.lastIndexOf('/') + 1), newFileName).then(function (success) {
                    _this.ine1 = imagePath.substr(0, imagePath.lastIndexOf('/') + 1) + newFileName;
                    _this.ine1name = newFileName;
                    // this.ine1name=`data:image/jpeg;base64,${imagePath}`;
                }, function (error) {
                    _this.presentToast('Error while storing file.');
                });
            }, function (err) {
                _this.presentToast('Error while selecting image.');
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', ' Campos Requeridos', 'error');
        }
        // const options : CameraOptions = {
        //   quality: 50, // picture quality
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE
        // }
        // this.camera.getPicture(options) .then((imageData) => {
        //     this.base64Image = "data:image/jpeg;base64," + imageData;
        //     this.photos.push(this.base64Image);
        //     this.photos.reverse();
        //   }, (err) => {
        //     console.log(err);
        //   });
    };
    LocalizationPage.prototype.ine2s = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO) {
            var options = {
                // quality: 80,
                // destinationType: this.camera.DestinationType.FILE_URI,
                // encodingType: this.camera.EncodingType.JPEG,
                // sourceType: 1,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imagePath) {
                var d = new Date(), n = d.getTime(), newFileName = n + "ine2.jpg";
                _this.file.copyFile(imagePath.substr(0, imagePath.lastIndexOf('/') + 1), imagePath.substr(imagePath.lastIndexOf('/') + 1), imagePath.substr(0, imagePath.lastIndexOf('/') + 1), newFileName).then(function (success) {
                    _this.ine2 = imagePath.substr(0, imagePath.lastIndexOf('/') + 1) + newFileName;
                    _this.ine2name = newFileName;
                }, function (error) {
                    _this.presentToast('Error while storing file.');
                });
            }, function (err) {
                _this.presentToast('Error while selecting image.');
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', ' Campos Requeridos', 'error');
        }
    };
    LocalizationPage.prototype.domicilios = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO) {
            var options = {
                // quality: 80,
                // destinationType: this.camera.DestinationType.FILE_URI,
                // encodingType: this.camera.EncodingType.JPEG,
                // sourceType: 1,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imagePath) {
                var d = new Date(), n = d.getTime(), newFileName = n + "domicilio.jpg";
                _this.file.copyFile(imagePath.substr(0, imagePath.lastIndexOf('/') + 1), imagePath.substr(imagePath.lastIndexOf('/') + 1), imagePath.substr(0, imagePath.lastIndexOf('/') + 1), newFileName).then(function (success) {
                    _this.domicilio = imagePath.substr(0, imagePath.lastIndexOf('/') + 1) + newFileName;
                    _this.domicilioname = newFileName;
                }, function (error) {
                    _this.presentToast('Error while storing file.');
                });
            }, function (err) {
                _this.presentToast('Error while selecting image.');
            });
            //   this.camera.getPicture( options )
            //   .then(imageData => {
            //   this.domicilio =imageData;
            //   //  `data:image/jpeg;base64,${imageData}`;
            // 	// alert(this.base64Image)
            //   })
            // .catch(error =>{
            //   console.error( error );
            // });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', ' Campos Requeridos', 'error');
        }
    };
    LocalizationPage.prototype.curps = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO) {
            var options = {
                // quality: 80,
                // destinationType: this.camera.DestinationType.FILE_URI,
                // encodingType: this.camera.EncodingType.JPEG,
                // sourceType: 1,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imagePath) {
                var d = new Date(), n = d.getTime(), newFileName = n + "curp.jpg";
                _this.file.copyFile(imagePath.substr(0, imagePath.lastIndexOf('/') + 1), imagePath.substr(imagePath.lastIndexOf('/') + 1), imagePath.substr(0, imagePath.lastIndexOf('/') + 1), newFileName).then(function (success) {
                    _this.curp = imagePath.substr(0, imagePath.lastIndexOf('/') + 1) + newFileName;
                    _this.curpname = newFileName;
                }, function (error) {
                    _this.presentToast('Error while storing file.');
                });
            }, function (err) {
                _this.presentToast('Error while selecting image.');
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', ' Campos Requeridos', 'error');
        }
    };
    LocalizationPage.prototype.furs = function () {
        var _this = this;
        if (this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.FECHA_NACIMIENTO) {
            var options = {
                // quality: 80,
                // destinationType: this.camera.DestinationType.FILE_URI,
                // encodingType: this.camera.EncodingType.JPEG,
                // sourceType: 1,
                allowEdit: true,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imagePath) {
                var d = new Date(), n = d.getTime(), newFileName = n + "fur.jpg";
                _this.file.copyFile(imagePath.substr(0, imagePath.lastIndexOf('/') + 1), imagePath.substr(imagePath.lastIndexOf('/') + 1), imagePath.substr(0, imagePath.lastIndexOf('/') + 1), newFileName).then(function (success) {
                    _this.fur = imagePath.substr(0, imagePath.lastIndexOf('/') + 1) + newFileName;
                    _this.furname = newFileName;
                }, function (error) {
                    _this.presentToast('Error while storing file.');
                });
            }, function (err) {
                _this.presentToast('Error while selecting image.');
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('ERROR', ' Campos Requeridos', 'error');
        }
    };
    // public presentActionSheet() {
    //   let actionSheet = this.actionSheetCtrl.create({
    //     title: 'Select Image Source',
    //     buttons: [
    //       {
    //         text: 'Load from Library',
    //         handler: () => {
    //           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //         }
    //       },
    //       {
    //         text: 'Use Camera',
    //         handler: () => {
    //           this.takePicture(this.camera.PictureSourceType.CAMERA);
    //         }
    //       },
    //       {
    //         text: 'Cancel',
    //         role: 'cancel'
    //       }
    //     ]
    //   });
    //   actionSheet.present();
    // }
    // public takePicture(sourceType) {
    //   // Create options for the Camera Dialog
    //   var options = {
    //     quality: 100,
    //     sourceType: sourceType,
    //     saveToPhotoAlbum: false,
    //     correctOrientation: true
    //   };
    //   // Get the data of an image
    //   this.camera.getPicture(options).then((imagePath) => {  
    //       var d = new Date(),
    //       n = d.getTime(),
    //       newFileName =   n + "ssss.jpg"; 
    //       var currentName = imagePath.substr( imagePath.lastIndexOf('/') + 1);
    //       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //       this.file.copyFile(correctPath, currentName, cordova.file.dataDirectory, newFileName).then(success => { 
    //         this.lastImage = newFileName;
    //       }, error => {
    //         this.presentToast('Error while storing file.');
    //       });
    //   }, (err) => {
    //     this.presentToast('Error while selecting image.');
    //   });
    // }
    // private createFileName() {
    //   var d = new Date(),
    //   n = d.getTime(),
    //   newFileName =   n + "ssss.jpg";
    //   return newFileName;
    // }
    // // Copy the image to a local folder
    // private copyFileToLocalDir(namePath, currentName, newFileName) {
    //   this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    //     this.lastImage = newFileName;
    //     // alert(namePath +"   "+ currentName+"   "+cordova.file.dataDirectory+"    "+ newFileName)
    //   }, error => {
    //     this.presentToast('Error while storing file.');
    //   });
    // }
    LocalizationPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LocalizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-localization',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\localization\localization.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     PRE-REGISTRO\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n    <!-- <h2 class="centerIMG">  SESSION\n        {{ session.GX_USUARIOSID }}  \n  {{ dependencias.PROGRAMAID }} </h2> -->\n\n\n<!-- CODIGO qr -->\n<button ion-button color="danger" (click)="barcodeScanner()" *ngIf="fotos">OBTENER DATOS DE QR</button>\n\n<!-- end codigo qr -->\n    \n          \n\n       \n      <br><br>\n  <h2 class="centerIMG">  componente: {{miComponente}}</h2>\n\n\n  <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>NOMBRE:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.NOMBRE" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>APELLIDO PATERNO:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.PRIMER_APELLIDO" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="contact" item-start style="color: #199997"></ion-icon> <b>APELLIDO MATERNO:</b>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="account.SEGUNDO_APELLIDO" name="name"></ion-input>\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-label floating>\n        <ion-icon name="calendar" item-start style="color: #199997"></ion-icon> <b>FECHA NACIMIENTO:</b>\n      </ion-label>\n      <ion-input type="date" [(ngModel)]="account.FECHA_NACIMIENTO" name="name"></ion-input> \n        <ion-datetime displayFormat="D MM YYYY" min="1900" max="2050" [(ngModel)]="account.FECHA_NACIMIENTO"></ion-datetime>\n    </ion-item> \n\n    <ion-item>\n       <ion-label  > \n      <b> ESTADO CIVIL:</b>\n    </ion-label>\n    <ion-select [(ngModel)]="account.estado_civil">\n \n          <ion-option [value]="1"  > SOLTERO (A)</ion-option>\n          <ion-option [value]="2"  > CASADO (A)</ion-option>\n          <ion-option [value]="3"  >VIUDO (A) </ion-option>\n          <ion-option [value]="4"  >DIVORCIADO (A) </ion-option>\n          <ion-option [value]="5"  > AMASIATO (UNION LIBRE)</ion-option>\n          <ion-option [value]="6"  >SEPARADO (A) </ion-option>\n          <ion-option [value]="7"  > CONCUBINATO</ion-option>\n          <ion-option [value]="8"  >OTRO </ion-option>\n          <ion-option [value]="0"  >NINGUNO </ion-option>\n      \n\n    </ion-select>\n  </ion-item> \n  <ion-item>\n      <ion-label  > \n     <b> GRADO DE ESTUDIOS:</b>\n   </ion-label>\n   <ion-select [(ngModel)]="account.estudio">\n\n         <ion-option [value]="0"  >  SIN ESPECIFICAR</ion-option>\n         <ion-option [value]="5"  >NINGUNO </ion-option>\n         <ion-option [value]="9"  > PREESCOLAR</ion-option>  \n         <ion-option [value]="1"  > PRIMARIA</ion-option>\n         <ion-option [value]="2"  >SECUNDARIA </ion-option>\n         <ion-option [value]="3"  >BACHILLERATO, PREPARATORIA O EQUIVALENTE </ion-option>\n         <ion-option [value]="4"  >LICENCIATURA O EQUIVALENTE</ion-option> \n         <ion-option [value]="6"  >TECNICO </ion-option>\n         <ion-option [value]="7"  > MAESTRIA</ion-option> \n         <ion-option [value]="8"  > DOCTORADO</ion-option>  \n         <ion-option [value]="10"  > EDUCACION ESPECIAL</ion-option>   \n \n   </ion-select>\n </ion-item> \n \n    <!-- <button ion-button full (click)="scan()">scanner</button> -->\n\n\n\n  <ion-grid>\n    <ion-row  >\n    \n\n         \n\n      \n      <ion-col (click)="ine1s()" *ngIf="!ine1" >\n        <div><img src="assets/img/ine1.jpg" width="60px" height="80px"   class="centerIMG" ></div>\n        <span class="centerIMG">COPIA de INE/IFE</span>\n      </ion-col>\n      <ion-col   *ngIf="ine1">\n        <div><img  [src]="ine1"  width="60px" height="80px" class="centerIMG" ></div> \n        <span class="centerIMG">COPIA INE/IFE agregado   </span>\n\n      </ion-col>\n      <ion-col (click)="ine2s()" *ngIf="!ine2">\n        <div><img src="assets/img/ine2.jpg"  width="60px" height="80px" class="centerIMG"></div> \n        <span class="centerIMG">COPIA INE/IFE Reverso</span>\n\n      </ion-col>\n      <ion-col  *ngIf="ine2">\n        <div><img  [src]="ine2" width="60px" height="80px" class="centerIMG" ></div> \n        <span class="centerIMG">COPIA INE/IFE Reverso agregado</span>\n\n      </ion-col>\n    </ion-row> \n  </ion-grid> \n\n  <ion-grid>\n      <ion-row  >\n        <ion-col (click)="domicilios()" *ngIf="!domicilio" >\n          <div><img src="assets/img/images.jpg" width="60px" height="80px"   class="centerIMG" ></div>\n          <span class="centerIMG">DOMICILIO</span>\n        </ion-col>\n        <ion-col   *ngIf="domicilio">\n          <div><img  [src]="domicilio"  width="60px" height="80px" class="centerIMG" ></div> \n          \n          <span class="centerIMG">DOMICILIO agregado</span>\n  \n        </ion-col>\n        <ion-col (click)="curps()" *ngIf="!curp">\n          <div><img src="assets/img/descarga.jpg"  width="60px" height="80px" class="centerIMG"></div> \n          <span class="centerIMG">CUPR</span>\n  \n        </ion-col>\n        <ion-col  *ngIf="curp">\n          <div><img  [src]="curp" width="60px" height="80px" class="centerIMG" ></div> \n          <span class="centerIMG">CUPR Reverso agregado</span>\n  \n        </ion-col>\n      </ion-row> \n    </ion-grid> \n\n    <ion-grid>\n        <ion-row  >\n          <ion-col (click)="furs()" *ngIf="!fur" >\n            <div><img src="assets/img/images.jpg" width="60px" height="80px"   class="centerIMG" ></div>\n            <span class="centerIMG">FUR</span>\n          </ion-col>\n          <ion-col   *ngIf="fur">\n            <div><img  [src]="fur"  width="60px" height="80px" class="centerIMG" ></div> \n            \n            <span class="centerIMG">FUR agregado</span>\n    \n          </ion-col>\n         \n        </ion-row> \n      </ion-grid> \n  <button ion-button color="danger" (click)="guardar()">guardar</button>\n  <button ion-button color="danger" (click)="select()" *ngIf="fotos">subir</button>\n\n   \n \n\n<!-- \n     <ion-grid>\n        <ion-row  >\n          <ion-col   >\n            <div>Nombres</div>\n           \n          </ion-col>\n          <ion-col   >\n              <div>A-Paterno</div>\n          </ion-col>\n          <ion-col > \n              <div>A-Materno</div>\n\n          </ion-col>\n          <ion-col >\n              <div>Fecha</div> \n          </ion-col>\n          <ion-col >\n              <div>Folio</div> \n          </ion-col>\n          <ion-col >\n            <div>INE</div> \n        </ion-col>\n        <ion-col >\n            <div>user</div> \n        </ion-col>\n        <ion-col >\n            <div>PROGRAMAID</div> \n        </ion-col>\n        </ion-row> \n      \n    <div *ngFor="let sql of names">  \n     {{sql}}\n      <ion-row  >\n          <ion-col   >\n            <div>  {{sql.nombre}} </div>\n           \n          </ion-col>\n          <ion-col   >\n              <div>  {{sql.ap1}} </div>\n          </ion-col>\n          <ion-col > \n              <div>  {{sql.ap2}} </div>\n\n          </ion-col>\n          <ion-col >\n              <div>  {{sql.fecha}} </div> \n          </ion-col>\n         \n          <ion-col >\n              <div>  {{sql.folio}} </div> \n          </ion-col> \n          <ion-col >\n              <div>  {{sql.usuario}} </div> \n          </ion-col> \n          <ion-col >\n              <div>  {{sql.programa}} </div> \n          </ion-col> \n          <ion-col >\n              <div>  {{sql. folio}} ,{{sql.ife}}  ,{{sql.ife2}} ,{{sql.domicilio}} ,{{sql.curp}} ,{{sql.fur}} ,{{sql.ifename}}  ,{{sql.ife2name}} ,{{sql.domicilioname}} ,{{sql.curpname}} , {{sql.furname}} </div> \n          </ion-col> \n         \n  \n          <ion-col >\n\n\n             \n            <div>   \n               <img src="{{sql.ife}}" width="60px" height="80px"   class="centerIMG" > \n\n              </div> \n        </ion-col>\n        </ion-row> \n\n    </div>\n \n\n  </ion-grid>  -->\n\n<!-- \n  <ion-grid>\n      <ion-row  >\n        <ion-col   >\n          <div>url</div>\n         \n        </ion-col>\n        <ion-col   >\n            <div>folio</div>\n        </ion-col>\n       \n      </ion-row>  \n    \n \n\n  <div *ngFor="let f of fotos">  \n    \n\n\n      <ion-row  >\n          <ion-col   >\n            <div>  {{f.url}}  \n              <img src="f.url"> \n            </div>\n            <div><img  [src]="f.url"  width="60px" height="80px" class="centerIMG" ></div> \n           \n          </ion-col>\n          <ion-col   >\n              <div>  {{f.folio}} </div>\n          </ion-col>\n\n         \n         \n           \n           \n        </ion-row> \n\n    </div>\n\n</ion-grid> -->\n\n    <!-- <button ion-button (click)="saveData()">Insert</button>\n    <button ion-button (click)="findNames()">Select Names</button>\n    <button ion-button color="danger" (click)="removeData()">Drop Table</button> -->\n    <!-- <h1 *ngIf="names">Nomes:</h1>\n    <ng-template *ngFor="let item of names">\n      <p>{{ item }}</p>\n    </ng-template> -->\n  \n    <!-- <h2>Resposta do insert:</h2>\n    <p>{{ insert_res }}</p>\n  \n    <h2>Resposta do select:</h2>\n    <p>{{ select_res }}</p>\n  \n    <h2>Valor da variável nomes:</h2>\n    <p>{{ names_value }}</p>-->\n \n     <!-- <ion-item>\n      <ion-label stacked>From</ion-label>\n      <ion-input [(ngModel)]="letterObj.from"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>To</ion-label>\n      <ion-input [(ngModel)]="letterObj.to"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Text</ion-label>\n      <ion-textarea [(ngModel)]="letterObj.text" rows="10"></ion-textarea>\n    </ion-item>\n   \n    <button ion-button full (click)="createPdf()">Create PDF</button>\n    <button ion-button full (click)="downloadPdf()" color="secondary" [disabled]="!pdfObj">Download PDF</button>  -->\n   \n  <!-- <button ion-button full (click)="scan()">scanner</button>\n  <button ion-button full (click)="getlocalizacion()">getlocalizacion</button>\n\n  <button ion-button full (click)="createDatabase()">createDatabase</button>\n  <button ion-button full (click)="createTable()">createTable</button>\n  <button ion-button full (click)="getAll()">getAll</button>\n  <button ion-button full (click)="create()">create</button>\n  \n  \n  \n   \n   \n  <button ion-button full (click)="takePhoto()" >\n    \n    <ion-icon name="camera"></ion-icon>Take Photo\n    </button> --> \n  \n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-6 >\n          <ion-card class="block">\n          <ion-icon  name="trash" class="deleteIcon"></ion-icon>\n          <img src="someimage.png" />\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n\n    <!-- <ion-col col-6  >\n      <ion-card class="block">\n        <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n        <img [src]="base64Image" *ngIf="base64Image" />\n        \n      </ion-card>\n</ion-col> -->\n\n\n\n \n \n <!-- <div *ngIf="lastImage">\n    <img src="{{pathForImage(lastImage)}}" style="width: 100%">\n </div> -->\n   \n    \n  </ion-content>\n   \n  <!-- <ion-footer>\n    <ion-toolbar color="primary">\n      <ion-buttons>\n        <button ion-button icon-left (click)="presentActionSheet()">\n          <ion-icon name="camera"></ion-icon>Select Image\n        </button>\n        <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n          <ion-icon name="cloud-upload"></ion-icon>Upload\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer> -->'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\localization\localization.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_13__providers__["e" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], LocalizationPage);
    return LocalizationPage;
}());

//# sourceMappingURL=localization.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'ContentPage';
        this.appMenuItems = [
            { title: 'Inicio', component: 'TutorialPage', icono: 'home' },
            { title: 'Scanner', component: 'WelcomePage', icono: 'qr-scanner' },
            { title: 'Personas', component: 'TabsPage', icono: 'people' },
            { title: 'Salir', component: 'TabsPage', icono: 'people' }
        ];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\menu\menu.html"*/'<ion-menu side="left" id="loggedOutMenu" [content]="content">\n  <!-- <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="../assets/img/avatar.jpeg">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              João Firmino\n            </h2>\n            <span ion-text color="light">Customer</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose disabled>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content color="primary">\n\n     \n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n '/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* unused harmony export MainPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab1Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'LoginPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(239);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mocks_providers_items__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_asignar_asigna__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_localization_localization__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_transfer__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_path__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { Camera } from '@ionic-native/camera';



// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';









// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
// import { Geolocation } from '@ionic-native/geolocation';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }



function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_9__providers__["d" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}


// import { BarcodeScanner } from '@ionic-native/barcode-scanner';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__["a" /* ListMasterPage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */], __WEBPACK_IMPORTED_MODULE_12__pages_asignar_asigna__["a" /* AsignaPage */], __WEBPACK_IMPORTED_MODULE_15__pages_localization_localization__["a" /* LocalizationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                // TranslateModule.forRoot({
                //   loader: {
                //     provide: TranslateLoader,
                //     useFactory: (createTranslateLoader),
                //     deps: [HttpClient]
                //   }
                // }),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asignar/asigna.module#UpdateInfoPageModule', name: 'AsignaPage', segment: 'asigna', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficio/beneficio.module#BeneficioPageModule', name: 'BeneficioPage', segment: 'beneficio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-menu/list-menu.module#ListMasterPageModule', name: 'ListMemnuPage', segment: 'list-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updateInfo/updateInfo.module#UpdateInfoPageModule', name: 'UpdateInfoPage', segment: 'updateInfo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_11__pages_list_master_list_master__["a" /* ListMasterPage */], __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */], __WEBPACK_IMPORTED_MODULE_12__pages_asignar_asigna__["a" /* AsignaPage */], __WEBPACK_IMPORTED_MODULE_15__pages_localization_localization__["a" /* LocalizationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                // BackgroundGeolocation,
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_9__providers__["b" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_8__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_9__providers__["e" /* User */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__providers__["d" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                // Camera,
                // Geolocation,
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_conference_data__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__user_conference_data__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(126);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
        this.session = JSON.parse(localStorage.getItem('session'));
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var postData = {
            "username": accountInfo.email,
            "password": accountInfo.password
        };
        var seq = this.api.post('Auth', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.entregar = function (data) {
        var postData = {
            "data": data
        };
        var seq = this.api.post('Entregar', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.load = function () {
        var seq = this.api.load().map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getDependencia = function (id) {
        var postData = {
            "dependenciaID": id.DEPENDENCIAID
        };
        var seq = this.api.post('Dependencia', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getEntregas = function (persona, programa) {
        console.log(programa.CVE_PERSONA_PP);
        var postData = {
            "perona": programa.CVE_PERSONA_PP,
            "folio": programa.PROGRAMAID,
            "apoyo": "110"
        };
        var seq = this.api.post('getEntregas', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.geProgramas = function (id) {
        var postData = {
            "dependenciaID": id.GX_USUARIOSID
        };
        var seq = this.api.post('DependenciaProgramas', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getDataUserQr = function (part) {
        var postData = {
            "primerApellido": part[1],
            "segundoApellido": part[2],
            "nombre": part[3],
            "fechaNacimiento": part[4],
            "EntidadNacimiento": part[6]
        };
        console.log(postData);
        var seq = this.api.post('getDataUserQr', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.AsignarID = function (DATA) {
        console.log(DATA);
        var postData = {
            "CVE_PERSONA": DATA.CVE_PERSONA,
            "TARJETA": DATA.TARJETA,
        };
        var seq = this.api.post('AsignaID', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.buscaUsuartio = function (DATA) {
        var postData = {
            "NOMBRE": DATA.NOMBRE,
            "PRIMER_APELLIDO": DATA.PRIMER_APELLIDO,
            "SEGUNDO_APELLIDO": DATA.SEGUNDO_APELLIDO,
            "FECHA_NACIMIENTO": DATA.FECHA_NACIMIENTO,
            "SEXO": DATA.SEXO
        };
        var seq = this.api.post('BuscarUsuarioA', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getDataUserBar = function (id) {
        var postData = {
            "FOLIO": id
        };
        // let postData = {
        //   "FOLIO": "08547968"
        // }
        var seq = this.api.post('ScannerCodeBar', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getDataUserBeneficio = function (folio) {
        var postData = {
            "folioUser": folio.CVE_PERSONA,
        };
        var seq = this.api.post('getDataUserBeneficio', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.GetEntidad = function () {
        var postData = {};
        var seq = this.api.post('GetEntidades', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.GetLocalidade = function () {
        var postData = {};
        var seq = this.api.post('GetLocalidades', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.GetMunicipio = function () {
        var postData = {};
        var seq = this.api.post('GetMunicipios', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.GetRede = function () {
        var postData = {};
        var seq = this.api.post('GetRedes', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.updateData = function (data) {
        var postData = {
            "CALLE": data.CALLE,
            "NUM_EXT": data.NUM_EXT,
            "NUM_INT": data.NUM_INT,
            "ENTRE_CALLE": data.ENTRE_CALLE,
            "Y_CALLE": data.Y_CALLE,
            "OTRA_REFERENCIA": data.OTRA_REFERENCIA,
            "COLONIA": data.COLONIA,
            "LOCALIDAD": data.LOCALIDAD,
            "CODIGO_POSTAL": data.CODIGO_POSTAL,
            "TELEFONO": data.TELEFONO,
            "CELULAR": data.CELULAR,
            "E_MAIL": data.E_MAIL,
            "CVE_PERSONA_PP": data.CVE_PERSONA_PP,
            "CVE_LOCALIDAD": data.CVE_LOCALIDAD,
            "CVE_MUNICIPIO": data.CVE_MUNICIPIO,
            "CVE_ENTIDAD_FEDERATIVA": data.CVE_ENTIDAD_FEDERATIVA,
            "CVE_RED_SOCIAL": data.CVE_RED_SOCIAL,
            "RED_SOCIAL": data.RED_SOCIAL
        };
        console.log(postData);
        var seq = this.api.post('UpdateUser', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var seq = this.api.post('signup', accountInfo).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User.prototype.getDataProgrmas = function (id) {
        var postData = {
            "FOLIO": id
        };
        console.log(postData);
        var seq = this.api.post('ProgrmasUserQr', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.getDataProgrmasSelect = function (id, personaID) {
        var postData = {
            "id": id,
            "personId": personaID
        };
        console.log(postData);
        var seq = this.api.post('ProgramasUserSelect', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.vasiado = function (data) {
        var postData = {
            "data": data
        };
        var seq = this.api.post('EntregarTikectsss', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User.prototype.entregarTicket = function (data) {
        var postData = {
            "data": data
        };
        var seq = this.api.post('EntregarTikects', postData).map(function (res) { return res; }).toPromise();
        // seq.subscribe((res: any) => {
        //   // If the API returned a successful response, mark the user as logged in
        //   if (res.status == 'success') {
        //     this._loggedIn(res);
        //   } else {
        //   }
        // }, err => {
        //   console.error('ERROR', err);
        // });
        return seq;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConferenceData = /** @class */ (function () {
    function ConferenceData(http) {
        this.http = http;
    }
    ConferenceData.prototype.load = function () {
        this.http.get('assets/data/data.json').subscribe(function (res) {
            console.log(res);
        });
    };
    ConferenceData.prototype.processData = function (data) {
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data;
        // this.data.tracks = [];
        // loop through each day in the schedule
        // this.data.schedule.forEach((day: any) => {
        // //   // loop through each timeline group in the day
        // //   day.groups.forEach((group: any) => {
        // //     // loop through each session in the timeline group
        // //     group.sessions.forEach((session: any) => {
        // //       session.speakers = [];
        // //       if (session.speakerNames) {
        // //         session.speakerNames.forEach((speakerName: any) => {
        // //           const speaker = this.data.speakers.find(
        // //             (s: any) => s.name === speakerName
        // //           );
        // //           if (speaker) {
        // //             session.speakers.push(speaker);
        // //             speaker.sessions = speaker.sessions || [];
        // //             speaker.sessions.push(session);
        // //           }
        // //         });
        // //       }
        // //       if (session.tracks) {
        // //         session.tracks.forEach((track: any) => {
        // //           if (this.data.tracks.indexOf(track) < 0) {
        // //             this.data.tracks.push(track);
        // //           }
        // //         });
        // //       }
        // //     });
        // //   });
        // });
        return this.data;
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(app, menu, platform, settings, statusBar, splashScreen) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.session = localStorage.getItem('session');
        this.dependencias = localStorage.getItem('dependencias');
        this.programas = localStorage.getItem('programas');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.enableMenuHiden();
        if (this.session == null && this.dependencias == null && this.programas == null) {
            this.enableMenuHiden();
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.enableMenu();
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_list_master_list_master__["a" /* ListMasterPage */];
        }
    }
    MyApp.prototype.enableMenu = function () {
        this.menu.enable(true, 'loggedOutMenu');
    };
    MyApp.prototype.enableMenuHiden = function () {
        this.menu.enable(false, 'loggedOutMenu');
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.Salir = function () {
        // localStorage.clear();
        localStorage.removeItem('dependencias');
        localStorage.removeItem('programas');
        localStorage.removeItem('programasSelect');
        localStorage.removeItem('session');
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* FirstRunPage */];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\app\app.html"*/' \n  \n   \n   \n  \n  <ion-nav #content [root]="rootPage" ></ion-nav>\n    '/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Settings */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asignar_asigna__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localization_localization__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(loadingCtrl, geolocation, zone, user, app, menu, barcodeScanner, navCtrl, items, modalCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.user = user;
        this.menu = menu;
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.accont = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.dependencias = JSON.parse(localStorage.getItem('dependencias'));
        this.colors = [{ "id": "0", "color": "color0" }, { "id": "1", "color": "color1" }, { "id": "2", "color": "color2" }, { "id": "3", "color": "color3" }, { "id": "4", "color": "color4" }, { "id": "5", "color": "color5" }, { "id": "6", "color": "color6" }, { "id": "7", "color": "color0" }, { "id": "8", "color": "color1" }, { "id": "9", "color": "color2" }, { "id": "10", "color": "color3" }, { "id": "11", "color": "color4" }, { "id": "12", "color": "color5" }, { "id": "13", "color": "color6" },];
        this.programasSelect = localStorage.getItem('programasSelect');
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.appMenuItems = [
            { title: 'Inicio', component: 'TutorialPage', icono: 'home' },
            { title: 'Scanner', component: 'WelcomePage', icono: 'qr-scanner' },
            { title: 'estadisticas', component: 'TabsPage', icono: 'people' }
        ];
        this.animals = [];
        var d = JSON.parse(localStorage.getItem('programas'));
        this.programas = d;
        if (!localStorage.getItem('red')) {
            // this.GetRede();
        }
        this.menuset();
    }
    ListMasterPage.prototype.ionViewDidLoad = function () {
        // this.scanCode();
        this.menuset();
        // this.geolocation.getCurrentPosition().then((resp) => {
        //  alert( resp.coords.latitude +"--"+  resp.coords.longitude);
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
    };
    ListMasterPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ListMasterPage.prototype.geo = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            // alert( position.coords.longitude+"-------"+position.coords.latitude);
        }, function (error) {
            // console.log('error', error);
        });
    };
    ListMasterPage.prototype.menuset = function () {
        this.enableMenuHiden();
        if (this.session == null && this.programasSelect == null) {
            this.enableMenuHiden();
        }
        else {
            this.enableMenu();
        }
    };
    ListMasterPage.prototype.Programa = function (data) {
        // console.log(data);
        localStorage.setItem('programasSelect', JSON.stringify(data));
        this.programasSelect = localStorage.getItem('programasSelect');
        //   this.navCtrl.setRoot(ListMasterPage);
        //  this.menuset();
    };
    ListMasterPage.prototype.enableMenu = function () {
        this.menu.enable(true, 'loggedOutMenu');
    };
    ListMasterPage.prototype.enableMenuHiden = function () {
        this.menu.enable(false, 'loggedOutMenu');
    };
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    ListMasterPage.prototype.codigo = function () {
        if (this.accont.codigo == '1') {
            // this.startNotification('si es beneficiario');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()('ERROR', 'Tarjeta No Existe...', 'error');
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
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage.prototype.logout = function () {
        // localStorage.clear();
        localStorage.removeItem('dependencias');
        localStorage.removeItem('programas');
        localStorage.removeItem('programasSelect');
        localStorage.removeItem('session');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        //this.navCtrl.setRoot(ListMasterPage); 
    };
    ListMasterPage.prototype.Beneficio = function (data) {
        var addModal = this.modalCtrl.create('BeneficioPage');
        addModal.onDidDismiss(function (item) {
            // console.log(item);
        });
        addModal.present();
    };
    ListMasterPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ListMasterPage.prototype.compledData = function (datas, data) {
        // console.log(datas);
        this.navCtrl.push('UpdateInfoPage', {
            item: datas,
            items: data
        });
    };
    ListMasterPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    ListMasterPage.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // alert(barcodeData.text);
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
    ListMasterPage.prototype.UserDataQr = function (data) {
        var _this = this;
        this.user.getDataUserQr(data).then(function (resp) {
            // console.log(resp[0].CVE_PERSONA)
            _this.getDataUserBeneficio(resp[0]);
            //this.compledData(resp[0]);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            // this.startNotification(DataL.error.message);
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()('ERROR', DataL.error.messag, 'error');
        });
    };
    ListMasterPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__localization_localization__["a" /* LocalizationPage */]);
    };
    ListMasterPage.prototype.getDataUserBeneficio = function (data) {
        var _this = this;
        this.user.getDataUserBeneficio(data).then(function (resp) {
            _this.loading.dismiss();
            // console.log(resp[0])
            _this.compledData(resp[0], data);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            // this.startNotification(DataL.error.message);
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()('ERROR', DataL.error.messag, 'error');
        });
    };
    ListMasterPage.prototype.scanCodeBuscar = function (folio) {
        // console.log(folio);
        // this.barcodeScanner.scan().then(barcodeData => { 
        var _this = this;
        this.presentLoadingBubbles();
        this.user.getDataUserBar(folio).then(function (resp) {
            // console.log(resp[0].CVE_PERSONA)
            _this.getDataUserBeneficio(resp[0]);
            //this.compledData(resp[0]);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            if (DataL.error.message == 'Usuario No Existe') {
                // this.startNotification('Beneficiario No Existe'); 
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()('ERROR', 'Tarjeta no Asignada', 'error');
                // swal('Oops...', 'Something went wrong!', 'error')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__asignar_asigna__["a" /* AsignaPage */], {
                    item: _this.code
                });
            }
        });
        // })
    };
    ListMasterPage.prototype.scanCodeBarras = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.presentLoadingBubbles();
            // this.code= barcodeData.text;
            _this.code = '0857503';
            _this.user.getDataUserBar(_this.code).then(function (resp) {
                // console.log(resp[0].CVE_PERSONA)
                _this.getDataUserBeneficio(resp[0]);
                //this.compledData(resp[0]);
            }, function (err) {
                var data = JSON.stringify(err);
                var DataL = JSON.parse(data);
                _this.loading.dismiss();
                if (DataL.error.message == 'Usuario No Existe') {
                    // this.startNotification('Beneficiario No Existe'); 
                    // swal('ERROR', 'Tarjeta No Asignada', 'error')
                    __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                        title: 'TARJETA NO ASIGANA',
                        text: "Quieres Asignar Tarjeta a Beneficiario?",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'SI',
                        confirmButtonColor: '#199997',
                        cancelButtonColor: '#bb0d0d',
                        cancelButtonText: 'NO',
                    }).then(function (result) {
                        if (result.value) {
                            // swal(
                            //   'ASIGNA TARJETA',
                            //   'BUSCA BENEFICIACIO.',
                            //   'success'
                            // )
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__asignar_asigna__["a" /* AsignaPage */], {
                                item: _this.code
                            });
                        }
                    });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ListMasterPage.prototype, "nav", void 0);
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\list-master\list-master.html"*/'<ion-menu side="left" id="loggedOutMenu" [content]="content">\n\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <div class="user-avatar">\n              <img src="assets/img/b15dbab04d8640bf504bb16166e74db6.png"  width= \'68px\'  height=\'68px\' >\n            </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <p ion-text class="no-margin bold text-white">\n              <b>\n                {{ session.USUARIONOMBRE }} {{ session.USUARIOPRIMERAPELLIDO }}\n              </b>\n            </p>\n            <p ion-text color="light">{{ dependencias.DEPENDENCIANOMBRE }}</p>\n\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content style="background: #c7c7c7; color: #199997; "> \n    <ion-list class="user-list  ;background: #c7c7c7;">\n      <button ion-item menuClose class="text-1x; background: #c7c7c7; " *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icono" style="color: #199997;    "></ion-icon>\n        <span ion-text style="color: #199997; align-content: center ">{{menuItem.title}}</span>\n      </button>\n   \n      <button ion-item menuClose class="text-1x ; background: #c7c7c7;" (click)="logout()">\n        <ion-icon item-left name="power" style="color: #199997;    "></ion-icon>\n        <span ion-text style="color: #199997; align-content: center ">Salir</span>\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n<ion-header color="dark">\n\n  <ion-navbar color="dark">\n    <ion-buttons>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end (click)="logout()">\n      <button ion-button icon-only>\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content *ngIf="programasSelect">\n  <section class="bg-primary2"> \n    <br>\n    <br>\n    <br><br><br>\n    <img src="assets/img/edomex02.png" class="centerIMG"   height=" 60px" />\n    <br>\n    <br><br> \n\n  </section>\n  <br>\n\n  <div class="container">\n\n    <ul class="social">\n<!-- \n      <li class="facebook"><a (click)="map()" class="entypo">\n          <ion-icon name="locate" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n\n        </a></li> -->\n      <li class="twitter"><a (click)="map()">\n          <ion-icon name="home" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n\n        </a></li>\n      <!-- <li class="dribbble">\n        <a (click)="scanCodeBarras()" class="entypo">\n          <ion-icon name="search" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n        </a></li> -->\n      <!-- <li class="behance"><a href="#" class="entypo-behance"></a></li>\n          <li class="linked-in"><a href="#" class="entypo-linkedin"></a></li> -->\n\n    </ul>\n    \n\n  </div> <!-- end container -->\n\n  <!-- <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row align="center">\n          <ion-col col-6 align="center">\n\n            <ion-card  class="rombo" align="center" style=" background: #199997 ">\n              <ion-icon name="home" class="textoICONO" style="font-size: 40px; color: #fff" align="center"></ion-icon> \n            </ion-card>\n\n          </ion-col>\n          <ion-col col-6 align="center">\n\n            <ion-card align="center" (click)="scanCode()" style=" background: #199997 ">\n                    <ion-icon name="qr-scanner"  style="font-size: 40px; color: #fff" align="center"></ion-icon>  \n                \n                  <div class="card-title"  style=" color: #fff" align="center">QR</div>\n                   \n                </ion-card> \n\n            <ion-card class="rombo" align="center" (click)="scanCodeBarras()" style=" background: #199997 ">\n              <ion-icon name="qr-scanner" class="textoICONO" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n              <img src="assets/img/descarga.png"/>\n           \n              <div class="card-subtitle" align="center">41 Listings</div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n           \n            <ion-card class="rombo " align="center" style=" background: #199997 " (click)="logout()">\n              <ion-icon name="power" class="textoICONO" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n             \n            </ion-card>\n          </ion-col>\n          \n          <ion-col col-6>\n            <ion-card class="rombo " align="center" style=" background: #199997  ">\n              <ion-icon name="speedometer"  class="textoICONO" style="font-size: 40px; color: #fff" align="center"></ion-icon>\n         \n            </ion-card>\n            \n          </ion-col>\n        </ion-row>\n \n      </ion-grid>\n    \n     \n    </ion-card-content> -->\n\n\n</ion-content>\n\n<ion-content *ngIf="!programasSelect" align-content="center">\n\n\n  <section class="bg-primary">\n\n    <br>\n    <img src="assets/img/edomex01.png" class="centerIMG" width="250px" height="80px" />\n    <br><br>\n\n\n  </section>\n\n\n\n\n  <section *ngFor="let itemProgrma of  programas; let i=index">\n\n    <div *ngFor="let colorx of  colors ">\n\n      <div *ngIf="colorx.id == i ">\n\n        <button ion-button full color="{{colorx.color}}" style="    color: #fff" (click)="Programa(itemProgrma)">\n         {{ itemProgrma.PROGRAMANOMBRECORTO }}\n        </button>\n      </div>\n    </div>\n\n  </section>\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\list-master\list-master.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TranslateService } from '@ngx-translate/core';





var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, navCtrl, user, toastCtrl
        // , public translateService: TranslateService
    ) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.account = {};
    }
    LoginPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.account.email && this.account.password) {
            // this.navCtrl.setRoot(ListMasterPage); 
            // localStorage.setItem('session',JSON.stringify(this.account));
            this.presentLoadingBubbles();
            this.user.login(this.account).then(function (resp) {
                _this.login = resp[0];
                _this.getDependenciaLogin();
            }, function (err) {
                var data = JSON.stringify(err);
                var DataL = JSON.parse(data);
                _this.loading.dismiss();
                // this.startNotification(DataL.error.message); 
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('ERROR', DataL.error.message, 'error');
            });
        }
        else {
            // this.startNotification('Datos Vacios');
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('ATENCION', 'Datos Vacios', 'info');
        }
    };
    LoginPage.prototype.getDependenciaLogin = function () {
        var _this = this;
        this.user.getDependencia(this.login).then(function (resp) {
            _this.dependencia = resp[0];
            _this.getProgrmasLogin();
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            // this.startNotification(DataL.error.message); 
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('ERROR', DataL.error.message, 'error');
        });
    };
    LoginPage.prototype.getProgrmasLogin = function () {
        var _this = this;
        this.user.geProgramas(this.login).then(function (resp) {
            _this.programas = resp;
            console.log(_this.dependencia);
            localStorage.setItem('session', JSON.stringify(_this.login));
            localStorage.setItem('dependencias', JSON.stringify(_this.dependencia));
            localStorage.setItem('programas', JSON.stringify(_this.programas));
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_master_list_master__["a" /* ListMasterPage */]);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            // this.startNotification(DataL.error.message); 
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('ERROR', DataL.error.message, 'error');
        });
    };
    LoginPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\login\login.html"*/' \n\n\n<ion-content padding  > \n       \n  <div class="login-content">\n<br><br><br>\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo">\n        <img src="assets/img/edomex03.jpg" width="200px" height="200px"  style=" align-content:\'center\'"  (click)="scanCode()" >  \n      </div>\n      <h2 ion-text   color="verde">\n        <strong>  </strong>  \n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start  style="color: #bb0d0d"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email"  [(ngModel)]="account.email" name="email" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start style="color: #bb0d0d"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n    </form>\n\n    <!-- <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p> -->\n\n    <div>\n      <button ion-button icon-start block color="rojo" tappable (click)="doLogin()">\n         \n        ENTRAR <ion-icon name="log-in"></ion-icon>\n      </button>\n\n      <!-- <button ion-button icon-start block color="dark" tappable (click)="scanCode()">\n        <ion-icon name="log-in"></ion-icon>\n       scanner\n      </button>\n    \n\n      <p text-center ion-text color="secondary">Or Sign in with:</p> -->\n\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-facebook">\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-twitter">\n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-4>\n            <button ion-button icon-only block class="btn-gplus">\n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n    </div>\n\n\n    \n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]
            // , public translateService: TranslateService
        ])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map