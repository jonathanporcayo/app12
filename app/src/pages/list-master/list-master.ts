import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Nav, App, MenuController, LoadingController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { User } from '../../providers';
import { Injectable, NgZone } from '@angular/core'; 
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import {  AsignaPage } from '../asignar/asigna';
import {  LocalizationPage } from '../localization/localization';

import swal from 'sweetalert2';


 




@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})

@Injectable()
export class ListMasterPage {
  @ViewChild(Nav) nav: Nav;
  currentItems: Item[];
  accont: any = {};
  session = JSON.parse(localStorage.getItem('session'));
  dependencias = JSON.parse(localStorage.getItem('dependencias'));
  colors: any = [    { "id": "0", "color": "color0" },    { "id": "1", "color": "color1" },    { "id": "2", "color": "color2" },    { "id": "3", "color": "color3" },    { "id": "4", "color": "color4" },   { "id": "5", "color": "color5" },    { "id": "6", "color": "color6" },    { "id": "7", "color": "color0" },    { "id": "8", "color": "color1" },    { "id": "9", "color": "color2" },    { "id": "10", "color": "color3" },    { "id": "11", "color": "color4" },    { "id": "12", "color": "color5" },    { "id": "13", "color": "color6" },];

  programasSelect = localStorage.getItem('programasSelect');
  programas: any;

  qrData = null;
  createdCode = null;
  scannedCode = null;
  loading: any;
  entidades: any;
  municipios: any;
  localidades: any;
  redes: any;
  code:any;


  appMenuItems: any[] = [
    { title: 'Inicio', component: 'TutorialPage', icono: 'home' },
    { title: 'Scanner', component: 'WelcomePage', icono: 'qr-scanner' },
    { title: 'estadisticas', component: 'TabsPage', icono: 'people' }
  ];





  public watch: any;
  latitude: number;
  longitude: number;

  rootPage: any;
  animals: any = [];
  constructor(public loadingCtrl: LoadingController, public geolocation: Geolocation, public zone: NgZone, private user: User, app: App, public menu: MenuController, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public toastCtrl: ToastController, ) {
    var d = JSON.parse(localStorage.getItem('programas'));

    this.programas = d;

     
    if (!localStorage.getItem('red')) {
      // this.GetRede();
    }
    this.menuset();


  }


  ionViewDidLoad() {
    // this.scanCode();
    this.menuset();


    // this.geolocation.getCurrentPosition().then((resp) => {
    //  alert( resp.coords.latitude +"--"+  resp.coords.longitude);
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

  presentLoadingBubbles() {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando...'
    });

