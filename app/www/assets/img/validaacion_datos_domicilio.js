  //VALIDA DATOS DE DOMICLIO
  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.calle,"Digitar Calle.")) 
   {ban=0;return;}
   else{if(!ValidaNum_Letra(document.Forma.calle)){ ban=0; alert("Existen caracteres no validos como Acentos, Tildes o simbolos en el Campo Calle  ")} }
   if (ValidaDatosDom(document.Forma.calle.value)==1)
   {ban=0;document.Forma.calle.focus();return;}
   if (ValidaDatosDomMach(document.Forma.calle.value)==1)
     {ban=0;document.Forma.calle.focus();return;}
   if (ValidaCalle(document.Forma.calle.value)==true)
	 {alert("El dato de manzana,lote,edificio o departamento deben de pertenecer a numero exterior e interior ");document.registro.calle.focus();ban=0;return;}
  }  

   if (ban==1 ) 
   {
    var Cadena=document.Forma.calle.value;
    var posicionCadeda = Cadena.indexOf("CONOCIDO");
    if (posicionCadeda>=0)
	{
	  document.Forma.calle.value="DOMICILIO CONOCIDO"
	  if( (document.Forma.entrecalle.value=="") || (document.Forma.ycalle.value=="") )
	   {ban=0; alert(" Si su domicilio es conocido, debe especificar entre que calles esta ");}
	}
   }
   
	 


   
  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.nexterior,"Digitar Numero Exterior del Domicilio.")) 
   {ban=0;return;}
   else{
   if ((document.Forma.nexterior.value=="") || (document.Forma.nexterior.value==" ") || (document.Forma.nexterior.value=="SN") || (document.Forma.nexterior.value=="0"))
   {document.Forma.nexterior.value="S/D";}
   if(!ValidaNum_Letra(document.Forma.nexterior)){ ban=0; alert("Existen caracteres no validos  como Acentos, Tildes o simbolos del campo Numero Exterior")} } 
   if (ValidaDatosDom(document.Forma.nexterior.value)==1)
   {ban=0;document.Forma.nexterior.focus();return;}
   if (ValidaDatosDomMach(document.Forma.nexterior.value)==1)
     {ban=0;document.Forma.nexterior.focus();return;}
  }
  
  if ((document.Forma.ninterior.value=="") || (document.Forma.ninterior.value==" ") || (document.Forma.ninterior.value=="SN") || (document.Forma.ninterior.value=="0"))
  {document.Forma.ninterior.value="S/D";}
  if(!ValidaNum_Letra(document.Forma.ninterior)){ ban=0; alert("Existen caracteres no validos como Asentos, Tildes o simbolos en el campo Numero Interior")}
  if (ValidaDatosDom(document.Forma.ninterior.value)==1)
  {ban=0;document.Forma.ninterior.focus();return;}
  if (ValidaDatosDomMach(document.Forma.ninterior.value)==1)
  {ban=0;document.Forma.ninterior.focus();return;}
	 
   if (ban==1 ) 
   {
     if ((document.Forma.nexterior.value=="S/D") || (document.Forma.nexterior.value=="S/N") ||(document.Forma.nexterior.value=="SN") || (document.Forma.nexterior.value=="0"))
     {
	   if( (document.Forma.entrecalle.value=="") || (document.Forma.ycalle.value=="") )
	   {ban=0; alert(" Si su domicilio no tiene numero, debe especificar entre que calles esta ");}
	 }
	 
   }
   
  //INTEGRAR VALIDACIONES PALABRAS NO VALIDAS EN ENTRE CALLE Y CALLE
  if (ban==1)
  {
   if(!ValidaNum_Letra1(document.Forma.entrecalle)){ ban=0; alert("Existen caracteres no validos como Acentos, Tildes o simbolos en el Campo Entre Calle  ")}
  if (ValidaDatosDom(document.Forma.entrecalle.value)==1)
  {ban=0;document.Forma.entrecalle.focus();return;}
  if (ValidaDatosDomMach(document.Forma.entrecalle.value)==1)
  {ban=0;document.Forma.entrecalle.focus();return;}
  }
  
  
  if (ban==1)
  {
   if(!ValidaNum_Letra1(document.Forma.ycalle)){ ban=0; alert("Existen caracteres no validos como Acentos, Tildes o simbolos en el Campo Y Calle  ")}
   if (ValidaDatosDom(document.Forma.ycalle.value)==1)
   {ban=0;document.Forma.ycalle.focus();return;}
   if (ValidaDatosDomMach(document.Forma.ycalle.value)==1)
   {ban=0;document.Forma.ycalle.focus();return;}
  }

  if (ban==1)
  {
   if((document.Forma.entrecalle.value!="")||(document.Forma.ycalle.value!=""))
   {
    if (document.Forma.entrecalle.value==document.Forma.ycalle.value )
	{alert(" El Campo Entre Calle y el Campo Y calle deben ser diferente ");ban=0;}
   }	
  }  

  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.otrarefe,"Digitar Otra Referencia de ubicacion del Domicilio.")) 
   {ban=0;return;}
   else{if(!ValidaNum_Letra1(document.Forma.otrarefe)){ ban=0; alert("Existen caracteres no validos como Acentos, Tildes o simbolos en el Campo Otra Referencia") } } 
   if (ValidaDatosDom(document.Forma.otrarefe.value)==1)
   {ban=0;document.Forma.otrarefe.focus();return;}
   if (ValidaDatosDomMach(document.Forma.otrarefe.value)==1)
   {ban=0;document.Forma.otrarefe.focus();return;}
  }
  
  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.colonia,"Digitar la Colonia.")) 
   {ban=0;return;}
   else{if(!ValidaNum_Letra1(document.Forma.colonia)){ ban=0; alert("Existen caracteres no validos como Acentos, Tildes o simbolos en el Campo Colonia")} } 
   if (ValidaDatosDom(document.Forma.colonia.value)==1)
   {ban=0;document.Forma.colonia.focus();return;}
   if (ValidaDatosDomMach(document.Forma.colonia.value)==1)
   {ban=0;document.Forma.colonia.focus();return;}
  }   
  
  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.CVE_LOCALIDAD,"Seleccionar Localidad cambio la Entidad o Municipio Previamente.")) 
   {ban=0;return;}
  }
   
  // VALIDA DATOS DE CONTACTO
  
   if (ban==1)
   {
   if (ValidaTelefono(1)==0)
   {ban=0;}
   }
   if (ban==1)
   {
   if (ValidaTelefono(2)==0)
   {ban=0;}
   }
   if (ban==1)
   {
    var telefono1= document.Forma.ladatel.value + document.Forma.telefono.value;
	var telefono2=document.Forma.ladafax.value + document.Forma.fax.value;
	if ((telefono1=="") && (telefono2==""))
	{ban=0; alert(" Por lo menos debe definir un telefono para ser contactado ");}
   }


  if (ban==1)
  {
   if (Esta_Vacio(document.Forma.email,"Digitar cuenta de Correo Electronico.")) 
   {ban=0;return;}
  }
  if (ban==1)
  { 
   if (validar_correo(document.Forma.email,"Verificar cuenta de Correo Electronico.")) 
   {ban=0;return;}
  }
  
  if (ban==1)
  { 
    if ((document.Forma.redsocialid1.value=="" )||(document.Forma.redsocialid1.value=="0"))
    {document.Forma.redsocialid1.value="0";document.Forma.redsocial1.value="X";}
    else
    {
	   if (document.Forma.redsocial1.value=="")
    	{alert("Debe definir la Red Social 1");ban=0;document.Forma.redsocial1.focus();}
		
    }
  }
  
  if (ban==1)
  {
   if ((document.Forma.redsocialid2.value=="" )||(document.Forma.redsocialid2.value=="0"))
    {document.Forma.redsocialid2.value="0";document.Forma.redsocial2.value="X";}
    else
    {
	   if (document.Forma.redsocial2.value=="")
       {alert("Debe definir la Red Social 2 ");ban=0;document.Forma.redsocial2.focus();}
    }
  }
 
   if (ban==1 ) 
   { 
    document.Forma.Accion.value = cAccion;
    document.Forma.submit(); 
   }

