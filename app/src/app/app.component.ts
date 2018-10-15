import { Component, ViewChild } from '@angular/core';  
import {  Nav, Platform , App, MenuController } from 'ionic-angular'; 
import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import { MainPage } from '../pages';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ListMasterPage } from'../pages/list-master/list-master';

import { LoginPage } from '../pages/login/login';





@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage :any;
  session =  localStorage.getItem('session');
  dependencias =  localStorage.getItem('dependencias');
  programas =  localStorage.getItem('programas');
 

  @ViewChild(Nav) nav: Nav;
  
  

  constructor(app: App,   public menu: MenuController,   public platform: Platform, settings: Settings, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
 
  this.enableMenuHiden();
    if(this.session ==null && this.dependencias==null && this.programas==null){ 
      this.enableMenuHiden(); 
      this.rootPage=LoginPage;

    }else{ 
      this.enableMenu();
      this.rootPage=ListMasterPage;    
    }  
  }

  enableMenu( ) {
    this.menu.enable(true, 'loggedOutMenu');
  
  }

  enableMenuHiden( ) { 
    this.menu.enable(false, 'loggedOutMenu'); 
  }
 

  openPage(page) { 
    this.nav.setRoot(page.component);
  }
  Salir(){
    // localStorage.clear();
    localStorage.removeItem('dependencias');
    localStorage.removeItem('programas'); 
    localStorage.removeItem('programasSelect');
    localStorage.removeItem('session');



    this.rootPage=FirstRunPage;
  }
}
