import { NgModule } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UpdateInfoPage } from './updateInfo';

@NgModule({
  declarations: [
    UpdateInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateInfoPage)
    // ,
    // TranslateModule.forChild()
  ],
  exports: [
    UpdateInfoPage
  ]
})
export class UpdateInfoPageModule { }
