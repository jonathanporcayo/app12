import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, ModalController, NavController, ToastController, ViewController, LoadingController, Platform, ShowWhen } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { User } from '../../providers';
import { ConferenceData } from '../../providers';

import { ListMasterPage } from '../list-master/list-master';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import swal from 'sweetalert2';

 
@IonicPage()
@Component({
  selector: 'page-item-updateInfo',
  templateUrl: 'updateInfo.html'
})
export class UpdateInfoPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;
  items: any;
  model: any;
  form: FormGroup;
  account: any = {};
  selectProgramas: any;
  loading: any;
  entidades: any = [];
  municipios: any = [];
  localidades: any = [];
  redes: any = [];
  loginForm: FormGroup;
  cp: any = [];

  municp: any;

  constructor(public entiMuniLocalidad: ConferenceData, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public user: User, navParams: NavParams, public navCtrl: NavController, public viewCtrl: ViewController, public formBuilder: FormBuilder, public camera: Camera) {
    this.user.load().then(res => {
      var d = JSON.stringify(res);
      var s = JSON.parse(d);

      this.cp = s.ALL;
      this.entidades=s.ENTIDADES;
      console.log(this.entidades);
      this.onChange()
     
      // this.municipios=s.MUNICIPIOS;
      //  this.localidades=s.LOCALIDADES;
      this.redes = s.REDES;
      //  this.loading.dismiss();

    });

    

    this.item = navParams.get('item');
    this.items = navParams.get('items');
    console.log(this.item)
    console.log(this.items)

    // console.log(this.item)
    if (this.item) {

      if (this.item.CALLE != null) {
        this.account.CALLE = this.item.CALLE;
      }
      if (this.item.Y_CALLE != null) {
        this.account.Y_CALLE = this.item.Y_CALLE;
      }
      if (this.item.ENTRE_CALLE != null) {
        this.account.ENTRE_CALLE = this.item.ENTRE_CALLE;
      }
      if (this.item.PROGRAMAID != null) {
        this.account.PROGRAMAID = this.item.PROGRAMAID;
      }
      if (this.item.NUM_INT != null) {
        this.account.NUM_INT = this.item.NUM_INT;
      }
      if (this.item.COLONIA != null) {
        this.account.COLONIA = this.item.COLONIA;
      }
      if (this.item.LOCALIDAD != null) {
        this.account.LOCALIDAD = this.item.LOCALIDAD;
      }

      if (this.item.CODIGO_POSTAL != null) {
        this.account.CODIGO_POSTAL = this.item.CODIGO_POSTAL;


      }

      if (this.item.CELULAR != null) {
        this.account.CELULAR = this.item.CELULAR;;
      }

      if (this.item.TELEFONO != null) {
        this.account.TELEFONO = this.item.TELEFONO;
      }
      if (this.item.E_MAIL != null) {
        this.account.E_MAIL = this.item.E_MAIL;
      }
      if (this.item.E_MAIL != null) {
        this.account.CVE_PERSONA_PP = this.item.CVE_PERSONA_PP;
      }

      if (this.item.E_MAIL != null) {
        this.account.OTRA_REFERENCIA = this.item.OTRA_REFERENCIA;
      }

      if (this.item.CODIGO_POSTAL != null) {
        this.account.NUM_EXT = this.item.NUM_EXT;
      } else {
        this.account.NUM_EXT = "S/D";
      }

      if (this.item.CODIGO_POSTAL != null) {
        this.account.CODIGO_POSTAL = this.item.CODIGO_POSTAL;
      }
      if (this.item.CVE_MUNICIPIO != null) {
        this.account.CVE_MUNICIPIO = this.item.CVE_MUNICIPIO;
      }

      if (this.item.CVE_LOCALIDAD != null) {
        this.account.CVE_LOCALIDAD = this.item.CVE_LOCALIDAD;
 

      }
console.log(this.item.CVE_ENTIDAD_FEDERATIVA)

      if (this.item.CVE_ENTIDAD_FEDERATIVA != null) {
        this.account.CVE_ENTIDAD_FEDERATIVA = this.item.CVE_ENTIDAD_FEDERATIVA;
      }
      if (this.item.ENTIDAD_FEDERATIVA != null) {
        this.account.ENTIDAD_FEDERATIVA = this.item.ENTIDAD_FEDERATIVA;
      }
      if (this.item.CVE_RED_SOCIAL != null) {
        this.account.CVE_RED_SOCIAL = this.item.CVE_RED_SOCIAL;
      }

      if (this.item.RED_SOCIAL != null) {
        this.account.RED_SOCIAL = this.item.RED_SOCIAL;
      }


    } else {
      // console.log('no item');
      this.navCtrl.setRoot(ListMasterPage)

    }

  }

  ionViewDidLoad() {





  }

  getDatas() {
    // this.presentLoadingBubbles()
    this.user.load().then(res => {
      var d = JSON.stringify(res);
      var s = JSON.parse(d);

      this.cp = s.ALL;
      this.onChange()
      this.entidades = s.ENTIDADES;
      this.municipios = s.MUNICIPIOS;
      this.localidades = s.LOCALIDADES;
      this.redes = s.REDES;
      //  this.loading.dismiss();

    });
  }

  presentLoadingBubbles() {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Cargando...'
    });

    this.loading.present();
  }

  UpdateData() { 

    if (this.account.E_MAILmessage == null &&      this.account.CALLEmessage == null &&      this.account.Y_CALLEmessage == null &&      this.account.ENTRE_CALLEmessage == null &&      this.account.NUM_EXTmessage == null &&      this.account.NUM_INTmessage == null &&      this.account.COLONIAmessage == null &&      this.account.OTRA_REFERENCIAmessage == null &&      this.account.CODIGO_POSTALmessage == null &&      this.account.TELEFONOmessage == null &&      this.account.CELULARmessage == null) {
      console.log(this.account.CVE_LOCALIDADS)
      if (this.account.CVE_LOCALIDADS) {
        var mun = this.account.CVE_LOCALIDADS;
        var r = JSON.stringify(mun);
        var s = JSON.parse(r); 
        this.account.CVE_LOCALIDAD = s.CVE_LOCALIDAD; 
        this.account.CVE_MUNICIPIO = s.CVE_MUNICIPIO;
      }


      this.presentLoadingBubbles()
      this.user.updateData(this.account).then((resp) => {
        var array = JSON.stringify(resp);
        var objed = JSON.parse(array);
        this.loading.dismiss();

        //  console.log(resp);
        this.startNotification('Datos Modificados Exitosamente');
        // this.ShowAler();


        //  this.ConsultaProgrmas(this.account.PROGRAMAID);
        //this.compledData(resp[0]);
      }, (err) => {
        var data = JSON.stringify(err);
        var DataL = JSON.parse(data)
        this.loading.dismiss();

        this.startNotification(DataL.error.message);
        swal('ERROR', DataL.error.message, 'error')

      });
    } else {
      // this.startNotification('Completa Campos Correctamente'); 
      swal('ATENCION', 'Completa Campos Correctamente', 'info')
    }


  }

  ShowAler() {
    swal('ACTUALIZACION EXITOSA', 'Datos Modificados Exitosamente', 'success')
  }


  consitunar() {
    this.presentLoadingBubbles()
    // this.ConsultaProgrmas(this.account.PROGRAMAID);
    this.ConsultaProgrmasSelect();
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

  consultaUsuario() {

    this.user.getDataProgrmas(this.account.CVE_PERSONA_PP).then((resp) => {

      this.ConsultaProgrmas(this.account.PROGRAMAID);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.loading.dismiss();
      this.startNotification(DataL.error.message);
    });

  }

  ConsultaProgrmas(id) {
    this.user.getDataProgrmas(this.account.CVE_PERSONA_PP).then((resp) => {
      var array = JSON.stringify(resp);
      var objed = JSON.parse(array);

      //  this.ConsultaProgrmasSelect(resp[0].PROGRAMAID,resp[0].CVE_PERSONA_PP)
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.startNotification(DataL.error.message);
    });
  }

  ConsultaProgrmasSelect() {
    console.log()
    this.user.getDataProgrmasSelect(this.item.PROGRAMAID, this.items.CVE_PERSONA).then((resp) => {
      var array = JSON.stringify(resp);
      var objed = JSON.parse(array);
      this.selectProgramas = objed;
      this.loading.dismiss();

      this.listaBeneficios(resp);
    }, (err) => {
      var data = JSON.stringify(err);
      var DataL = JSON.parse(data)
      this.startNotification(DataL.error.message);
    });
  }

  listaBeneficios(data) {
    this.navCtrl.push('BeneficioPage', {
      items: data,
      data: this.item,
      datas: this.items

    });
  }


  valida_calle(data) {
    const regex = /^([A-Za-zÀ-ÿ\u00f1\u00d1\- 1 2 3 4 5 6 7 8 9 0\.\(\)\+ / *\s])*$/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    } else {
      return 'Cadena Invalida Debe contener caracteres A-Z ,0-9,., +,-,()';
    }
  }


  valida_cp(data) {
    const regex = /^[0-9]{5}$/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    } else {
      return 'Rquiere 5 Numeros 0-9 digitos';
    }
  }
  valida_email(data) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+){2}$/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    } else {
      return 'Email no valido usuari@dominio.mx.com';
    }
  }

  valida_tel(data) {
    const regex = /^[0-9]{10}$/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    } else {
      return 'Rquiere 10 Numeros 0-9 digitos';
    }
  }

  valida_Catalogo(data) {
    const regex = /  MANZANA | MNZ | MZA | MZ | LOTE | LT | LTE | DEPTO | DEPARTAMENTO | CS | SECTOR | EDIFICIO | EDIF | MNZ. | MZA. | MZ. | LT. | LTE. | DEPTO. | EDIF. | __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
        //  return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';
      });
      return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';

    } else {

    }
  }


  valida_Catalogo2(data) {
    const regex = /--| __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE/;
    const str = data;
    let m;

    if ((m = regex.exec(str)) !== null) {
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //  console.log(`Found match, group ${groupIndex}: ${match}`);
        //  return ' Cadenas no validas  __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | sin calle |SIN CALLE';
      });
      return ' Cadenas no validas   __ | sin numero | sin nombre | SIN NUMERO | SIN NOMBRE | __| sin numero| sin nombre| SIN NUMERO| SIN NOMBRE|__|sin numero|sin nombre|SIN NUMERO|SIN NOMBRE';

    } else {

    }
  }


  onChange() { 
    if (this.account.CVE_LOCALIDADS) {
      console.log(this.account.CVE_LOCALIDADS)
      var mun = this.account.CVE_LOCALIDADS;
      var r = JSON.stringify(mun);
      var s = JSON.parse(r); 
      this.account.CVE_LOCALIDAD = s.CVE_LOCALIDAD; 
      this.account.CVE_MUNICIPIO = s.CVE_MUNICIPIO;
    }

    /**
     * Valida Calle
     */
    if (this.account.CALLE) {
      var calle = this.valida_calle(this.account.CALLE);
      if (calle) {
        this.account.CALLEmessage = calle;
      } else {
        var calles = this.valida_Catalogo(this.account.CALLE);
        if (calles) {
          this.account.CALLEmessage = calles;
        } else {
          this.account.CALLEmessage = null;
        }
      }
    } else {
      this.account.CALLEmessage = 'campo es requerido';
    }




    /**
   * Valida  Y Calle
   */
    if (this.account.Y_CALLE) {
      var ycalle = this.valida_calle(this.account.Y_CALLE);
      if (ycalle) {
        this.account.Y_CALLEmessage = ycalle;
      } else {
        var ycalles = this.valida_Catalogo2(this.account.Y_CALLE);
        if (ycalles) {
          this.account.Y_CALLEmessage = ycalles;
        } else {
          this.account.Y_CALLEmessage = null;
        }
      }
    } else {

      this.account.Y_CALLEmessage = 'campo es requerido';

    }

    /**
  * Valida ENTRE Calle
  */
    if (this.account.ENTRE_CALLE) {
      var ycalle = this.valida_calle(this.account.ENTRE_CALLE);
      if (ycalle) {
        this.account.ENTRE_CALLEmessage = ycalle;
      } else {
        var ycalles = this.valida_Catalogo2(this.account.ENTRE_CALLE);
        if (ycalles) {
          this.account.ENTRE_CALLEmessage = ycalles;
        } else {
          this.account.ENTRE_CALLEmessage = null;
        }
      }
    } else {

      this.account.ENTRE_CALLEmessage = 'campo es requerido';

    }



    /**
  * Valida ENTRE Calle
  */
    if (this.account.NUM_EXT) {
      var numex = this.valida_calle(this.account.NUM_EXT);
      if (numex) {
        this.account.NUM_EXTmessage = numex;
      } else {
        var numexs = this.valida_Catalogo2(this.account.NUM_EXT);
        if (numexs) {
          this.account.NUM_EXTmessage = numexs;
        } else {
          this.account.NUM_EXTmessage = null;
        }
      }
    } else {
      this.account.NUM_EXTmessage = 'campo es requerido';
    }


    /**
  * Valida ENTRE Calle
  */
    if (this.account.NUM_INT) {
      var numin = this.valida_calle(this.account.NUM_INT);
      if (numin) {
        this.account.NUM_INTmessage = numin;
      } else {
        var numins = this.valida_Catalogo2(this.account.NUM_INT);
        if (numins) {
          this.account.NUM_INTmessage = numins;
        } else {
          this.account.NUM_INTmessage = null;
        }
      }
    } else {
      this.account.NUM_INTmessage = 'campo es requerido';
    }



    /**
  * Valida ENTRE Calle
  */
    if (this.account.COLONIA) {
      var col = this.valida_calle(this.account.COLONIA);
      if (col) {
        this.account.COLONIAmessage = col;
      } else {
        var cols = this.valida_Catalogo2(this.account.COLONIA);
        if (cols) {
          this.account.COLONIAmessage = cols;
        } else {
          this.account.COLONIAmessage = null;
        }
      }
    } else {
      this.account.COLONIAmessage = 'campo es requerido';
    }



    /**
  * Valida ENTRE Calle
  */
    if (this.account.OTRA_REFERENCIA) {
      var otra = this.valida_calle(this.account.OTRA_REFERENCIA);
      if (otra) {
        this.account.OTRA_REFERENCIAmessage = otra;
      } else {
        var otras = this.valida_Catalogo2(this.account.OTRA_REFERENCIA);
        if (otras) {
          this.account.OTRA_REFERENCIAmessage = otras;
        } else {
          this.account.OTRA_REFERENCIAmessage = null;
        }
      }
    } else {
      this.account.OTRA_REFERENCIAmessage = 'campo es requerido';
    }










    if (this.account.CODIGO_POSTAL) {
      var cp = this.valida_cp(this.account.CODIGO_POSTAL);
      if (cp) {
        this.account.CODIGO_POSTALmessage = cp;
        console.log('cambio post code 1')
        if(this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL  && !this.account.CVE_LOCALIDADS){ 
          this.account.CVE_LOCALIDAD = null;  
        } 
        

      } else {
        console.log('cambio post code 2')

        this.account.CODIGO_POSTALmessage = null;  
        // console.log(this.account.CODIGO_POSTAL)
        // console.log(this.item.CODIGO_POSTAL)

        // console.log(this.account.CVE_LOCALIDAD)
        // console.log(this.item.CVE_LOCALIDAD)
        // console.log(!this.account.CVE_LOCALIDADS)

        if(this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL  && !this.account.CVE_LOCALIDADS){ 
          this.account.CVE_LOCALIDAD = null;  
        // console.log('cambio post code 211')

          
        } 

        if(this.account.CODIGO_POSTAL == this.item.CODIGO_POSTAL  && this.account.CVE_LOCALIDAD != this.item.CVE_LOCALIDAD && this.account.CVE_LOCALIDADS ){ 
          this.account.CVE_LOCALIDAD = null; 
        // console.log('cambio post code 222')

        } 

        if(  this.account.CVE_LOCALIDADS && this.account.CODIGO_POSTAL != this.item.CODIGO_POSTAL   && this.account.CVE_LOCALIDAD == this.item.CVE_LOCALIDAD){ 
          this.account.CVE_LOCALIDAD = null; 
    
        // console.log('cambio post code 44') 
        } 
        if(  this.account.CVE_LOCALIDADS && this.account.CODIGO_POSTAL == this.item.CODIGO_POSTAL   && this.account.CVE_LOCALIDAD == this.item.CVE_LOCALIDAD){ 
          this.account.CVE_LOCALIDAD;  
        // console.log('cambio post code 33') 
        } 
      }
    } else {
      console.log('cambio post code 3')

      this.account.CODIGO_POSTALmessage = 'campo es requerido';
    }


    /***
     * valida cp
     */
    if (this.account.TELEFONO) {
      var tel = this.valida_tel(this.account.TELEFONO);
      if (tel) {
        this.account.TELEFONOmessage = tel;
      } else {
        this.account.TELEFONOmessage = null;
      }
    } else {
      this.account.TELEFONOmessage = 'campo es requerido';
    }


    /***
    * valida cp
    */
    if (this.account.CELULAR) {
      var CELULAR = this.valida_tel(this.account.CELULAR);
      if (CELULAR) {
        this.account.CELULARmessage = CELULAR;
      } else {
        this.account.CELULARmessage = null;
      }
    } else {
      this.account.CELULARmessage = 'campo es requerido';
    }

    /***
  * valida cp
  */
    if (this.account.E_MAIL) {
      var mail = this.valida_email(this.account.E_MAIL);
      if (mail) {
        this.account.E_MAILmessage = mail;
      } else {
        this.account.E_MAILmessage = null;
      }
    } else {
      this.account.E_MAILmessage = 'campo es requerido';
    }




    /***
  * valida cp
  */
    // if(this.account.RED_SOCIAL){  
    //   var RED_SOCIAL = this.valida_email(this.account.RED_SOCIAL);
    //   if(RED_SOCIAL){
    //     this.account.RED_SOCIALmessage = RED_SOCIAL;
    //   }else{ 
    //       this.account.RED_SOCIALmessage = null;   
    //   }  
    // }else{ 
    //     this.account.RED_SOCIALmessage ='campo es requerido'; 
    // }



  }


  cancel() {
    this.navCtrl.setRoot(ListMasterPage);

  }
}