import { NgModule } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BeneficioPage } from './beneficio';

@NgModule({
  declarations: [
    BeneficioPage,
  ],
  imports: [
    IonicPageModule.forChild(BeneficioPage)
    // ,
    // TranslateModule.forChild()
  ],
  exports: [
    BeneficioPage
  ]
})
export class  BeneficioPageModule { }
