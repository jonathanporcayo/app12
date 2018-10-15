import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master';
import { LoadingController, Platform } from 'ionic-angular';
import { User } from '../../providers';
import { MainPage } from '../';
import swal from 'sweetalert2';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage { 
  account: any = {  };
  login:any;
  dependencia:any; 
  programas:any;
  loading:any;
  

  constructor(public loadingCtrl :LoadingController,public navCtrl: NavController,public user: User,   public toastCtrl: ToastController
    // , public translateService: TranslateService
    ) { 
  }

  presentLoadingBubbles() {
   this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando...' 
    });
  
    this.loading.present();
  }
 
  doLogin() {
    if(this.account.email && this.account.password){ 
      // this.navCtrl.setRoot(ListMasterPage); 
      // localStorage.setItem('session',JSON.stringify(this.account));
      this.presentLoadingBubbles()
      this.user.login(this.account).then((resp) => {  
        this.login= resp[0];  
        
       this.getDependenciaLogin();
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
        this.loading.dismiss();
        // this.startNotification(DataL.error.message); 
    swal('ERROR', DataL.error.message,'error');

      });
    }else{
      // this.startNotification('Datos Vacios');
    swal('ATENCION', 'Datos Vacios','info');

    } 
  }


  getDependenciaLogin() { 

      this.user.getDependencia(this.login).then((resp) => {
        this.dependencia= resp[0]; 
        
        this. getProgrmasLogin();
        
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
        this.loading.dismiss();
        // this.startNotification(DataL.error.message); 
    swal('ERROR', DataL.error.message,'error');

      });
   
  }

  getProgrmasLogin() {
    
    this.user.geProgramas(this.login).then((resp) => {
      this.programas= resp;
     console.log( this.dependencia);
     localStorage.setItem('session',JSON.stringify(this.login));  
      localStorage.setItem('dependencias', JSON.stringify(this.dependencia)); 
      localStorage.setItem('programas',JSON.stringify(this.programas)); 
      this.loading.dismiss();
       this.navCtrl.setRoot(ListMasterPage); 
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      // this.startNotification(DataL.error.message); 
    swal('ERROR', DataL.error.message,'error');

    });
 
}
  

  startNotification(data){
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
