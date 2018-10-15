webpackJsonp([5],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficioPageModule", function() { return BeneficioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beneficio__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { TranslateModule } from '@ngx-translate/core';


var BeneficioPageModule = /** @class */ (function () {
    function BeneficioPageModule() {
    }
    BeneficioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beneficio__["a" /* BeneficioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beneficio__["a" /* BeneficioPage */])
                // ,
                // TranslateModule.forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__beneficio__["a" /* BeneficioPage */]
            ]
        })
    ], BeneficioPageModule);
    return BeneficioPageModule;
}());

//# sourceMappingURL=beneficio.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_master_list_master__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BeneficioPage = /** @class */ (function () {
    function BeneficioPage(geolocation, loadingCtrl, alerCtrl, toastCtrl, user, navParams, navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.alerCtrl = alerCtrl;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.shownGroup = null;
        this.emailFormArray = [];
        this.beneficiosEntregar = [];
        this.folioArray = [];
        this.errores = 0;
        this.account = {};
        this.beneficios = [];
        this.fecha = new Date();
        this.item = navParams.get('items');
        this.itemss = navParams.get('data');
        this.itemts = navParams.get('datas');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.logitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    BeneficioPage.prototype.ionViewDidLoad = function () {
        this.getEntregas();
    };
    BeneficioPage.prototype.toggleGroup = function (group) {
        console.log(group);
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    BeneficioPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    BeneficioPage.prototype.getEntregas = function () {
        var _this = this;
        var persona = this.item;
        var progrmas = this.itemss;
        this.presentLoadingBubbles();
        this.user.getEntregas(persona, progrmas).then(function (res) {
            var ress = JSON.stringify(res);
            var data = JSON.parse(ress);
            _this.loading.dismiss();
            _this.dataEntregas = data;
            var numberSelected = 0;
            console.log(_this.item);
            console.log(_this.dataEntregas);
            for (var _i = 0, _a = _this.dataEntregas; _i < _a.length; _i++) {
                var ee = _a[_i];
                for (var _b = 0, _c = _this.item; _b < _c.length; _b++) {
                    var dd = _c[_b];
                    if (dd.APOYOID_IV === ee.APOYOID_IV) {
                        for (var i = 0; i < dd.APOYOTOTALENTREGAS - ee.TOTAL; i++) {
                            console.log(dd.APOYOTOTALENTREGAS, ee.TOTAL);
                            console.log(i, { 'id': i, 'APOYOID_IV': dd.APOYOID_IV, 'idn': i + dd.APOYOID_IV, "TOTAL": dd.APOYOTOTALENTREGAS - ee.TOTA, "noEntregas": "si" });
                            _this.beneficios.push({ 'id': i, 'APOYOID_IV': dd.APOYOID_IV, 'idn': i + dd.APOYOID_IV, "TOTAL": dd.APOYOTOTALENTREGAS - ee.TOTAL, "noEntregas": "si" });
                            numberSelected++;
                            console.log(_this.beneficios);
                            console.log(1);
                        }
                    }
                }
            }
        }, function (err) {
            // this.startNotification(DataL.error.message); 
            _this.loading.dismiss();
            _this.errores = 10;
            var numberSelected = 0;
            console.log(_this.item);
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            // alert(DataL.error.message); 
            // this.startNotification("datos obtenidos");
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('ATENCION', 'Datos Obtenidos', 'info');
        });
    };
    BeneficioPage.prototype.onChange = function (f, d, isChecked) {
        var datass = JSON.stringify(d);
        var datasqq = JSON.parse(datass);
        console.log(datasqq);
        var cadena = { f: f, d: d };
        if (isChecked) {
            this.emailFormArray.push("INTO  GX_PPAPOYODET_IV (  PROGAMA_AIVID, APOYOID_IV, PPAPFOLIOENTREGA, PPAPDETOBSERVACION) VALUES (  '" + datasqq.PROGRAMAID + "', '" + datasqq.APOYOID_IV + "', 'folioPendiente', 'nada')");
        }
        else {
            var index = this.emailFormArray.indexOf(cadena);
            this.emailFormArray.splice(index, 1);
        }
    };
    BeneficioPage.prototype.duplicate = function () {
        // alert(this.emailFormArray);
    };
    BeneficioPage.prototype.Entregar = function () {
        var _this = this;
        console.log(this.emailFormArray.length);
        if (this.emailFormArray.length > 0) {
            var data = JSON.stringify(this.item);
            var datas = JSON.parse(data);
            var formatedDate = this.fecha.toISOString().substring(0, 10);
            console.log(formatedDate);
            this.folioArray.push(" INSERT  INTO  GXPPAPOYO_IV (PROGRAMAID, CVE_PERSONA_PP, PPAPDOCTOIDENTIFICACION, PPAPFOLIOIDENTICIFACION, PPAPFECHAENTREGA, PPAPLATITUD, PPAPLONGITUD, PPAPOBSERVACION, PPAPLUGARENTREGAOBS) VALUES ('" + datas[0].PROGRAMAID + "', '" + datas[0].CVE_PERSONA_PP + "', '0', '123456789',SYSDATE, '" + this.latitude + "', '" + this.logitude + "', 'ninguna', '" + datas[0].LUGARENTREGABENEFICIOID + "')");
            var into = this.folioArray.join(" ");
            this.presentLoadingBubbles();
            // this.user.entregar(this.folioArray).then(res=>{
            //   this.loading.dismiss();
            //   var ress =JSON.stringify(res);
            //   var data = JSON.parse(ress)  ;
            //   console.log(data[0].CURRVAL );
            //   this.tickets=data[0].CURRVAL;
            //   var ticket=data[0].CURRVAL;
            //   var cadena = this.emailFormArray.toString();
            //   console.log(cadena);
            //   var letrasCadena = cadena.split(",INTO") ;
            //   console.log(letrasCadena);  
            //   var i=0;
            //     for(let d of letrasCadena){
            //       var cad = d.replace("'folioPendiente'", "'"+ticket+"'"); 
            //       console.log(letrasCadena);
            //       if(!letrasCadena[0]){
            //         this. beneficiosEntregar.push(cad) 
            //         console.log(  1)
            //       }else{ 
            //           console.log(  2)
            //           this. beneficiosEntregar.push("INTO "+cad)
            //       }
            //     }
            //   console.log( this.beneficiosEntregar);
            //   console.log( this.emailFormArray);
            //   var into =this.beneficiosEntregar.join(' ');
            //   this.EntregarTikect(into);
            this.user.entregar(this.folioArray).then(function (res) {
                _this.loading.dismiss();
                var ress = JSON.stringify(res);
                var data = JSON.parse(ress);
                console.log(data[0].CURRVAL);
                _this.tickets = data[0].CURRVAL;
                var ticket = data[0].CURRVAL;
                var cadena = _this.emailFormArray.toString();
                console.log(cadena);
                var letrasCadena = cadena.split(",INTO");
                console.log(letrasCadena);
                for (var _i = 0, letrasCadena_1 = letrasCadena; _i < letrasCadena_1.length; _i++) {
                    var d = letrasCadena_1[_i];
                    var cad = d.replace("'folioPendiente'", "'" + ticket + "'");
                    console.log(letrasCadena);
                    if (!letrasCadena[0]) {
                        _this.beneficiosEntregar.push(cad);
                        console.log(1);
                    }
                    else {
                        console.log(2);
                        _this.beneficiosEntregar.push("INTO " + cad);
                    }
                }
                console.log(_this.beneficiosEntregar);
                console.log(_this.emailFormArray);
                var into = _this.beneficiosEntregar.join(' ');
                _this.EntregarTikect(into);
            }, function (err) {
                _this.loading.dismiss();
                var data = JSON.stringify(err);
                var DataL = JSON.parse(data);
                // this.startNotification(DataL.error.message); 
                // this.startNotification(DataL.error.message);
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('ERROR', DataL.error.message, 'error');
            });
        }
        else {
            // this.startNotification("Debes Selecionar Beneficio");
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('ATENCION', 'Debes Selecionar Beneficio!', 'info');
        }
    };
    BeneficioPage.prototype.EntregarTikect = function (into) {
        var _this = this;
        var into2 = this.beneficiosEntregar.join(" ");
        console.log(into2);
        this.presentLoadingBubbles();
        this.user.entregarTicket(into2).then(function (res) {
            var demo = JSON.stringify(res);
            var demos = JSON.parse(demo);
            console.log(demos.message);
            _this.loading.dismiss();
            // this.getEntregas();//
            _this.doAlert();
            _this.beneficiosEntregar = [];
            _this.folioArray = [];
            _this.errores = 0;
            _this.emailFormArray = [];
            // this.startNotification(demos.message);
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('CORRECTO', demos.message, 'success');
            // this.navCtrl.setRoot(ListMasterPage); 
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            // this.startNotification(DataL.error.message); 
            // this.startNotification(DataL.error.message);
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('ERROR', DataL.error.message, 'error');
            _this.loading.dismiss();
        });
    };
    BeneficioPage.prototype.doAlert = function () {
        var _this = this;
        var year = this.fecha.toISOString().substring(0, 4);
        var mont = this.fecha.toISOString().substring(6, 7);
        var confirm = this.alerCtrl.create({
            title: 'Datos Guardados',
            message: "<b>Folio:" + year + mont + "000000" + this.tickets + "</b><br>" + "<b>Entregas:" + this.emailFormArray.length + "</b>",
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__list_master_list_master__["a" /* ListMasterPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    BeneficioPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    BeneficioPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    BeneficioPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__list_master_list_master__["a" /* ListMasterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], BeneficioPage.prototype, "fileInput", void 0);
    BeneficioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-beneficio',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\beneficio\beneficio.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Entregar</ion-title>\n    <!-- <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n         Atras\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <!-- <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n        guardar\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content> \n  \n<h2 align="center">ENTREGAR</h2> \n    \n  <!-- <ion-list>\n    <ion-item *ngFor="let d of item; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n         \n      <h3>\n        {{d.APOYONOMBRE}}\n        <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n      </h3>\n      <div *ngIf="isGroupShown(i)"  > \n          <div *ngIf="i<d.APOYOTOTALENTREGAS">\n              <ion-checkbox  > {{i}} </ion-checkbox>\n          </div> \n        <div *ngFor="let e of dataEntregas"> \n          \n          <ion-checkbox  > </ion-checkbox>  <div *ngIf="d.APOYOID_IV == e.APOYOID_IV" >{{e.APOYOID_IV}}</div>\n        </div> \n      </div>\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <ion-list>\n      <ion-item *ngFor="let d of item; let i=index" >\n           \n        <h3> {{ d.APOYOTOTALENTREGAS }}  {{d.APOYONOMBRE}} </h3>  \n        <div  *ngIf="d.APOYOTOTALENTREGAS  > 0 "> \n             \n          <div *ngFor="let e of dataEntregas"> \n            \n             <div *ngIf="d.APOYOID_IV == e.APOYOID_IV" >    {{e.APOYONOMBRE}} \n             \n              <br> Entregados :{{e.TOTAL}}  / \n              \n              <span    *ngIf="d.APOYOTOTALENTREGAS - e.TOTAL > 0 " >  te quedan {{ d.APOYOTOTALENTREGAS - e.TOTAL}}</span> \n              <div   *ngIf="d.APOYOTOTALENTREGAS - e.TOTAL > 0 ">   \n                    <h4>Sleccione Entregas</h4>  \n                       <div *ngFor="let beneficio of beneficios">\n                          <div *ngIf="d.APOYOID_IV == beneficio.APOYOID_IV" >\n                              {{ beneficio.APOYOID_IV }} {{ beneficio.id }}\n                             <span> <ion-checkbox color="dark" class="form-check-input" ></ion-checkbox> {{d.APOYONOMBRE}}</span>\n                             <h4>Sleccione Entregas</h4>  \n                    <div *ngFor="let Car of beneficios">\n                        <div *ngIf="d.APOYOID_IV == Car.APOYOID_IV">\n                          <input type="checkbox" (change)="onChange(Car.id,d,e, $event.target.checked)"> {{Car.APOYOID_IV}}<br>\n                        </div>\n                      </div>  \n                            </div>\n                         </div>\n \n\n                        \n                    \n                      </div>  \n                 \n             </div>\n          </div> \n        </div>\n            \n     \n      </ion-item>\n    </ion-list> -->\n\n     \n\n    <ion-list>\n        <div *ngFor="let d of item; let i=index" >\n            <ion-item *ngIf=" d.APOYOTOTALENTREGAS > 0">\n            <div *ngFor="let entregas of dataEntregas">\n                <div *ngIf="d.APOYOID_IV == entregas.APOYOID_IV ">\n                    \n                     \n\n                      <ion-grid>\n                          <ion-row>\n                              <ion-col>\n                                <div><h3> {{d.APOYONOMBRE}} </h3>  </div>\n                              </ion-col>\n                               \n                            </ion-row>\n                          <ion-row>\n                              <ion-col>\n                                <div><p>Total</p></div>\n                              </ion-col>\n                              <ion-col>\n                                <div><p>Entregados</p></div>\n                              </ion-col>\n                              <ion-col>\n                                <div><p>Pendientes</p></div>\n                              </ion-col>\n                            </ion-row>\n                          <ion-row>\n                            <ion-col>\n                              <div>\n                                  <button id="notification-button" ion-button clear> \n           \n                                      <ion-icon name="archive"  style=" color: rgb(114, 65, 10);"> \n                                          <ion-badge id="notifications-total" color="danger">{{ d.APOYOTOTALENTREGAS }}</ion-badge>\n                                        </ion-icon>               \n                                    </button>\n                              </div>\n                            </ion-col>\n                            <ion-col>\n                              <div>   <button id="notification-button" ion-button clear>\n              \n                                  <ion-icon name="share">\n                                    <ion-badge id="notifications-entregados" color="danger"> {{entregas.TOTAL}}</ion-badge>\n                                  </ion-icon>              \n                              </button>\n                            </div>\n                            </ion-col>\n                            <ion-col>\n                              <div> \n                                 <button id="notification-button" ion-button clear>\n                    \n                                  <ion-icon name="share-alt" >\n                                    <ion-badge id="notifications-pendientes" color="danger">  {{ d.APOYOTOTALENTREGAS - entregas.TOTAL}}</ion-badge>\n                                  </ion-icon>              \n                              </button>\n                            </div>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                \n               \n              \n                \n\n            </div>\n            </div>\n             \n         \n               \n            <div *ngFor="let Car of beneficios ;  let i=index"> \n          \n               \n                <div *ngIf="    d.APOYOID_IV == Car.APOYOID_IV   " > \n         \n                  \n                  <input  type="checkbox" (change)="onChange(Car.id,d, $event.target.checked)"> {{d.APOYONOMBRE}}<br>\n                            \n                   \n                       \n                      \n                       \n                   \n                    \n                      \n                    \n                  </div>\n                  </div>  \n       \n        </ion-item>\n        </div>\n      </ion-list>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block style=" background: #bb0d0d ; color: #fff" (click)="cancel()">\n          Cancelar\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block style=" background: #199997 ; color: #fff" (click)="Entregar()">\n          ENTREGAR\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content> \n'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\beneficio\beneficio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], BeneficioPage);
    return BeneficioPage;
}());

//   onChange(f:string,d:any,e:any, isChecked: boolean) {
//     alert(JSON.stringify(d));
//     var cadena ={f,d,e};
//     if(isChecked) {
//       this.emailFormArray.push(" INTO  GX_PPAPOYODET_IV (  PROGAMA_AIVID, APOYOID_IV, PPAPFOLIOENTREGA, PPAPDETOBSERVACION) VALUES (  '13', '765', '64', 'nada')");
//     } else {
//       let index = this.emailFormArray.indexOf(cadena);
//       this.emailFormArray.splice(index,1);
//     }
// }
// duplicate() {
//   alert(this.emailFormArray);
// }
// Entregar(){  
//   var into =this.emailFormArray.join(" ")
//   this.user.entregar(into).then(res=>{
//     var ress =JSON.stringify(res);
//     var data = JSON.parse(ress)  ;
//     alert(data);
//     }, (err) => {
//       var data = JSON.stringify(err);
//       var DataL = JSON.parse(data)
//       // this.startNotification(DataL.error.message); 
//       alert(DataL.error.message); 
//     });
//  }
//# sourceMappingURL=beneficio.js.map

/***/ })

});
//# sourceMappingURL=5.js.map