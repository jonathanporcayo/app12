import { Component, ViewChild } from '@angular/core'; 
import { Camera } from '@ionic-native/camera';
import { IonicPage, ModalController, NavController, ToastController , ViewController ,LoadingController, Platform} from 'ionic-angular'; 
import {   NavParams } from 'ionic-angular';
import { User } from '../../providers';
import { ListMasterPage} from '../list-master/list-master';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import swal from 'sweetalert2';


 
@IonicPage()
@Component({
  selector: 'page-item-asigna',
  templateUrl: 'asigna.html'
})
export class AsignaPage {
  @ViewChild('fileInput') fileInput; 
  item:any;
  account:any={
   
  };
  loading:any;
  dataUser:any;
  lis:ListMasterPage;
  code:any;
  constructor(public loadingCtrl :LoadingController,public toastCtrl: ToastController,public user:User,navParams: NavParams,public navCtrl: NavController, public viewCtrl: ViewController,public formBuilder: FormBuilder, public camera: Camera) {
    this.account.TARJETA =  navParams.get('item');

   
  }

  ionViewDidLoad() {
    console.log(this.item);

  }

   

// // @param string (string) : Fecha en formato YYYY-MM-DD
// // @return (string)       : Fecha en formato DD/MM/YYYY
//   convertDateFormat(string) {
//   var info = string.split('-');
//   return info[2] + '/' + info[1] + '/' + info[0];
// }

cancel(){
  this.navCtrl.setRoot(ListMasterPage); 

}

  Buscar(){
   
   

    if( this.account.NOMBRE && this.account.PRIMER_APELLIDO && this.account.SEGUNDO_APELLIDO && this.account.FECHA_NACIMIENTO && this.account.SEXO ){
     
      var info =  this.account.FECHA_NACIMIENTO.split("-");
 
      this.account.FECHA_NACIMIENTO=info[2] + '/' + info[1] + '/' + info[0];
      console.log( this.account.FECHA_NACIMIENTO);
      if( this.account.SEXO=='HOMBRE' ){
        this.account.SEXO='H';
      }else{
        this.account.SEXO='M';
      }

      console.log(this.account);
      this.presentLoadingBubbles()
      this.user.buscaUsuartio(this.account ).then((resp) => {  
       var array = JSON.stringify(resp);
       var objed=JSON.parse(array);
       this.loading.dismiss();
  this.dataUser=resp[0];
  this.account.CVE_PERSONA=resp[0].CVE_PERSONA;
  this.account.GXQRPERSONAIDTARJETA=resp[0].GXQRPERSONAIDTARJETA;

         console.log(resp);
     
       
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
       this.loading.dismiss();
  
        // this.startNotification(DataL.error.message); 
    // swal('ERROR', DataL.error.message,'error');
    swal('ATENCION','Beneficiario No Encontrado','info');


      });
    }else{
      // this.startNotification('Campos Vacios'); 
    swal('ATENCION','Campos Vacios','info');

    }
     
    
  }
   

  AsignarID(){ 
      this.presentLoadingBubbles()
      this.user.AsignarID(this.account ).then((resp) => {  
       var array = JSON.stringify(resp);
       var objed=JSON.parse(array);
       this.loading.dismiss();
  this.dataUser=resp[0];
         console.log(resp); 
         this.scanCodeBarras()
          
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
       this.loading.dismiss();
  
        // this.startNotification(DataL.error.message); 
    swal('ATENCION', DataL.error.message,'info');

      }); 
  }

  no(){
    this.navCtrl.setRoot(ListMasterPage);

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

  presentLoadingBubbles() {
    this.loading = this.loadingCtrl.create({
       spinner: 'bubbles',
       content: 'Cargando...' 
     });
   
     this.loading.present();
   }




   scanCodeBarras() {
    // this.barcodeScanner.scan().then(barcodeData => { 

    this.presentLoadingBubbles();
    // this.code= barcodeData.text;
    this.code= this.account.TARJETA;

    
    this.user.getDataUserBar(this.code).then((resp) => {

      console.log(resp[0].CVE_PERSONA)
      this.getDataUserBeneficio(resp[0])
      //this.compledData(resp[0]);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      if(DataL.error.message=='Usuario No Existe'){
        // this.startNotification('Beneficiario No Existe'); 
    swal('ATENCION','Beneficiario No Encontrado','info');

        this.navCtrl.push(AsignaPage, {
          item: this.code 
        });
      } 
    });

  
}
getDataUserBeneficio(data) {
  this.user.getDataUserBeneficio(data).then((resp) => {
    this.loading.dismiss();
    console.log(resp[0])
    this.compledData(resp[0], data);
  }, (err) => {
    var data = JSON.stringify(err);
    var DataL = JSON.parse(data)
    this.loading.dismiss();
    // this.startNotification(DataL.error.message);
    swal('ERRROR',DataL.error.message,'error');

  });

}

compledData(datas, data) {
  console.log(datas);
  this.navCtrl.push('UpdateInfoPage', {
    item: datas,
    items: data
  });
}

 
}
