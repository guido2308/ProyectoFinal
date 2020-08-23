function Agregar(){
	var ingEmail = document.getElementById("R_correo");
	localStorage.setItem("correo",ingEmail.value);
	
	var ingContra = document.getElementById("R_contra");
	localStorage.setItem("contra",ingContra.value);
	
	if(R_correo !== "" && R_contra !== ""){
		alert("Cuenta Creada. Regresando al Login.");
		window.location.href = "index.html";
	}
}
function Validar(){
	var mostEmail = localStorage.getItem("correo");
	var mostCont = localStorage.getItem("contra");
	
	var LogEmail =  document.getElementById("L_correo")
	var LogCont =  document.getElementById("L_contra")
	
	if(LogEmail.value == mostEmail && LogCont.value == mostCont){
		alert("Datos Correctos.");
		window.location.href = "Datos.html";
	}
	else{
		alert("Datos Incorrectos.");
		window.location.reload(false);
	}
}
function Guardar(){
	var nom = document.getElementById("nombre");
	localStorage.setItem("nombre", nom.value);
	
	var ape = document.getElementById("apellido");
	localStorage.setItem("apellido", ape.value);
	
	var fec = document.getElementById("fecha");
	localStorage.setItem("fecha", fec.value);
	
	var se = document.getElementById("sexo");
	localStorage.setItem("sexo", se.value);
	
	var sng = document.getElementById("sangre");
	localStorage.setItem("sangre", sng.value);
	
	var sll = document.getElementById("silla");
	localStorage.setItem("silla", sll.value);
	
	var fot = document.getElementById("foto");
	localStorage.setItem("foto", fot);
	
	if(nombre !== "" && apellido !== ""){
		alert("Datos Guardados");		
	}	
}
function Cargar(){
	document.getElementById("nomG").innerHTML = localStorage.getItem("nombre");
	document.getElementById("apeG").innerHTML = localStorage.getItem("apellido");
	document.getElementById("fecG").innerHTML = localStorage.getItem("fecha");
	document.getElementById("seG").innerHTML = localStorage.getItem("sexo");
	document.getElementById("sanG").innerHTML = localStorage.getItem("sangre");
	document.getElementById("sllG").innerHTML = localStorage.getItem("silla");
	document.getElementById("ftG").innerHTML = localStorage.getItem("foto");
}
function GuardarMeds(){
	var est = document.getElementById("estatura");
	localStorage.setItem("estatura", est.value);
	
	var pes = document.getElementById("peso");
	localStorage.setItem("peso", pes.value);
	
	var cnt = document.getElementById("cintura");
	localStorage.setItem("cintura", cnt.value);
	//formulas
	/*
	var ims var cc = (localStorage.getItem("peso") * localStorage.getItem("peso"))/ localStorage.getItem("estatura");
	localStorage.setItem("indice", ims.value);
	
	var mm var cc = (1.10 *localStorage.getItem("peso") ) - (128 * localStorage.getItem("peso")*localStorage.getItem("peso") )/ localStorage.getItem("estatura")*ocalStorage.getItem("estatura");
	localStorage.setItem("magra", mm.value);
	
	var pgc var cc = localStorage.getItem("peso") / (localStorage.getItem("estatura")*localStorage.getItem("estatura"));
	localStorage.setItem("porcentaje", ims.value);
	*/
	if(estatura !== "" && peso !== "" ){
		alert("Datos Guardados");
	}
}
function MostrarMeds(){
	document.getElementById("estG").innerHTML = localStorage.getItem("estatura");
	document.getElementById("peG").innerHTML = localStorage.getItem("peso");
	document.getElementById("ccG").innerHTML = localStorage.getItem("cintura");
	document.getElementById("imcG").innerHTML = localStorage.getItem("indice");
	document.getElementById("mcmG").innerHTML = localStorage.getItem("magra");
	document.getElementById("pgcG").innerHTML = localStorage.getItem("porcentaje");	
}
function GuardarActs(){
	var pss = document.getElementById("pasos");
	localStorage.setItem("pasos",pss.value);
	
	var dista = document.getElementById("distancia");
	localStorage.setItem("distancia", dista.value);
	
	if(pasos !== "" && distancia !== ""){
		alert("Datos Guardados.");
	}
}
function MostrarActs(){
	document.getElementById("peG").innerHTML = localStorage.getItem("pasos");
	document.getElementById("disG").innerHTML = localStorage.getItem("distancia");
}
function GuardarNutri(){
	var aci = document.getElementById("acido");
	localStorage.setItem("acido", aci.value);
	
	var agu = document.getElementById("agua");
	localStorage.setItem("agua", agu.value);
	
	var azu = document.getElementById("azucar");
	localStorage.setItem("azucar", azu.value);
	
	var bio = document.getElementById("biotina");
	localStorage.setItem("biotina", bio.value);
	
	var cafe = document.getElementById("cafeina");
	localStorage.setItem("cafeina", cafe.value);
	
	var cal = document.getElementById("calcio");
	localStorage.setItem("calcio", cal.value);
	
	var carb = document.getElementById("carbohidratos");
	localStorage.setItem("carbohidratos", carb.value);
	
	var clo = document.getElementById("cloro");
	localStorage.setItem("cloro", clo.value);
	
	var cob = document.getElementById("cobre");
	localStorage.setItem("cobre", cob.value);
	
	var cole = document.getElementById("colesterol");
	localStorage.setItem("colesterol", cole.value);
	
	var cro = document.getElementById("cromo");
	localStorage.setItem("cromo", cro.value);
	
	if(agua !== "" ){
		alert("Datos Guardados");		
	}	
	
}
function MostrarNutri(){
	document.getElementById("acG").innerHTML = localStorage.getItem("acido");
	document.getElementById("agG").innerHTML = localStorage.getItem("agua");
	document.getElementById("adG").innerHTML = localStorage.getItem("azucar");
	document.getElementById("bioG").innerHTML = localStorage.getItem("biotina");
	document.getElementById("cafG").innerHTML = localStorage.getItem("cafeina");
	document.getElementById("calG").innerHTML = localStorage.getItem("calcio");
	document.getElementById("carbG").innerHTML = localStorage.getItem("carbohidratos");
	document.getElementById("cloG").innerHTML = localStorage.getItem("cloro");
	document.getElementById("cobG").innerHTML = localStorage.getItem("cobre");
	document.getElementById("cendG").innerHTML = localStorage.getItem("colesterol");
	document.getElementById("cromG").innerHTML = localStorage.getItem("cromo");
}
function sueno(){
	window.location.href = "Sueno.html";
}
function GuardarSue(){
	var horas = document.getElementById("sueno");
	localStorage.setItem("sueno", horas.value);
	
	if(sueno !== "" ){
		alert("Datos Guardados");		
	}	
}
function MostrarSue(){
	document.getElementById("chdG").innerHTML = localStorage.getItem("sueno");
}