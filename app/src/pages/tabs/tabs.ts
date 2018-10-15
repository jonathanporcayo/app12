import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root  } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root; 
  tab1Title = " ";
  session = localStorage.getItem('session');
 

  constructor(public navCtrl: NavController
    // , public translateService: TranslateService
    ) {
  
     

      if(this.session ==null){ 
      this.navCtrl.setRoot('LoginPage')
      }else{ 
        this.tab1Title = "home" ;
      } 
     
   
  }
}