//-------------------------------------------------------------------------//


function ValidaTelefono(tipo)
{
	var ban=1;
	if (tipo==1)
	{
		var tel1= document.Forma.ladatel.value;
		var tel2= document.Forma.telefono.value;
		var telefono= tel1 + tel2;
	
	}
	else
	{
	  var tel1= document.Forma.ladafax.value;
	  var tel2= document.Forma.fax.value;
	  var telefono= tel1 + tel2;
	}
	if (telefono!="") 
	{
	  var numeroLetras = telefono.length;
	  //si valor de tipo es 1 valido lada 
      	
	   if (numeroLetras!=10 )
	   {
	     alert("El numero de caracteres de Lada y telefono deben ser igual a 10");
		 ban=0
		 if (tipo==1)
         { 
	       document.getElementById("ladatel").focus();
		 }
		 else
		 {
	       document.getElementById("ladafax").focus();
		 }
	   }
	   else
	   {
	     if (!ValidaNum(telefono))
		 {
		   alert("El valor de Lada y Telefono debe ser numerico");
		   ban=0
		   if (tipo==1)
          { 
	       document.getElementById("ladatel").focus();
		  }
		  else
		  {
	       document.getElementById("ladafax").focus();
		  }
		 }
	   }
	}
     return ban;
 }

function ValidaCalle(Expresion)
{
 var cant =/ MANZANA | MNZ | MZA | MZ | LOTE | LT | LTE | DEPTO | DEPARTAMENTO | CS | SECTOR | EDIFICIO | EDIF | MNZ. | MZA. | MZ. | LT. | LTE. | DEPTO. | EDIF. /;
 if (!Expresion.match(cant))
  {ban1=false;}
 else {ban1=true;}
 return ban1;
}



