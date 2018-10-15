webpackJsonp([0],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoPageModule", function() { return UpdateInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updateInfo__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { TranslateModule } from '@ngx-translate/core';


var UpdateInfoPageModule = /** @class */ (function () {
    function UpdateInfoPageModule() {
    }
    UpdateInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updateInfo__["a" /* UpdateInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updateInfo__["a" /* UpdateInfoPage */])
                // ,
                // TranslateModule.forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__updateInfo__["a" /* UpdateInfoPage */]
            ]
        })
    ], UpdateInfoPageModule);
    return UpdateInfoPageModule;
}());

//# sourceMappingURL=updateInfo.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateInfoPage; });
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









var UpdateInfoPage = /** @class */ (function () {
    function UpdateInfoPage(entiMuniLocalidad, loadingCtrl, toastCtrl, user, navParams, navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.entiMuniLocalidad = entiMuniLocalidad;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.account = {};
        this.entidades = [];
        this.municipios = [];
        this.localidades = [];
        this.redes = [];
        this.cp = [];
        this.user.load().then(function (res) {
            var d = JSON.stringify(res);
            var s = JSON.parse(d);
            _this.cp = s.ALL;
            _this.entidades = s.ENTIDADES;
            console.log(_this.entidades);
            _this.onChange();
            // this.municipios=s.MUNICIPIOS;
            //  this.localidades=s.LOCALIDADES;
            _this.redes = s.REDES;
            //  this.loading.dismiss();
        });
        this.item = navParams.get('item');
        this.items = navParams.get('items');
        console.log(this.item);
        console.log(this.items);
        // console.log(this.item)
        if (this.item) {
            if (this.item.CALLE != null) {
                this.account.CALLE = this.item.CALLE;
            }
            if (this.item.Y_CALLE != null) {
                this.account.Y_CALLE = this.item.Y_CALLE;
            }
            if (this.item.ENTRE_CALLE != null) {
                this.account.ENTRE_CALLE = this.item.ENTRE_CALLE;
            }
            if (this.item.PROGRAMAID != null) {
                this.account.PROGRAMAID = this.item.PROGRAMAID;
            }
            if (this.item.NUM_INT != null) {
                this.account.NUM_INT = this.item.NUM_INT;
            }
            if (this.item.COLONIA != null) {
                this.account.COLONIA = this.item.COLONIA;
            }
            if (this.item.LOCALIDAD != null) {
                this.account.LOCALIDAD = this.item.LOCALIDAD;
            }
            if (this.item.CODIGO_POSTAL != null) {
                this.account.CODIGO_POSTAL = this.item.CODIGO_POSTAL;
            }
            if (this.item.CELULAR != null) {
                this.account.CELULAR = this.item.CELULAR;
                ;
            }
            if (this.item.TELEFONO != null) {
                this.account.TELEFONO = this.item.TELEFONO;
            }
            if (this.item.E_MAIL != null) {
                this.account.E_MAIL = this.item.E_MAIL;
            }
            if (this.item.E_MAIL != null) {
                this.account.CVE_PERSONA_PP = this.item.CVE_PERSONA_PP;
            }
            if (this.item.E_MAIL != null) {
                this.account.OTRA_REFERENCIA = this.item.OTRA_REFERENCIA;
            }
            if (this.item.CODIGO_POSTAL != null) {
                this.account.NUM_EXT = this.item.NUM_EXT;
            }
            else {
                this.account.NUM_EXT = "S/D";
            }
            if (this.item.CODIGO_POSTAL != null) {
                this.account.CODIGO_POSTAL = this.item.CODIGO_POSTAL;
            }
            if (this.item.CVE_MUNICIPIO != null) {
                this.account.CVE_MUNICIPIO = this.item.CVE_MUNICIPIO;
            }
            if (this.item.CVE_LOCALIDAD != null) {
                this.account.CVE_LOCALIDAD = this.item.CVE_LOCALIDAD;
            }
            console.log(this.item.CVE_ENTIDAD_FEDERATIVA);
            if (this.item.CVE_ENTIDAD_FEDERATIVA != null) {
                this.account.CVE_ENTIDAD_FEDERATIVA = this.item.CVE_ENTIDAD_FEDERATIVA;
            }
            if (this.item.ENTIDAD_FEDERATIVA != null) {
                this.account.ENTIDAD_FEDERATIVA = this.item.ENTIDAD_FEDERATIVA;
            }
            if (this.item.CVE_RED_SOCIAL != null) {
                this.account.CVE_RED_SOCIAL = this.item.CVE_RED_SOCIAL;
            }
            if (this.item.RED_SOCIAL != null) {
                this.account.RED_SOCIAL = this.item.RED_SOCIAL;
            }
        }
        else {
            // console.log('no item');
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_master_list_master__["a" /* ListMasterPage */]);
        }
    }
    UpdateInfoPage.prototype.ionViewDidLoad = function () {
    };
    UpdateInfoPage.prototype.getDatas = function () {
        var _this = this;
        // this.presentLoadingBubbles()
        this.user.load().then(function (res) {
            var d = JSON.stringify(res);
            var s = JSON.parse(d);
            _this.cp = s.ALL;
            _this.onChange();
            _this.entidades = s.ENTIDADES;
            _this.municipios = s.MUNICIPIOS;
            _this.localidades = s.LOCALIDADES;
            _this.redes = s.REDES;
            //  this.loading.dismiss();
        });
    };
    UpdateInfoPage.prototype.presentLoadingBubbles = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Cargando...'
        });
        this.loading.present();
    };
    UpdateInfoPage.prototype.UpdateData = function () {
        var _this = this;
        if (this.account.E_MAILmessage == null && this.account.CALLEmessage == null && this.account.Y_CALLEmessage == null && this.account.ENTRE_CALLEmessage == null && this.account.NUM_EXTmessage == null && this.account.NUM_INTmessage == null && this.account.COLONIAmessage == null && this.account.OTRA_REFERENCIAmessage == null && this.account.CODIGO_POSTALmessage == null && this.account.TELEFONOmessage == null && this.account.CELULARmessage == null) {
            console.log(this.account.CVE_LOCALIDADS);
            if (this.account.CVE_LOCALIDADS) {
                var mun = this.account.CVE_LOCALIDADS;
                var r = JSON.stringify(mun);
                var s = JSON.parse(r);
                this.account.CVE_LOCALIDAD = s.CVE_LOCALIDAD;
                this.account.CVE_MUNICIPIO = s.CVE_MUNICIPIO;
            }
            this.presentLoadingBubbles();
            this.user.updateData(this.account).then(function (resp) {
                var array = JSON.stringify(resp);
                var objed = JSON.parse(array);
                _this.loading.dismiss();
                //  console.log(resp);
                _this.startNotification('Datos Modificados Exitosamente');
                // this.ShowAler();
                //  this.ConsultaProgrmas(this.account.PROGRAMAID);
                //this.compledData(resp[0]);
            }, function (err) {
                var data = JSON.stringify(err);
                var DataL = JSON.parse(data);
                _this.loading.dismiss();
                _this.startNotification(DataL.error.message);
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ERROR', DataL.error.message, 'error');
            });
        }
        else {
            // this.startNotification('Completa Campos Correctamente'); 
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ATENCION', 'Completa Campos Correctamente', 'info');
        }
    };
    UpdateInfoPage.prototype.ShowAler = function () {
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('ACTUALIZACION EXITOSA', 'Datos Modificados Exitosamente', 'success');
    };
    UpdateInfoPage.prototype.consitunar = function () {
        this.presentLoadingBubbles();
        // this.ConsultaProgrmas(this.account.PROGRAMAID);
        this.ConsultaProgrmasSelect();
    };
    UpdateInfoPage.prototype.startNotification = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            showCloseButton: true,
            duration: 3000,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    UpdateInfoPage.prototype.consultaUsuario = function () {
        var _this = this;
        this.user.getDataProgrmas(this.account.CVE_PERSONA_PP).then(function (resp) {
            _this.ConsultaProgrmas(_this.account.PROGRAMAID);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.loading.dismiss();
            _this.startNotification(DataL.error.message);
        });
    };
    UpdateInfoPage.prototype.ConsultaProgrmas = function (id) {
        var _this = this;
        this.user.getDataProgrmas(this.account.CVE_PERSONA_PP).then(function (resp) {
            var array = JSON.stringify(resp);
            var objed = JSON.parse(array);
            //  this.ConsultaProgrmasSelect(resp[0].PROGRAMAID,resp[0].CVE_PERSONA_PP)
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.startNotification(DataL.error.message);
        });
    };
    UpdateInfoPage.prototype.ConsultaProgrmasSelect = function () {
        var _this = this;
        console.log();
        this.user.getDataProgrmasSelect(this.item.PROGRAMAID, this.items.CVE_PERSONA).then(function (resp) {
            var array = JSON.stringify(resp);
            var objed = JSON.parse(array);
            _this.selectProgramas = objed;
            _this.loading.dismiss();
            _this.listaBeneficios(resp);
        }, function (err) {
            var data = JSON.stringify(err);
            var DataL = JSON.parse(data);
            _this.startNotification(DataL.error.message);
        });
    };
    UpdateInfoPage.prototype.listaBeneficios = function (data) {
        this.navCtrl.push('BeneficioPage', {
            items: data,
            data: this.item,
            datas: this.items
        });
    };
    UpdateInfoPage.prototype.valida_calle = function (data) {
        var regex = /^([A-Za-zÀ-ÿ\u00f1\u00d1\- 1 2 3 4 5 6 7 8 9 0\.\(\)\+ / *\s])*$/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }
        else {
            return 'Cadena Invalida Debe contener caracteres A-Z ,0-9,., +,-,()';
        }
    };
    UpdateInfoPage.prototype.valida_cp = function (data) {
        var regex = /^[0-9]{5}$/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }
        else {
            return 'Rquiere 5 Numeros 0-9 digitos';
        }
    };
    UpdateInfoPage.prototype.valida_email = function (data) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+){2}$/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }
        else {
            return 'Email no valido usuari@dominio.mx.com';
        }
    };
    UpdateInfoPage.prototype.valida_tel = function (data) {
        var regex = /^[0-9]{10}$/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }
        else {
            return 'Rquiere 10 Numeros 0-9 digitos';
        }
    };
    UpdateInfoPage.prototype.valida_Catalogo = function (data) {
        var regex = /  MANZANA | MNZ | MZA | MZ | LOTE | LT | LTE | DEPTO | DEPARTAMENTO | CS | SECTOR | EDIFICIO | EDIF | MNZ. | MZA. | MZ. | LT. | LTE. | DEPTO. | EDIF. | __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
                //  return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';
            });
            return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';
        }
        else {
        }
    };
    UpdateInfoPage.prototype.valida_Catalogo2 = function (data) {
        var regex = /--| __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE/;
        var str = data;
        var m;
        if ((m = regex.exec(str)) !== null) {
            // The result can be accessed through the `m`-variable.
            m.forEach(function (match, groupIndex) {
                //  console.log(`Found match, group ${groupIndex}: ${match}`);
                //  return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';
            });
            return ' Cadenas no validas   __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE';
        }
        else {
        }
    };
    UpdateInfoPage.prototype.onChange = function () {
        if (this.account.CVE_LOCALIDADS) {
            console.log(this.account.CVE_LOCALIDADS);
            var mun = this.account.CVE_LOCALIDADS;
            var r = JSON.stringify(mun);
            var s = JSON.parse(r);
            this.account.CVE_LOCALIDAD = s.CVE_LOCALIDAD;
            this.account.CVE_MUNICIPIO = s.CVE_MUNICIPIO;
        }
        /**
         * Valida Calle
         */
        if (this.account.CALLE) {
            var calle = this.valida_calle(this.account.CALLE);
            if (calle) {
                this.account.CALLEmessage = calle;
            }
            else {
                var calles = this.valida_Catalogo(this.account.CALLE);
                if (calles) {
                    this.account.CALLEmessage = calles;
                }
                else {
                    this.account.CALLEmessage = null;
                }
            }
        }
        else {
            this.account.CALLEmessage = 'campo es requerido';
        }
        /**
       * Valida  Y Calle
       */
        if (this.account.Y_CALLE) {
            var ycalle = this.valida_calle(this.account.Y_CALLE);
            if (ycalle) {
                this.account.Y_CALLEmessage = ycalle;
            }
            else {
                var ycalles = this.valida_Catalogo2(this.account.Y_CALLE);
                if (ycalles) {
                    this.account.Y_CALLEmessage = ycalles;
                }
                else {
                    this.account.Y_CALLEmessage = null;
                }
            }
        }
        else {
            this.account.Y_CALLEmessage = 'campo es requerido';
        }
        /**
      * Valida ENTRE Calle
      */
        if (this.account.ENTRE_CALLE) {
            var ycalle = this.valida_calle(this.account.ENTRE_CALLE);
            if (ycalle) {
                this.account.ENTRE_CALLEmessage = ycalle;
            }
            else {
                var ycalles = this.valida_Catalogo2(this.account.ENTRE_CALLE);
                if (ycalles) {
                    this.account.ENTRE_CALLEmessage = ycalles;
                }
                else {
                    this.account.ENTRE_CALLEmessage = null;
                }
            }
        }
        else {
            this.account.ENTRE_CALLEmessage = 'campo es requerido';
        }
        /**
      * Valida ENTRE Calle
      */
        if (this.account.NUM_EXT) {
            var numex = this.valida_calle(this.account.NUM_EXT);
            if (numex) {
                this.account.NUM_EXTmessage = numex;
            }
            else {
                var numexs = this.valida_Catalogo2(this.account.NUM_EXT);
                if (numexs) {
                    this.account.NUM_EXTmessage = numexs;
                }
                else {
                    this.account.NUM_EXTmessage = null;
                }
            }
        }
        else {
            this.account.NUM_EXTmessage = 'campo es requerido';
        }
        /**
      * Valida ENTRE Calle
      */
        if (this.account.NUM_INT) {
            var numin = this.valida_calle(this.account.NUM_INT);
            if (numin) {
                this.account.NUM_INTmessage = numin;
            }
            else {
                var numins = this.valida_Catalogo2(this.account.NUM_INT);
                if (numins) {
                    this.account.NUM_INTmessage = numins;
                }
                else {
                    this.account.NUM_INTmessage = null;
                }
            }
        }
        else {
            this.account.NUM_INTmessage = 'campo es requerido';
        }
        /**
      * Valida ENTRE Calle
      */
        if (this.account.COLONIA) {
            var col = this.valida_calle(this.account.COLONIA);
            if (col) {
                this.account.COLONIAmessage = col;
            }
            else {
                var cols = this.valida_Catalogo2(this.account.COLONIA);
                if (cols) {
                    this.account.COLONIAmessage = cols;
                }
                else {
                    this.account.COLONIAmessage = null;
                }
            }
        }
        else {
            this.account.COLONIAmessage = 'campo es requerido';
        }
        /**
      * Valida ENTRE Calle
      */
        if (this.account.OTRA_REFERENCIA) {
            var otra = this.valida_calle(this.account.OTRA_REFERENCIA);
            if (otra) {
                this.account.OTRA_REFERENCIAmessage = otra;
            }
            else {
                var otras = this.valida_Catalogo2(this.account.OTRA_REFERENCIA);
                if (otras) {
                    this.account.OTRA_REFERENCIAmessage = otras;
                }
                else {
                    this.account.OTRA_REFERENCIAmessage = null;
                }
            }
        }
        else {
            this.account.OTRA_REFERENCIAmessage = 'campo es requerido';
        }
        if (this.account.CODIGO_POSTAL) {
            var cp = this.valida_cp(this.account.CODIGO_POSTAL);
            if (cp) {
                this.account.CODIGO_POSTALmessage = cp;
                console.log('cambio post code 1');
                if (this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL && !this.account.CVE_LOCALIDADS) {
                    this.account.CVE_LOCALIDAD = null;
                }
            }
            else {
                console.log('cambio post code 2');
                this.account.CODIGO_POSTALmessage = null;
                // console.log(this.account.CODIGO_POSTAL)
                // console.log(this.item.CODIGO_POSTAL)
                // console.log(this.account.CVE_LOCALIDAD)
                // console.log(this.item.CVE_LOCALIDAD)
                // console.log(!this.account.CVE_LOCALIDADS)
                if (this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL && !this.account.CVE_LOCALIDADS) {
                    this.account.CVE_LOCALIDAD = null;
                    // console.log('cambio post code 211')
                }
                if (this.account.CODIGO_POSTAL == this.item.CODIGO_POSTAL && this.account.CVE_LOCALIDAD != this.item.CVE_LOCALIDAD && this.account.CVE_LOCALIDADS) {
                    this.account.CVE_LOCALIDAD = null;
                    // console.log('cambio post code 222')
                }
                if (this.account.CVE_LOCALIDADS && this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL && this.account.CVE_LOCALIDAD == this.item.CVE_LOCALIDAD) {
                    this.account.CVE_LOCALIDAD = null;
                    // console.log('cambio post code 44') 
                }
                if (this.account.CVE_LOCALIDADS && this.account.CODIGO_POSTAL == this.item.CODIGO_POSTAL && this.account.CVE_LOCALIDAD == this.item.CVE_LOCALIDAD) {
                    this.account.CVE_LOCALIDAD;
                    // console.log('cambio post code 33') 
                }
            }
        }
        else {
            console.log('cambio post code 3');
            this.account.CODIGO_POSTALmessage = 'campo es requerido';
        }
        /***
         * valida cp
         */
        if (this.account.TELEFONO) {
            var tel = this.valida_tel(this.account.TELEFONO);
            if (tel) {
                this.account.TELEFONOmessage = tel;
            }
            else {
                this.account.TELEFONOmessage = null;
            }
        }
        else {
            this.account.TELEFONOmessage = 'campo es requerido';
        }
        /***
        * valida cp
        */
        if (this.account.CELULAR) {
            var CELULAR = this.valida_tel(this.account.CELULAR);
            if (CELULAR) {
                this.account.CELULARmessage = CELULAR;
            }
            else {
                this.account.CELULARmessage = null;
            }
        }
        else {
            this.account.CELULARmessage = 'campo es requerido';
        }
        /***
      * valida cp
      */
        if (this.account.E_MAIL) {
            var mail = this.valida_email(this.account.E_MAIL);
            if (mail) {
                this.account.E_MAILmessage = mail;
            }
            else {
                this.account.E_MAILmessage = null;
            }
        }
        else {
            this.account.E_MAILmessage = 'campo es requerido';
        }
        /***
      * valida cp
      */
        // if(this.account.RED_SOCIAL){  
        //   var RED_SOCIAL = this.valida_email(this.account.RED_SOCIAL);
        //   if(RED_SOCIAL){
        //     this.account.RED_SOCIALmessage = RED_SOCIAL;
        //   }else{ 
        //       this.account.RED_SOCIALmessage = null;   
        //   }  
        // }else{ 
        //     this.account.RED_SOCIALmessage ='campo es requerido'; 
        // }
    };
    UpdateInfoPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_master_list_master__["a" /* ListMasterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], UpdateInfoPage.prototype, "fileInput", void 0);
    UpdateInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-updateInfo',template:/*ion-inline-start:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\updateInfo\updateInfo.html"*/'<ion-header color="dark">\n\n  <ion-navbar color="dark">\n    <ion-title>Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-card>\n\n\n    <section class="bg-primarydss">\n\n      <br>\n      <ion-avatar item-start style="  margin: auto;  width: 50%;   padding: 10px;   width: 150px;  height: 150px;">\n        <img src="assets/img/avatar.png">\n      </ion-avatar>\n      <br><br>\n\n\n    </section>\n    <h2 style=" text-align:center"> {{ items.PRIMER_APELLIDO }} {{ items.SEGUNDO_APELLIDO }} {{ items.NOMBRE }}</h2>\n\n\n\n   \n  \n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating *ngIf="account.CALLE">\n          <ion-icon name="home" item-start style="color: #199997"></ion-icon> <b>CALLE:</b>\n        </ion-label>\n        <ion-label floating *ngIf="!account.CALLE">\n          <ion-icon name="home" item-start style="color: #950000"></ion-icon> <b>CALLE ES REQUERIDO:</b>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.CALLE" name="CALLE" #C (ionChange)="onChange()"></ion-input>\n        <ion-label *ngIf="account.CALLEmessage" style="color: #950000">{{ account.CALLEmessage }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating *ngIf="account.ENTRE_CALLE">\n          <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n          <b> ENTRE CALLE:</b>\n        </ion-label>\n        <ion-label floating *ngIf="!account.ENTRE_CALLE">\n          <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n          <b>ENTRE CALLE ES REQUERIDO:</b>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.ENTRE_CALLE" name="ENTRE_CALLE" #C (ionChange)="onChange()"></ion-input>\n        <ion-label *ngIf="account.ENTRE_CALLEmessage" style="color: #950000">{{ account.ENTRE_CALLEmessage }}</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating *ngIf="account.Y_CALLE">\n          <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n          <b>Y CALLE:</b>\n        </ion-label>\n        <ion-label floating *ngIf="!account.Y_CALLE">\n          <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n          <b> Y CALLE ES REQUERIDO:</b>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="account.Y_CALLE" name="Y_CALLE" #C (ionChange)="onChange()"></ion-input>\n        <ion-label *ngIf="account.Y_CALLEmessage" style="color: #950000">{{ account.Y_CALLEmessage }}</ion-label>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating *ngIf="account.NUM_EXT">\n                <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n                <b>N° EXTERIOR:</b>\n              </ion-label>\n              <ion-label floating *ngIf="!account.NUM_EXT">\n                <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n                <b> N° EXTERIOR ES REQUERIDO:</b>\n              </ion-label>\n              <ion-input type="text" [(ngModel)]="account.NUM_EXT" name="NUM_EXT" #C (ionChange)="onChange()"></ion-input>\n              <ion-label *ngIf="account.NUM_EXTmessage" style="color: #950000">{{ account.NUM_EXTmessage }}</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating *ngIf="account.NUM_INT">\n                <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n                <b>N° INTERIOR:</b>\n              </ion-label>\n              <ion-label floating *ngIf="!account.NUM_INT">\n                <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n                <b> N° INTERIOR ES REQUERIDO:</b>\n              </ion-label>\n              <ion-input type="text" [(ngModel)]="account.NUM_INT" name="NUM_INT" #C (ionChange)="onChange()"></ion-input>\n              <ion-label *ngIf="account.NUM_INTmessage" style="color: #950000">{{ account.NUM_INTmessage }}</ion-label>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-item>\n          <ion-label floating *ngIf="account.COLONIA">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n            <b>COLONIA:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.COLONIA">\n            <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n            <b> COLONIA ES REQUERIDO:</b>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.COLONIA" name="COLONIA" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.COLONIAmessage" style="color: #950000">{{ account.COLONIAmessage }}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating *ngIf="account.OTRA_REFERENCIA">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n            <b>OTRA_REFERENCIA:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.OTRA_REFERENCIA">\n            <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n            <b> OTRA_REFERENCIA ES REQUERIDO:</b>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.OTRA_REFERENCIA" name="OTRA_REFERENCIA" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.OTRA_REFERENCIAmessage" style="color: #950000">{{ account.OTRA_REFERENCIAmessage }}</ion-label>\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n            <ion-label floating *ngIf="account.LOCALIDAD">\n              <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n              <b> LOCALIDAD:</b>\n            </ion-label>\n            <ion-label floating *ngIf="!account.LOCALIDAD">\n              <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n              <b> LOCALIDAD ES REQUERIDO:</b>\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="account.LOCALIDAD" name="LOCALIDAD"></ion-input>\n          </ion-item> -->\n        <ion-item>\n\n          <ion-label floating *ngIf="account.CVE_ENTIDAD_FEDERATIVA">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n            <b> ENTIDAD FEDERATIVA:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.CVE_ENTIDAD_FEDERATIVA && account.CVE_ENTIDAD_FEDERATIVA==0 ">\n            <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n            <b> ENTIDAD FEDERATIVA ES REQUERIDO:</b>\n          </ion-label> <br>\n          <ion-select [(ngModel)]="account.CVE_ENTIDAD_FEDERATIVA">\n\n            <div *ngFor="let key of entidades"> \n              <div *ngIf="account.CVE_ENTIDAD_FEDERATIVA   && account.CVE_ENTIDAD_FEDERATIVA == key.CVE_ENTIDAD_FEDERATIVA  ">\n                <ion-option [value]="key.CVE_ENTIDAD_FEDERATIVA" [selected]="account.CVE_ENTIDAD_FEDERATIVA == key.CVE_ENTIDAD_FEDERATIVA">{{key.ENTIDAD_FEDERATIVA}}</ion-option>\n              </div>\n            </div>\n\n          </ion-select>\n        </ion-item>\n\n\n        <!-- <ion-item  *ngIf="   account.CVE_ENTIDAD_FEDERATIVA || account.CVE_ENTIDAD_FEDERATIVA == 0  ">\n              <ion-label floating *ngIf="account.CVE_MUNICIPIO">\n                  <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n                  <b> MUNICIPIO:</b>\n                </ion-label>\n                <ion-label floating *ngIf="!account.CVE_MUNICIPIO">\n                  <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n                  <b> MUNICIPIO ES REQUERIDO:</b>\n                </ion-label> <br>\n              <ion-select [(ngModel)]="account.CVE_MUNICIPIO"> \n  \n                  <div *ngFor="let municipio of municipios  ">\n                      <div  *ngIf="!account.CVE_MUNICIPIO     ">\n                          <ion-option   [value]="municipio.CVE_MUNICIPIO">{{municipio.MUNICIPIO}}</ion-option>\n                      </div>\n                  </div>\n  \n                 \n      \n                <div *ngFor="let municipio of municipios">\n                    <div  *ngIf="account.CVE_MUNICIPIO   && account.CVE_ENTIDAD_FEDERATIVA ==  municipio.CVE_ENTIDAD_FEDERATIVA &&  account.CVE_ENTIDAD_FEDERATIVA== municipio.CVE_ENTIDAD_FEDERATIVA  ">\n                      <ion-option [value]="municipio.CVE_MUNICIPIO"   [selected]="account.CVE_ENTIDAD_FEDERATIVA ==  municipio.CVE_ENTIDAD_FEDERATIVA"  >{{municipio.MUNICIPIO}}</ion-option>\n                  </div>\n                </div>\n  \n              </ion-select>\n            </ion-item> -->\n\n\n        <ion-item>\n          <ion-label floating *ngIf="account.CODIGO_POSTAL">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n            <b>CODIGO POSTAL:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.CODIGO_POSTAL">\n            <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n            <b> CODIGO POSTAL ES REQUERIDO:</b>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.CODIGO_POSTAL" name="CODIGO_POSTAL" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.CODIGO_POSTALmessage" style="color: #950000">{{ account.CODIGO_POSTALmessage }}</ion-label> \n        </ion-item>\n\n     \n      \n            <ion-item *ngIf="account.CODIGO_POSTAL "  #C (ionChange)="onChange()">\n                <ion-label floating *ngIf= "account.CVE_LOCALIDAD !=null">\n                  <ion-icon name="home" item-start style="color: #199997" #C (ionChange)="onChange()"></ion-icon>\n                  <b> LOCALIDAD:</b>\n                </ion-label>\n\n               \n                \n                <ion-label floating *ngIf="account.CVE_LOCALIDAD == null ">\n                  <ion-icon name="home" item-start style="color: #950000" #C (ionChange)="onChange()"></ion-icon>\n                  <b> LOCALIDAD ES REQUERIDO:</b>\n                </ion-label>\n               \n               \n \n                <br>    \n\n                <!-- <ion-select [(ngModel)]="account.CVE_LOCALIDADS" (change)="onChange()" > \n                  <div *ngFor="let localidade of cp "> \n                     \n                    <div *ngIf="account.CVE_LOCALIDAD &&   localidade.CODIGO_POSTAL_LC == account.CODIGO_POSTAL" (change)="onChange()">\n                      <ion-option (change)="onChange()" [value]="localidade" [selected]="localidade.CVE_LOCALIDAD == account.CVE_LOCALIDAD   ">{{localidade.LOCALIDAD_NOMBRE}}, {{localidade.MUNICIPIO}}</ion-option>\n                    </div>\n                    <div *ngIf="account.CVE_LOCALIDAD==null &&   localidade.CODIGO_POSTAL_LC == account.CODIGO_POSTAL" (change)="onChange()">\n                        <ion-option (change)="onChange()" [value]="localidade" [selected]="localidade.CVE_LOCALIDAD == account.CVE_LOCALIDAD   ">{{localidade.LOCALIDAD_NOMBRE}}, {{localidade.MUNICIPIO}}</ion-option>\n                      </div>\n                  </div> \n      \n                </ion-select> -->\n\n                <ion-select  [(ngModel)]="account.CVE_LOCALIDADS" #C (ionChange)="onChange()" interface="action-sheet">\n                    <div *ngFor="let localidade of cp "> \n                     \n                        <div *ngIf="account.CVE_LOCALIDAD &&   localidade.CODIGO_POSTAL_LC == account.CODIGO_POSTAL" (ionChange)="onChange()">\n                          <ion-option (ionChange)="onChange()" [value]="localidade" [selected]="localidade.CVE_LOCALIDAD == account.CVE_LOCALIDAD   ">{{localidade.LOCALIDAD_NOMBRE}}, {{localidade.MUNICIPIO}}</ion-option>\n                        </div>\n                        <div *ngIf="account.CVE_LOCALIDAD==null &&   localidade.CODIGO_POSTAL_LC == account.CODIGO_POSTAL" (ionChange)="onChange()">\n                            <ion-option (ionChange)="onChange()" [value]="localidade" [selected]="localidade.CVE_LOCALIDAD == account.CVE_LOCALIDAD   ">{{localidade.LOCALIDAD_NOMBRE}}, {{localidade.MUNICIPIO}}</ion-option>\n                          </div>\n                      </div> \n                  </ion-select>\n\n                \n              </ion-item>\n\n\n\n \n\n\n\n        <!-- <ion-item>\n            <ion-label floating *ngIf="account.CODIGO_POSTAL">\n              <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n              <b>CODIGO POSTAL:</b>\n            </ion-label>\n            <ion-label floating *ngIf="!account.CODIGO_POSTAL">\n              <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n              <b> CODIGO POSTAL ES REQUERIDO:</b>\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="account.CODIGO_POSTAL" name="CODIGO_POSTAL"></ion-input>\n          </ion-item> -->\n\n        <ion-item>\n          <ion-label floating *ngIf="account.CELULAR">\n            <ion-icon name="phone-portrait" item-start style="color: #199997"></ion-icon>\n            <b>CELULAR:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.CELULAR">\n            <ion-icon name="home" item-start style="color: #689500"></ion-icon>\n            <b> CELULAR ES OPCIONAL:</b>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.CELULAR" name="CELULAR" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.CELULARmessage" style="color: #950000">{{ account.CELULARmessage }}</ion-label>\n\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating *ngIf="account.TELEFONO">\n            <ion-icon name="call" item-start style="color: #199997"></ion-icon>\n            <b>TELEFONO:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.TELEFONO">\n            <ion-icon name="home" item-start style="color: #689500"></ion-icon>\n            <b> TELEFONO ES OPCIONAL:</b>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="account.TELEFONO" name="TELEFONO" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.TELEFONOmessage" style="color: #950000">{{ account.TELEFONOmessage }}</ion-label>\n\n        </ion-item>\n        <ion-item>\n          <ion-label floating *ngIf="account.E_MAIL">\n            <ion-icon name="mail" item-start style="color: #199997"></ion-icon>\n            <b>CORREO:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.E_MAIL">\n            <ion-icon name="mail" item-start style="color: #7c0400"></ion-icon>\n            <b>CORREO ES REQUERIDO:</b>\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="account.E_MAIL" name="E_MAIL" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.E_MAILmessage" style="color: #950000">{{ account.E_MAILmessage }}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="   account.CVE_RED_SOCIAL || account.CVE_RED_SOCIAL == 0  ">\n          <ion-label floating *ngIf="account.CVE_RED_SOCIAL">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon>\n            <b> RED SOCIAL:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.CVE_RED_SOCIAL">\n            <ion-icon name="home" item-start style="color: #950000"></ion-icon>\n            <b> RED SOCIALIO ES REQUERIDO:</b>\n          </ion-label> <br>\n          <ion-select [(ngModel)]="account.CVE_RED_SOCIAL">\n\n            <div *ngFor="let rede of redes">\n\n\n              <ion-option [value]="rede.CVE_RED_SOCIAL" [selected]="account.CVE_RED_SOCIAL ==  rede.CVE_RED_SOCIAL">{{rede.RED_SOCIAL}}</ion-option>\n\n            </div>\n\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating *ngIf="account.RED_SOCIAL">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon> <b>RED SOCIAL:</b>\n          </ion-label>\n          <ion-label floating *ngIf="!account.RED_SOCIAL">\n            <ion-icon name="home" item-start style="color: #199997"></ion-icon> <b>RED SOCIAL:</b>\n          </ion-label>\n\n          <!-- <ion-label floating *ngIf="!account.RED_SOCIAL"> <ion-icon name="home" item-start style="color: #950000"></ion-icon>  <b>RED SOCIAL ES REQUERIDO:</b> </ion-label> -->\n          <ion-input type="text" [(ngModel)]="account.RED_SOCIAL" name="RED_SOCIAL" #C (ionChange)="onChange()"></ion-input>\n          <ion-label *ngIf="account.RED_SOCIALmessage" style="color: #950000">{{ account.RED_SOCIALmessage }}</ion-label>\n\n        </ion-item>\n\n      </ion-grid>\n\n\n      <!-- <ion-card align="center" (click)="UpdateData()" style=" background: #199997 ">\n  \n          <div class="card-title" style=" color: #fff" align="center">enviar</div>\n\n          \n  \n        </ion-card> -->\n      <ion-grid>\n        <ion-row>\n        \n          <ion-col >\n            <button ion-button block style=" background: #199997 ; color: #fff" (click)="UpdateData()">\n              Actualizar  <ion-icon name="refresh-circle"></ion-icon>\n            </button>\n          </ion-col>\n\n          <ion-col >\n              <button ion-button block style=" background: #199997 ; color: #fff" (click)="consitunar()">\n                Continuar   <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button block style=" background: #bb0d0d ; color: #fff" (click)="cancel()">\n                  Cancelar <ion-icon name="close-circle"></ion-icon>\n                </button>\n              </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jonathan\Documents\ionic3\v2-master\src\pages\updateInfo\updateInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers__["b" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], UpdateInfoPage);
    return UpdateInfoPage;
}());

//# sourceMappingURL=updateInfo.js.map

/***/ })

});
//# sourceMappingURL=0.js.map