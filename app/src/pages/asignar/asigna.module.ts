import { NgModule } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AsignaPage } from './asigna';

@NgModule({
  declarations: [
    AsignaPage,
  ],
  imports: [
    IonicPageModule.forChild(AsignaPage)
    // ,
    // TranslateModule.forChild()
  ],
  exports: [
    AsignaPage
  ]
})
export class UpdateInfoPageModule { }
