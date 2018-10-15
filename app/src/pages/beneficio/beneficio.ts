 
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController,NavParams ,ToastController ,LoadingController, Platform} from 'ionic-angular'; 
import { User } from '../../providers';
import {   FormArray, FormControl} from '@angular/forms';
import { ListMasterPage } from '../list-master/list-master';
import { AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import swal from 'sweetalert2';

 

@IonicPage()
@Component({
  selector: 'page-item-beneficio',
  templateUrl: 'beneficio.html'
})
export class BeneficioPage {
  @ViewChild('fileInput') fileInput; 
  item: any; 
  itemss: any;  
  itemts: any; 
  dataEntregas:any; 
  shownGroup = null;
  emailFormArray: Array<any> = [];
  beneficiosEntregar: Array<any> = []; 
  folioArray: Array<any> = [];
 errores:number=0;

  account:any={};
  beneficios:any=[];
  
  fecha=new Date(); 
  tickets:any;
  loading:any;
  latitude:any;
  logitude:any;
  constructor( public geolocation: Geolocation, public loadingCtrl :LoadingController,public alerCtrl: AlertController,public toastCtrl: ToastController,public user:User, public navParams: NavParams,public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.item =  navParams.get('items'); 
    this.itemss =  navParams.get('data');  
    this.itemts =  navParams.get('datas'); 

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude ;
      this.logitude=  resp.coords.longitude; 
      }).catch((error) => {
        console.log('Error getting location', error);
      });

  }

  ionViewDidLoad() {
    this.getEntregas();
  }



  toggleGroup(group) {
    console.log(group);
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
  
        
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

  getEntregas(){  
   var persona=  this.item;
   var progrmas=  this.itemss;
   this.presentLoadingBubbles();
   this.user.getEntregas(persona,progrmas).then(res=>{
    var ress =JSON.stringify(res);
    var data = JSON.parse(ress)
     

    this.loading.dismiss();
    this.dataEntregas=data;
    var numberSelected = 0;

    console.log( this.item );
    console.log(  this.dataEntregas  );

     
      for(let ee of this.dataEntregas ) {  //2
        for(let dd of this.item ) {//1
          if( dd.APOYOID_IV === ee.APOYOID_IV ){
             
              for (var i = 0; i < dd.APOYOTOTALENTREGAS - ee.TOTAL; i++) {
                console.log(dd.APOYOTOTALENTREGAS,ee.TOTAL) 
                            console.log(i, {'id':i,'APOYOID_IV':dd.APOYOID_IV,'idn':i+dd.APOYOID_IV,"TOTAL": dd.APOYOTOTALENTREGAS - ee.TOTA,"noEntregas":"si"})
                            this.beneficios.push({'id':i,'APOYOID_IV':dd.APOYOID_IV,'idn':i+dd.APOYOID_IV,"TOTAL": dd.APOYOTOTALENTREGAS - ee.TOTAL,"noEntregas":"si"});  
                            numberSelected++; 
                       
                          console.log(this.beneficios); 
                            console.log(1)

          }
      }

     }}
      
    
  
    }, (err) => {
        // this.startNotification(DataL.error.message); 
        this.loading.dismiss();
        this.errores=10;
        var numberSelected = 0;
   

    console.log(this.item );
 

      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
    
      // alert(DataL.error.message); 
      // this.startNotification("datos obtenidos");
    swal('ATENCION', 'Datos Obtenidos','info');


    });

  }


  onChange(f:string,d:any, isChecked: boolean) {
    var datass= JSON.stringify(d);
    var datasqq= JSON.parse(datass); 
    
    console.log(datasqq);

    var cadena ={f,d};
    if(isChecked) {
      this.emailFormArray.push("INTO  GX_PPAPOYODET_IV (  PROGAMA_AIVID, APOYOID_IV, PPAPFOLIOENTREGA, PPAPDETOBSERVACION) VALUES (  '"+datasqq.PROGRAMAID+"', '"+datasqq.APOYOID_IV+"', 'folioPendiente', 'nada')");
    } else {
      let index = this.emailFormArray.indexOf(cadena);
      this.emailFormArray.splice(index,1);
    }
}

duplicate() {
  // alert(this.emailFormArray);
}


Entregar(){  
  console.log(this.emailFormArray.length );
  if( this.emailFormArray.length > 0){
    var data =JSON.stringify(this.item); 
    var datas =JSON.parse(data);  
    var formatedDate = this.fecha.toISOString().substring(0, 10);
    console.log(formatedDate);
    
    this.folioArray.push(" INSERT  INTO  GXPPAPOYO_IV (PROGRAMAID, CVE_PERSONA_PP, PPAPDOCTOIDENTIFICACION, PPAPFOLIOIDENTICIFACION, PPAPFECHAENTREGA, PPAPLATITUD, PPAPLONGITUD, PPAPOBSERVACION, PPAPLUGARENTREGAOBS) VALUES ('"+datas[0].PROGRAMAID+"', '"+datas[0].CVE_PERSONA_PP+"', '0', '123456789',SYSDATE, '"+this.latitude+"', '"+this.logitude+"', 'ninguna', '"+datas[0].LUGARENTREGABENEFICIOID+"')");
   
    var into =this.folioArray.join(" ")
    this.presentLoadingBubbles()
  
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


      this.user.entregar(this.folioArray).then(res=>{
        this.loading.dismiss();
        var ress =JSON.stringify(res);
        var data = JSON.parse(ress)  ;
        console.log(data[0].CURRVAL );
        this.tickets=data[0].CURRVAL;
        var ticket=data[0].CURRVAL;
        var cadena = this.emailFormArray.toString();
        console.log(cadena);
        var letrasCadena = cadena.split(",INTO") ;
        console.log(letrasCadena); 
          for(let d of letrasCadena){
            var cad = d.replace("'folioPendiente'", "'"+ticket+"'"); 
            console.log(letrasCadena);
            if(!letrasCadena[0]){
              this. beneficiosEntregar.push(cad) 
              console.log(  1)
    
            }else{ 
                console.log(  2)
                this. beneficiosEntregar.push("INTO "+cad)
              
            }
           
          }
        console.log( this.beneficiosEntregar);
        console.log( this.emailFormArray);
    
        var into =this.beneficiosEntregar.join(' ');
        this.EntregarTikect(into);
      }, (err) => {
        this.loading.dismiss();
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
        // this.startNotification(DataL.error.message); 
       
        // this.startNotification(DataL.error.message);
    swal('ERROR', DataL.error.message,'error');

      });

  } else{
    // this.startNotification("Debes Selecionar Beneficio");
    swal('ATENCION', 'Debes Selecionar Beneficio!','info');
  }
 

 }


 EntregarTikect(into){ 
  var into2 =this.beneficiosEntregar.join(" ")
  console.log(into2)
  this.presentLoadingBubbles()

  this.user.entregarTicket(into2).then(res=>{
    var demo= JSON.stringify(res);
    var demos= JSON.parse(demo);
    console.log(demos.message);
    this.loading.dismiss();
    // this.getEntregas();//
    this.doAlert()
    this.beneficiosEntregar = []; 
    this.folioArray = [];
    this.errores=0;
    this.emailFormArray=[];
    // this.startNotification(demos.message);
    swal('CORRECTO', demos.message,'success');

    // this.navCtrl.setRoot(ListMasterPage); 


    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      // this.startNotification(DataL.error.message); 
 
      // this.startNotification(DataL.error.message);
    swal('ERROR', DataL.error.message,'error');
      
      this.loading.dismiss();

    });
 }

 doAlert() {
  var year = this.fecha.toISOString().substring(0, 4);
  var mont = this.fecha.toISOString().substring(6, 7);
  
  let confirm = this.alerCtrl.create({
    title: 'Datos Guardados',
    message: "<b>Folio:"+year+mont+"000000"+this.tickets+"</b><br>"+"<b>Entregas:"+this.emailFormArray.length+"</b>",
    buttons: [
     
      {
        text: 'Aceptar',
        handler: () => {
          this.navCtrl.setRoot(ListMasterPage);
        }
      }
    ]
  });
  confirm.present()

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

 cancel(){
  this.navCtrl.setRoot(ListMasterPage); 

}

}



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

 