    this.loading.present();
  }

  geo() {
    this.geolocation.getCurrentPosition().then(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      // alert( position.coords.longitude+"-------"+position.coords.latitude);
    }, error => {
      // console.log('error', error);
    });
  }





  menuset() {
    this.enableMenuHiden();
    if (this.session == null && this.programasSelect == null) {
      this.enableMenuHiden();
    } else {
      this.enableMenu();

    }
  }

  Programa(data) {
    // console.log(data);
    localStorage.setItem('programasSelect', JSON.stringify(data));
    this.programasSelect = localStorage.getItem('programasSelect');
    //   this.navCtrl.setRoot(ListMasterPage);
    //  this.menuset();

  }

  enableMenu() {
    this.menu.enable(true, 'loggedOutMenu');

  }

  enableMenuHiden() {
    this.menu.enable(false, 'loggedOutMenu');
  }

  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  codigo() {
    if (this.accont.codigo == '1') {
      // this.startNotification('si es beneficiario');
      swal('ERROR', 'Tarjeta No Existe...', 'error')

      this.Beneficio('data');
    }

    if (this.accont.codigo == '2') {
      this.startNotification(' no beneficiario');
    }

    if (this.accont.codigo == '3') {
      this.startNotification('completar datos');
      this.compledData('data', 'data');
    }
  }


  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

  logout() {
    // localStorage.clear();
    localStorage.removeItem('dependencias');
    localStorage.removeItem('programas'); 
    localStorage.removeItem('programasSelect');
    localStorage.removeItem('session');
    this.navCtrl.setRoot(LoginPage);
    //this.navCtrl.setRoot(ListMasterPage); 
  }

  Beneficio(data) {
    let addModal = this.modalCtrl.create('BeneficioPage');
    addModal.onDidDismiss(item => {
      // console.log(item);
    })
    addModal.present();
  }

  startNotification(data) {

    const toast = this.toastCtrl.create({
      message: data,
      showCloseButton: true,
      duration: 3000,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  compledData(datas, data) {
    // console.log(datas);
    this.navCtrl.push('UpdateInfoPage', {
      item: datas,
      items: data
    });
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan(
      /* {
      preferFrontCamera : true, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)       
      prompt : "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
  } */
    ).then(barcodeData => {
      // alert(barcodeData.text);
      var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>" + barcodeData.text + "</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
      // var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>iLlrLpBfI0cpqKiqUrU5d+LL9j9Wpuf7wvLttyKK4KtHcxWyyJvSmuz5sMPS7K/F</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      var thas = this;
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
    })
  }

  UserDataQr(data) {
    this.user.getDataUserQr(data).then((resp) => {
      // console.log(resp[0].CVE_PERSONA)
      this.getDataUserBeneficio(resp[0])
      //this.compledData(resp[0]);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      // this.startNotification(DataL.error.message);
      swal('ERROR', DataL.error.messag, 'error')

    });

  }


  map(){
    this.navCtrl.push(LocalizationPage);
  }

  getDataUserBeneficio(data) {
    this.user.getDataUserBeneficio(data).then((resp) => {
      this.loading.dismiss();
      // console.log(resp[0])
      this.compledData(resp[0], data);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      // this.startNotification(DataL.error.message);
      swal('ERROR', DataL.error.messag, 'error')

      
    });

  }


  scanCodeBuscar(folio)
  {
    // console.log(folio);
    // this.barcodeScanner.scan().then(barcodeData => { 

    this.presentLoadingBubbles();
   

    
    this.user.getDataUserBar(folio).then((resp) => {

      // console.log(resp[0].CVE_PERSONA)
      this.getDataUserBeneficio(resp[0])
      //this.compledData(resp[0]);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      if(DataL.error.message=='Usuario No Existe'){
        // this.startNotification('Beneficiario No Existe'); 
      swal('ERROR', 'Tarjeta no Asignada', 'error')
      // swal('Oops...', 'Something went wrong!', 'error')
        this.navCtrl.push(AsignaPage, {
          item: this.code 
        });
      } 
    });

    // })
  }

  scanCodeBarras() {
    this.barcodeScanner.scan().then(barcodeData => { 
    this.presentLoadingBubbles();
    // this.code= barcodeData.text;
    this.code= '0857503';

    
    this.user.getDataUserBar(this.code).then((resp) => {

      // console.log(resp[0].CVE_PERSONA)
      this.getDataUserBeneficio(resp[0])
      //this.compledData(resp[0]);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      if(DataL.error.message=='Usuario No Existe'){
        // this.startNotification('Beneficiario No Existe'); 
        // swal('ERROR', 'Tarjeta No Asignada', 'error')
        swal({
          title: 'TARJETA NO ASIGANA',
          text: "Quieres Asignar Tarjeta a Beneficiario?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'SI',
          confirmButtonColor: '#199997',
          cancelButtonColor: '#bb0d0d',
          cancelButtonText: 'NO',
          
        }).then((result) => {
          if (result.value) {
            // swal(
            //   'ASIGNA TARJETA',
            //   'BUSCA BENEFICIACIO.',
            //   'success'
            // )
            this.navCtrl.push(AsignaPage, {
              item: this.code 
            });
          }
        })

     
      } 
    });

    })
  }


  // getEntidad() {
  //   this.presentLoadingBubbles()
  //   this.user.GetEntidad().subscribe((resp) => {  
  //     this.entidades = resp;
  //     console.log(this.entidades );
  //     localStorage.setItem('entidad', JSON.stringify(this.entidades) );
  //     this.getMunicipio();
  //   }, (err) => {
  //     var data = JSON.stringify(err);
  //     var DataL = JSON.parse(data)
  //     this.loading.dismiss();
  //     this.startNotification(DataL.error.message);
  //   });
  // }

  // getMunicipio() {

  //   this.user.GetMunicipio().subscribe((resp) => { 
  //     this.municipios = resp;
  //     localStorage.setItem('municipio', JSON.stringify(this.municipios));
 
  //     this.GetLocalidade();;
     
  //   }, (err) => {
  //     var data = JSON.stringify(err);
  //     var DataL = JSON.parse(data)
  //     this.loading.dismiss();
  //     this.startNotification(DataL.error.message);
  //   });
  // }

  // GetLocalidade() {
  //   this.user.GetLocalidade().subscribe((resp) => {  
  //     this.localidades=resp;

  //     localStorage.setItem('localidad', JSON.stringify(this.localidades));
  //     this.GetRede();
  //   }, (err) => {
  //     var data = JSON.stringify(err);
  //     var DataL = JSON.parse(data)
  //     this.loading.dismiss();
  //     this.startNotification(DataL.error.message);
  //   });
  // }

  // GetRede() {
  //    this.presentLoadingBubbles()

  //   this.user.GetRede().subscribe((resp) => { 
  //     this.redes=resp;

  //     localStorage.setItem('red',  JSON.stringify(this.redes));
  //     this.loading.dismiss();
  //   }, (err) => {
  //     var data = JSON.stringify(err);
  //     var DataL = JSON.parse(data)
  //     this.loading.dismiss();
  //     this.startNotification(DataL.error.message);
  //   });
  // }



}
