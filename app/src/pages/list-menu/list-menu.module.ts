import { NgModule } from '@angular/core';
// import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMemnuPage } from './list-menu';

@NgModule({
  declarations: [
    ListMemnuPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMemnuPage)
    // ,
    // TranslateModule.forChild()
  ],
  exports: [
    ListMemnuPage
  ]
})
export class ListMasterPageModule { }
