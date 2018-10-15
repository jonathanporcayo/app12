import { NgModule } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { LocalizationPage } from './localization';

@NgModule({
  declarations: [
    LocalizationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizationPage)
    // ,
    // TranslateModule.forChild()
  ],
  exports: [
    LocalizationPage
  ]
})
export class UpdateInfoPageModule { }
