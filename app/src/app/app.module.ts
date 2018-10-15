import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Items } from '../mocks/providers/items';
import { Settings, User, Api,ConferenceData } from '../providers';
import { MyApp } from './app.component'; 
import { ListMasterPage } from '../pages/list-master/list-master'; 
import {  AsignaPage } from '../pages/asignar/asigna';


import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
// import { Geolocation } from '@ionic-native/geolocation';
import { LocalizationPage } from '../pages/localization/localization';
 

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
 
import { Transfer} from '@ionic-native/transfer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { FilePath } from '@ionic-native/file-path'; 

export function provideSettings(storage: Storage) { 
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
 

// import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {Camera} from '@ionic-native/camera';

import { Geolocation } from '@ionic-native/geolocation';

import { SQLite } from '@ionic-native/sqlite';

 
@NgModule({
  declarations: [
    MyApp,ListMasterPage,LoginPage,MenuPage,AsignaPage,LocalizationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [HttpClient]
    //   }
    // }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,ListMasterPage,LoginPage,MenuPage,AsignaPage,LocalizationPage
  ],
  providers: [ 
    BarcodeScanner,
    // BackgroundGeolocation,
    Geolocation,
    Api,ConferenceData,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    FileOpener,
    BarcodeScanner,
    // Camera,
    // Geolocation,
    SQLite, 
    Transfer, 
    FilePath,FileTransfer
  ]
})
export class AppModule { }