// FUNCION QUE CARGA LAS PALABRAS INVALIDAS EN DOMICILIO.
 <%'CONSULTA PARA OBTENER LOS DATOS

  total_registros="0"
 cSql="SELECT COUNT(*) FROM CAT_INVALIDAS "
  
  oRegistroA.Open cSql, xTipoDB,3,3	
  total_registros=Clng(oRegistroA(0))
  xresp=CierraRegistroAux()  
 
 cSql="SELECT * FROM CAT_INVALIDAS "      
oRegistroA.Open cSql, xTipoDB,3,3	
   x=0
   %>
   function ValidaDatosDom(cadena_evaluar)
   {
        total=<%=total_registros%>
	    subcat=new Array(total);
		
	  <%
       count= 0
       y=0
       do while not oRegistroA.eof
      %>
	    x = <%= trim(y) %>;
		subcat[x]="<%=(oRegistroA("CADENA"))%>"; 		
	   <%
           count = count + 1
           y = y + 1
           oRegistroA.movenext
      loop
      xresp=CierraRegistroAux()  
      %>
	  
// --------------------- busca eb base a clave la abreviatura de la entidad ecogida.    
      var y=0;
	  var x=0;
	  var ban1=1;
	  var  existepalabra=0;
	  var  palabras="";
      while(ban1==1)
	  {
	     cadena_areglo=subcat[x]
	      if (trim(cadena_evaluar)==trim(cadena_areglo) ) 
          {
			   existepalabra=1;
			   palabras=palabras + subcat[x] +", ";
           } 
		  y = y + 1;
		  x=y;
		  if (y==(subcat.length))
		  {ban1=0; }
	  }
	  palabras=palabras.substring()
	  if (existepalabra==1) 
	  {alert(" Las palabras  "+palabras+ "  no estan permitidas para este campo, favor de complementar correctamente la informacion " );}
	  return existepalabra;
//---------------------------------------------
}   

 // FUNCION QUE CARGA LAS PALABRAS INVALIDAS EN DOMICILIO.
 <%'CONSULTA PARA OBTENER LOS DATOS

  total_registros="0"
 cSql="SELECT COUNT(*) FROM CAT_LINVALIDAS "
  
  oRegistroA.Open cSql, xTipoDB,3,3	
  total_registros=Clng(oRegistroA(0))
  xresp=CierraRegistroAux()  
 
 cSql="SELECT * FROM CAT_LINVALIDAS "      
oRegistroA.Open cSql, xTipoDB,3,3	
   x=0
   %>
   function ValidaDatosDomMach(cadena_evaluar)
   {
        total=<%=total_registros%>
	    subcat=new Array(total);
		
	  <%
       count= 0
       y=0
       do while not oRegistroA.eof
      %>
	    x = <%= trim(y) %>;
		subcat[x]="<%=(oRegistroA("CADENA"))%>"; 		
	   <%
           count = count + 1
           y = y + 1
           oRegistroA.movenext
      loop
      xresp=CierraRegistroAux()  
      %>
	  
// --------------------- busca eb base a clave la abreviatura de la entidad ecogida.    
    var y=0;
	  var x=0;
	  var ban1=1;
	  var  existepalabra=0;
	  var  palabras="";
      while(ban1==1)
	  {
	     cadena_areglo=subcat[x][1]
	      if (cadena_evaluar==cadena_areglo ) 
          {
			   existepalabra=1;
			   palabras=palabras + subcat[x][1] +", ";
           } 
		  y = y + 1;
		  x=y;
		  if (y==(subcat.length))
		  {ban1=0; }
	  }
	  palabras=palabras.substring()
	  if (existepalabra==1) 
	  {alert(" Las palabras  "+palabras+ "  no estan permitidas para este campo, favor de complementar correctamente la informacion con DOMICILIO CONOCIDO O S/D " );}
	  return existepalabra;
//---------------------------------------------
}


function ValidaNum_Letra(field)
{
	Expresion=field.value;
	var cant = /^([A-Z\1-9\u00D1\u00DC0\s])*$/;
	if (!Expresion.match(cant))
	{ ban1=false;
	  field.focus();}
	else {ban1=true;}
	return ban1;
}
function ValidaLetra(Expresion)
{
	var letra = /^([A-Z\u00D1\u00DC])*$/;
	if(!Expresion.match(letra))
	{ ban1=false;}
	else {ban1=true;}
	return ban1;
}
function ValidaLetra_Espacio(field)
{
	Expresion=field.value;
	var letra = /^([A-Z\u00D1\u00DC\s])*$/;
	if(!Expresion.match(letra)) //lina 400
	{ ban1=false;
	  alert("existen caracteres o validos en cadena ")
	  field.focus();
	}
	else {ban1=true;}
	return ban1; 
}
function conMayusculas(field) {
   field.value = field.value.toUpperCase()
}

function validar_correo(cCampo,msg)
{
   var s = cCampo.value;
   var filter=/^[A-Za-z.-][A-Za-z0-9_.-]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
   if (filter.test(s))
	  return false;
   else 
   {
	  alert(msg);
	  cCampo.focus();
	  return true;
   }
}