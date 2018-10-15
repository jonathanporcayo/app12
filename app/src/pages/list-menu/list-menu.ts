import { Component, ViewChild } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular'; 
import { Item } from '../../models/item';
import { Items } from '../../providers'; 
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Nav, App, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ListMasterPage} from '../list-master/list-master'
import { User } from '../../providers'; 
@IonicPage()
@Component({
  selector: 'page-list-menu',
  templateUrl: 'list-menu.html'
})
export class ListMemnuPage {
  @ViewChild(Nav) nav: Nav;
  currentItems: Item[];
  accont: any = {};
  session = JSON.parse(localStorage.getItem('session'));
  programasSelect =  localStorage.getItem('programasSelect');
    programas = JSON.parse( localStorage.getItem('programas'));

  qrData = null;
  createdCode = null;
  scannedCode = null;



  appMenuItems: any[] = [
    { title: 'Inicio', component: 'TutorialPage', icono: 'home' },
    { title: 'Scanner', component: 'WelcomePage', icono: 'qr-scanner' } 
  ];


  rootPage: any;

  constructor(private user:User,app: App, public menu: MenuController, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public toastCtrl: ToastController, ) {
 
   this.menuset();
  }

  ionViewDidLoad() {
    // this.scanCode();
   this. menuset();
  }

  menuset(){
    this.enableMenuHiden();
    if (this.session == null && this.programasSelect==null) {
      this.enableMenuHiden();
    } else {
      this.enableMenu();

    }
  }

  Programa(data){
    console.log(data);
    localStorage.setItem('programasSelect',data);  
   this.menuset();
   this.navCtrl.setRoot(ListMasterPage);

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
      this.startNotification('si es beneficiario');
      this.Beneficio('data');
    }

    if (this.accont.codigo == '2') {
      this.startNotification(' no beneficiario');
    }

    if (this.accont.codigo == '3') {
      this.startNotification('completar datos');
      this.compledData('data','data');
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
      console.log(item);
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

  compledData(datas,data) {
    console.log(datas);
    this.navCtrl.push('UpdateInfoPage', {
      item: datas,
      items:data
    }); 
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {

      var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>" + barcodeData.text + "</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
      // var data = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ser=\"ServerDecrypt\">\r\n   <soapenv:Header/>\r\n   <soapenv:Body>\r\n      <ser:PWSDecrypt.Execute>\r\n         <ser:Cadenaencriptada>iLlrLpBfI0cpqKiqUrU5d+LL9j9Wpuf7wvLttyKK4KtHcxWyyJvSmuz5sMPS7K/F</ser:Cadenaencriptada>\r\n      </ser:PWSDecrypt.Execute>\r\n   </soapenv:Body>\r\n</soapenv:Envelope>";
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      var thas = this;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4  ) {
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
      this.user.getDataUserQr(data ).then((resp) => {  
        console.log(resp[0].CVE_PERSONA)
        this.getDataUserBeneficio(resp[0])
        //this.compledData(resp[0]);
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
        this.startNotification(DataL.error.message); 
      });
   
  }

  getDataUserBeneficio(data) { 
    this.user.getDataUserBeneficio(data ).then((resp) => {    
      console.log(resp[0])
      this.compledData(resp[0],data);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.startNotification(DataL.error.message); 
    });
 
}
}
