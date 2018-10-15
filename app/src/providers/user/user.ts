import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class User {
  _user: any;
  session = JSON.parse(localStorage.getItem('session'));
  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {

    let postData = {
      "username": accountInfo.email,
      "password": accountInfo.password
    };

    let seq = this.api.post('Auth', postData  ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  entregar(data) {

    let postData = {
      "data": data
    };


    let seq = this.api.post('Entregar', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }


  load() { 

    let seq = this.api.load( ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }




  getDependencia(id) {

    let postData = {
      "dependenciaID": id.DEPENDENCIAID
    };


    let seq = this.api.post('Dependencia', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  getEntregas(persona, programa) {
    console.log(programa.CVE_PERSONA_PP);
    let postData = {
      "perona": programa.CVE_PERSONA_PP,
      "folio": programa.PROGRAMAID,
      "apoyo": "110"
    };

    let seq = this.api.post('getEntregas', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  geProgramas(id) {

    let postData = {
      "dependenciaID": id.GX_USUARIOSID
    };

    let seq = this.api.post('DependenciaProgramas', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  getDataUserQr(part) {
    let postData = {
      "primerApellido": part[1],
      "segundoApellido": part[2],
      "nombre": part[3],
      "fechaNacimiento": part[4],
      "EntidadNacimiento": part[6]
    };
    console.log(postData)

    let seq = this.api.post('getDataUserQr', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }


  AsignarID(DATA) {
    console.log(DATA);
    let postData = {
      "CVE_PERSONA": DATA.CVE_PERSONA,
      "TARJETA": DATA.TARJETA,
      
    }


    let seq = this.api.post('AsignaID', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }



  buscaUsuartio(DATA) {

    let postData = {
      "NOMBRE": DATA.NOMBRE,
      "PRIMER_APELLIDO": DATA.PRIMER_APELLIDO,
      "SEGUNDO_APELLIDO": DATA.SEGUNDO_APELLIDO,
      "FECHA_NACIMIENTO": DATA.FECHA_NACIMIENTO,
      "SEXO": DATA.SEXO
    }


    let seq = this.api.post('BuscarUsuarioA', postData  ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }



  getDataUserBar(id) {
    let postData = {
      "FOLIO": id 
    }; 
    // let postData = {
    //   "FOLIO": "08547968"
    // }


    let seq = this.api.post('ScannerCodeBar', postData  ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }


  getDataUserBeneficio(folio) {
    let postData = {
      "folioUser": folio.CVE_PERSONA,
    };

    let seq = this.api.post('getDataUserBeneficio', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  GetEntidad() {
    let postData = {};
    let seq = this.api.post('GetEntidades', postData ).map((res) => res).toPromise();
    // seq.subscribe((res: any) => {
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }


  GetLocalidade() {
    let postData = {};
    let seq = this.api.post('GetLocalidades', postData ).map((res) => res).toPromise();
    // seq.subscribe((res: any) => {
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }


  GetMunicipio() {
    let postData = {};
    let seq = this.api.post('GetMunicipios', postData ).map((res) => res).toPromise();
    // seq.subscribe((res: any) => {
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  GetRede() {
    let postData = {};
    let seq = this.api.post('GetRedes', postData ).map((res) => res).toPromise();
    // seq.subscribe((res: any) => {
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }



  updateData(data) {
    let postData = {
      "CALLE": data.CALLE,
      "NUM_EXT": data.NUM_EXT,
      "NUM_INT": data.NUM_INT,
      "ENTRE_CALLE": data.ENTRE_CALLE,
      "Y_CALLE": data.Y_CALLE,
      "OTRA_REFERENCIA": data.OTRA_REFERENCIA,
      "COLONIA": data.COLONIA,
      "LOCALIDAD": data.LOCALIDAD,
      "CODIGO_POSTAL": data.CODIGO_POSTAL,
      "TELEFONO": data.TELEFONO,
      "CELULAR": data.CELULAR,
      "E_MAIL": data.E_MAIL,
      "CVE_PERSONA_PP": data.CVE_PERSONA_PP,
      "CVE_LOCALIDAD": data.CVE_LOCALIDAD,
      "CVE_MUNICIPIO": data.CVE_MUNICIPIO,
      "CVE_ENTIDAD_FEDERATIVA": data.CVE_ENTIDAD_FEDERATIVA,
      "CVE_RED_SOCIAL": data.CVE_RED_SOCIAL,
      "RED_SOCIAL": data.RED_SOCIAL


    };
    console.log(postData)

    let seq = this.api.post('UpdateUser', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }





  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }


  getDataProgrmas(id) {
    let postData = {
      "FOLIO": id

    };
    console.log(postData)

    let seq = this.api.post('ProgrmasUserQr', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }



  getDataProgrmasSelect(id, personaID) {
    let postData = {
      "id": id,
      "personId": personaID

    };
    console.log(postData)

    let seq = this.api.post('ProgramasUserSelect', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  vasiado(data) {

    let postData = {
      "data": data 
    };


    let seq = this.api.post('EntregarTikectsss', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }

  entregarTicket(data) {

    let postData = {
      "data": data
    };

    let seq = this.api.post('EntregarTikects', postData ).map((res) => res).toPromise();

    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   if (res.status == 'success') {
    //     this._loggedIn(res);
    //   } else {
    //   }
    // }, err => {
    //   console.error('ERROR', err);
    // });

    return seq;
  }
}
