window.onload=function(){
	var Ip=document.getElementById("Ip");
	var watchId;

fetch ('https://ipinfo.io/')
.then(function(response) {
	response.json().then(jsonData=> {
		console.log(jsonData);
	});
});
.catch(function(error){
	console.log(error)
});
}

