window.onload =function(){
	var info=document.getElementById("info");
	var watchId;



var txt =" ";
txt += "<p> Quantidade de memoria: "+ navigator.deviceMemory +"</p>";
txt += "<p> Estado da conexão: "+ navigator.online +"</p>";
txt += "<p> Linguaguem do navegador: " + navigator.language +"</p>";
txt += "<p> Usuario Agente: " + navigator.userAgent +"</p>";

document.getElementById("info").innerHTML= txt;

}
